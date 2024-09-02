// Copyright (C) 2017-2023 Smart code 203358507

const React = require('react');
const { useServices } = require('stremio/services');
const forcedAddonsToLocalStorage = require('./forceAddons');
const _ = require('lodash');
const CoreSuspenderContext = React.createContext(null);

CoreSuspenderContext.displayName = 'CoreSuspenderContext';

function wrapPromise(promise) {
    let status = 'pending';
    let result;
    const suspender = promise.then(
        (resp) => {
            status = 'success';
            result = resp;
        },
        (error) => {
            status = 'error';
            result = error;
        }
    );
    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }
        }
    };
}

const useCoreSuspender = () => {
    return React.useContext(CoreSuspenderContext);
};

const withCoreSuspender = (Component, Fallback = () => { }) => {
    return function withCoreSuspender(props) {
        const { core } = useServices();
        const parentSuspender = useCoreSuspender();
        const [render, setRender] = React.useState(parentSuspender === null);
        const statesRef = React.useRef({});
        const streamsRef = React.useRef({});
        const getState = React.useCallback((model) => {
            if (!statesRef.current[model]) {
                statesRef.current[model] = wrapPromise(core.transport.getState(model));
            }
            if (model === 'discover') {
                const data = statesRef.current[model].read();
                const selectable = data.selectable;
                const catalogs = data.selectable.catalogs.filter((catalog) => !catalog.deepLinks.discover.includes('cinemeta.strem.io'));
                const updatedSelectable = {...selectable, catalogs: [...catalogs]};
                const updatedData = {...data, selectable: updatedSelectable};
                return updatedData;
            }
            return statesRef.current[model].read();
        }, []);
        const decodeStream = React.useCallback((stream) => {
            if (!streamsRef.current[stream]) {
                streamsRef.current[stream] = wrapPromise(core.transport.decodeStream(stream));
            }

            return streamsRef.current[stream].read();
        }, []);
        const suspender = React.useMemo(() => ({ getState, decodeStream }), []);
        React.useLayoutEffect(() => {
            if (!render) {
                setRender(true);
            }
        }, []);
        React.useEffect(() => {
            const currentProfile = (JSON.parse(localStorage.getItem('profile')));
            const forceAddons = forcedAddonsToLocalStorage.addons;
            if(!currentProfile) {
                localStorage.setItem('profile', JSON.stringify(forcedAddonsToLocalStorage));
            }
            else if (!_.isEqual(currentProfile.addons, forceAddons)) {
                console.error('Loading custom addons...');
                const newObj = {...currentProfile, addons: [...forceAddons]};
                localStorage.setItem('profile', JSON.stringify(newObj));
            }
        }, []);
        return render ?
            <React.Suspense fallback={<Fallback {...props} />}>
                <CoreSuspenderContext.Provider value={suspender}>
                    <Component {...props} />
                </CoreSuspenderContext.Provider>
            </React.Suspense>
            :
            null;
    };
};

module.exports = { withCoreSuspender, useCoreSuspender };

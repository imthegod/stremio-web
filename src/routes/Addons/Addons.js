// Copyright (C) 2017-2023 Smart code 203358507

const React = require('react');
const PropTypes = require('prop-types');
const { MainNavBars, withCoreSuspender } = require('stremio/common');

const Addons = () => {
    return (
        <MainNavBars className="h-full w-full" route={'addons'}>
            <div className="flex flex-col w-full h-full self-strech justify-center items-center">
                <div className='text-white text-center'>
                    <div className='text-3xl'>This fork of Stremio Web doesn&apos;t support customizing addons to make it work better (because it&apos;s using custom addons).</div>
                    <div className='text-3xl'>If you want a complete and customizable experience of Stremio, please check out the official website:
                        <a className='font-bold text-blue-400 text-3xl' href='https://web.stremio.com'> web.stremio.com</a>
                    </div>
                </div>
            </div>
        </MainNavBars>
    );
};

Addons.propTypes = {
    urlParams: PropTypes.shape({
        path: PropTypes.string,
        transportUrl: PropTypes.string,
        catalogId: PropTypes.string,
        type: PropTypes.string
    }),
    queryParams: PropTypes.instanceOf(URLSearchParams)
};

const AddonsFallback = () => (
    <MainNavBars className="h-full w-full" route={'addons'} />
);

module.exports = withCoreSuspender(Addons, AddonsFallback);

// Copyright (C) 2017-2023 Smart code 203358507

const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const { default: Icon } = require('@stremio/stremio-icons/react');
const Button = require('stremio/common/Button');
const Image = require('stremio/common/Image');
const useFullscreen = require('stremio/common/useFullscreen');
const usePWA = require('stremio/common/usePWA');
const SearchBar = require('./SearchBar');
const NavMenu = require('./NavMenu');
const styles = require('./styles');
const { t } = require('i18next');
const SiteInformationDialog = require('./SiteInformationDialog/SiteInformationDialog');
const { LOCAL_STORAGE_KEYS } = require('../../../common/CONSTANTS');

const HorizontalNavBar = React.memo(({ className, route, query, title, backButton, searchBar, fullscreenButton, navMenu, ...props }) => {
    const backButtonOnClick = React.useCallback(() => {
        window.history.back();
    }, []);
    const [fullscreen, requestFullscreen, exitFullscreen] = useFullscreen();
    const [isIOSPWA] = usePWA();
    const renderNavMenuLabel = React.useCallback(({ ref, className, onClick, children, }) => (
        <Button ref={ref} className={classnames(className, styles['button-container'], styles['menu-button-container'])} tabIndex={-1} onClick={onClick}>
            <Icon className={styles['icon']} name={'person-outline'} />
            {children}
        </Button>
    ), []);
    const [routeState, setRouteState] = React.useState(route);
    React.useEffect(() => {
        setRouteState(route);
    }, [route]);
    const [forkInfo, setForkInfo] = React.useState(false);
    React.useEffect(() => {
        const showForkInfo = localStorage.getItem(LOCAL_STORAGE_KEYS.showForkInfo);
        if (showForkInfo !== 'false') {
            setForkInfo(true);
        }
    }, []);

    return (
        <nav {...props} className={classnames(className, styles['horizontal-nav-bar-container'])}>
            {
                backButton ?
                    <Button className={classnames(styles['button-container'], styles['back-button-container'])} tabIndex={-1} onClick={backButtonOnClick}>
                        <Icon className={styles['icon']} name={'chevron-back'} />
                    </Button>
                    :
                    <div className={styles['logo-container']}>
                        <Image
                            className={styles['logo']}
                            src={require('/images/stremio_symbol.png')}
                            alt={' '}
                        />
                    </div>
            }

            {
                routeState === 'board' ?
                    <div className='lg:block hidden font-medium text-white text-opacity-60 text-3xl left-32 absolute'>Scheduled anime</div>
                    :
                    null
            }

            {
                typeof title === 'string' && title.length > 0 ?
                    <h2 className={styles['title']}>{title}</h2>
                    :
                    null
            }
            {
                searchBar && route !== 'addons' ?
                    <SearchBar className={styles['search-bar']} query={query} active={route === 'search'} />
                    :
                    null
            }
            <div className={styles['buttons-container']}>
                {
                    forkInfo ?
                        <SiteInformationDialog setForkInfo={setForkInfo}/>
                        :
                        null
                }
                {
                    !isIOSPWA && fullscreenButton ?
                        <Button className={styles['button-container']} title={fullscreen ? t('EXIT_FULLSCREEN') : t('ENTER_FULLSCREEN')} tabIndex={-1} onClick={fullscreen ? exitFullscreen : requestFullscreen}>
                            <Icon className={styles['icon']} name={fullscreen ? 'minimize' : 'maximize'} />
                        </Button>
                        :
                        null
                }
                {
                    navMenu ?
                        <NavMenu renderLabel={renderNavMenuLabel} />
                        :
                        null
                }
            </div>
        </nav>
    );
});

HorizontalNavBar.displayName = 'HorizontalNavBar';

HorizontalNavBar.propTypes = {
    className: PropTypes.string,
    route: PropTypes.string,
    query: PropTypes.string,
    title: PropTypes.string,
    backButton: PropTypes.bool,
    searchBar: PropTypes.bool,
    addonsButton: PropTypes.bool,
    fullscreenButton: PropTypes.bool,
    navMenu: PropTypes.bool
};

module.exports = HorizontalNavBar;

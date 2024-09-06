// Copyright (C) 2017-2023 Smart code 203358507

const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const { VerticalNavBar, HorizontalNavBar } = require('stremio/common/NavBar');
const styles = require('./styles');

const TABS = [
    { id: 'board', label: 'Board', icon: 'home', href: '#/' },
    { id: 'discover', label: 'Discover', icon: 'discover', href: '#/discover/https%3A%2F%2Fanime-kitsu.strem.fun%2Fmanifest.json/anime/kitsu-anime-trending?' },
    { id: 'library', label: 'Library', icon: 'library', href: '#/library' },
];

const MainNavBars = React.memo(({ className, route, query, children }) => {
    return (
        <div className={classnames(className, styles['main-nav-bars-container'])}>
            <HorizontalNavBar
                className={styles['horizontal-nav-bar']}
                route={route}
                query={query}
                backButton={false}
                searchBar={true}
                fullscreenButton={true}
                navMenu={true}
            />
            <VerticalNavBar
                className={styles['vertical-nav-bar']}
                selected={route}
                tabs={TABS}
            />
            <div className={styles['nav-content-container']}>{children}</div>
        </div>
    );
});

MainNavBars.displayName = 'MainNavBars';

MainNavBars.propTypes = {
    className: PropTypes.string,
    route: PropTypes.string,
    query: PropTypes.string,
    children: PropTypes.node
};

module.exports = MainNavBars;

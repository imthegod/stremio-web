const React = require('react');
const ReactIs = require('react-is');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const { default: Icon } = require('@stremio/stremio-icons/react');
const Button = require('stremio/common/Button');
const CONSTANTS = require('stremio/common/CONSTANTS');
const useTranslate = require('stremio/common/useTranslate');
const MetaRowPlaceholder = require('./MetaRowPlaceholder');
const styles = require('./styles');

const MetaRow = React.forwardRef(({ className, mainPage = false, title, catalog, message, itemComponent, notifications }, ref) => {
    const t = useTranslate();
    if (catalog.type === 'movie' || catalog.type === 'channel') {
        return null;
    }
    title = catalog.title;

    const catalogTitle = React.useMemo(() => {
        return title ?? t.catalogTitle(catalog);
    }, [title, catalog, t.catalogTitle]);

    const items = React.useMemo(() => {
        return catalog?.items ?? catalog?.content?.content;
    }, [catalog]);

    const href = React.useMemo(() => {
        return catalog?.deepLinks?.discover ?? catalog?.deepLinks?.library;
    }, [catalog]);

    const highlighted = React.useMemo(() => {
        const now = new Date();
        const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
        return currentDay === catalog.title;
    }, [catalog]);

    return (
        <div ref={ref}
            className={classnames(className, styles['meta-row-container'])}>
            <div className={styles['header-container']}>
                {
                    typeof catalogTitle === 'string' && catalogTitle.length > 0 && !catalogTitle.includes('Part') ?
                        <div style={{ color: highlighted ? '#7b5bf5' : '' }} className={styles['title-container']} title={catalogTitle}>{catalogTitle}</div>
                        :
                        null
                }
                {
                    href ?
                        <Button className={styles['see-all-container']} title={t.string('BUTTON_SEE_ALL')} href={href} tabIndex={-1}>
                            <div className={styles['label']}>{ t.string('BUTTON_SEE_ALL') }</div>
                            <Icon className={styles['icon']} name={'chevron-forward'} />
                        </Button>
                        :
                        null
                }
            </div>
            {
                typeof message === 'string' && message.length > 0 ?
                    <div className={styles['message-container']} title={message}>{message}</div>
                    :
                    <div className={styles['meta-items-container']}>
                        {
                            ReactIs.isValidElementType(itemComponent) ?
                                items.slice(0, CONSTANTS.CATALOG_PREVIEW_SIZE).map((item, index) => {
                                    return React.createElement(itemComponent, {
                                        ...item,
                                        key: index,
                                        className: classnames(styles['meta-item'], styles['poster-shape-poster'], styles[`poster-shape-${item.posterShape}`]),
                                        notifications,
                                        mainPage,
                                    });
                                })
                                :
                                null
                        }
                        {items.length < CONSTANTS.CATALOG_PREVIEW_SIZE - 5 && Array(Math.max(0, CONSTANTS.CATALOG_PREVIEW_SIZE - items.length)).fill(null).map((_, index) => (
                            <div key={index} className={classnames(styles['meta-item'], styles['poster-shape-poster'])} />
                        ))}
                    </div>
            }
        </div>
    );
});

MetaRow.Placeholder = MetaRowPlaceholder;

MetaRow.propTypes = {
    mainPage: PropTypes.bool,
    className: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
    catalog: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
        addon: PropTypes.shape({
            manifest: PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string,
            }),
        }),
        content: PropTypes.shape({
            content: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.shape({
                    posterShape: PropTypes.string,
                })),
            ]),
        }),
        items: PropTypes.arrayOf(PropTypes.shape({
            posterShape: PropTypes.string,
        })),
        deepLinks: PropTypes.shape({
            discover: PropTypes.string,
            library: PropTypes.string,
        }),
    }),
    itemComponent: PropTypes.elementType,
    notifications: PropTypes.object,
    //boardCatalogs: PropTypes.array
};

module.exports = MetaRow;

const React = require('react');
const PropTypes = require('prop-types');
const styles = require('../styles');
const ModalDialog = require('../../../ModalDialog');
const { default: classNames } = require('classnames');
const Button = require('../../../Button');
const DialogIcon = require('./DialogIcon');
const { LOCAL_STORAGE_KEYS } = require('../../../../common/CONSTANTS');

const SiteInformationDialog = ( { setForkInfo } ) => {
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const toggleDialog = React.useCallback(() => {
        setDialogOpen((prev) => !prev);
    }, [dialogOpen]);

    const handleDontShowForkInfo = React.useCallback(() => {
        setDialogOpen(false);
        setForkInfo(false);
        localStorage.setItem(LOCAL_STORAGE_KEYS.showForkInfo, 'false');
    }, []);

    return (
        <>
            {
                <Button className={classNames(styles['button-container'], 'cursor-pointer')} onClick={toggleDialog}>
                    <DialogIcon/>
                </Button>
            }
            {
                dialogOpen &&
                    <ModalDialog onCloseRequest={toggleDialog}
                        className={{
                            root:'',
                            container: 'text-white !max-w-3xl'
                        }}
                        title="About this site"
                        buttons={[
                            {
                                className: 'bg-[#7b5bf5] text-white',
                                label: 'Close',
                                props: { onClick: toggleDialog }
                            },
                            {
                                className: 'bg-red-500 text-white',
                                label: 'Don\'t show this anymore',
                                props: { onClick: handleDontShowForkInfo }
                            },
                        ]}>
                        <h2 className="font-bold text-2xl text-[#7b5bf5] mb-2.5">What Is This Site?</h2>
                        <p className="text-sm mb-5">
                                This site is a fork of Stremio Web (
                            <a
                                href="https://web.stremio.com/"
                                title="Stremio Web"
                                className="text-[#7b5bf5] hover:underline"
                            >
                                    https://web.stremio.com/
                            </a>
                                ) created purely for Anime.
                            <br />
                                It was customized to remove and add features of Stremio Web, while preserving the core functionality. Think of it as Stremio Web but only for anime.
                            <br /><br />
                                I created this site because it was quite difficult to look up &quot;Latest Released&quot; anime on the original Stremio website. This site makes it easy to see which anime releases today and to watch them instantly.
                            <br /><br />
                                Enjoy watching your Anime in the highest quality possible without worrying about your favorite Anime site closing down.
                        </p>
                        <h2 className="font-bold text-2xl text-[#7b5bf5] mb-2.5">Features</h2>
                        <p className="text-sm mb-5">
                                - Shows this season&apos;s Anime schedule on the main page.
                            <br />
                                - Automatically scrolls to the current day in the schedule, highlighting shows that are close to airing or have not aired.
                            <br />
                                - You can click on the Anime picture and watch it instantly.
                            <br />
                        </p>
                        <h2 className="font-bold text-2xl text-[#7b5bf5] mb-2.5">Important</h2>
                        <p className="text-sm mb-5">
                                Neither we nor Stremio store any media files on our servers. To watch on this site, you will need to install the Stremio service.
                            <br />
                            <a href="https://www.stremio.com/download-service" className="text-[#7b5bf5] hover:underline">Link here</a>
                            <br />
                            <a href="https://guides.viren070.me/stremio/guide" className="text-[#7b5bf5] hover:underline">Comprehensive Stremio guide here</a>
                            <br />
                                Everything is open source, and the setup takes just a few seconds.
                        </p>
                    </ModalDialog>
            }
        </>
    );
};

SiteInformationDialog.propTypes = {
    setForkInfo: PropTypes.func.isRequired,
};

SiteInformationDialog.displayName = 'SiteInformationDialog';

module.exports = SiteInformationDialog;

const React = require('react');
const PropTypes = require('prop-types');
const styles = require('./styles');

const SiteInformationDialog = ( ) => {
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const toggleOnClick = () => {
        setDialogOpen(!dialogOpen);
    };

    return (<>
        {
            <div className={styles['button-container']}
                style={{
                    cursor: 'pointer'
                }}
                onClick={toggleOnClick}
            >
                <svg style={{
                    color: 'var(--primary-foreground-color)',
                    flex: 'none',
                    height: '2rem',
                    opacity: '0.6',
                    width: '2rem'
                }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg>
            </div>
        }

        {dialogOpen && (
            <>
                <div className='fixed inset-0 bg-black bg-opacity-70 z-50' onClick={toggleOnClick}></div>
                <div className='fixed inset-1/2 h-max transform -translate-x-1/2 -translate-y-1/2 p-5 bg-black bg-opacity-90 border border-white border-opacity-5 shadow-2xl text-white rounded-lg z-50 w-[500px] text-center'>
                    <h2 className='font-bold text-2xl text-[#7b5bf5] mb-2.5'>
                    What Is This Site?
                    </h2>
                    <p className='text-sm mb-5'>
                    This site is a fork of Stremio Web (<a href='https://web.stremio.com/' title='Stremio Web' className='text-[#7b5bf5] hover:underline'>https://web.stremio.com/</a>) created purely for Anime.
                        <br />
                    So keep in mind that it was customized to remove and add some features of Stremio Web, while preserving the core functionality. Think of it as just Stremio Web but only for anime.
                        <br /><br />
                    I created this site because it was quite difficult to look up &quot;Latest Released&quot; anime on the original Stremio website and there wasn&apos;t just one simple way where I could see what anime releases today, and to watch them instantly.
                        <br /><br />
                    With this, you can enjoy watching your Anime in the highest quality possible with no limits to bitrate or worry about your favorite Anime site closing down.
                    </p>
                    <h2 className='font-bold text-2xl text-[#7b5bf5] mb-2.5'>
                    Features
                    </h2>
                    <p className='text-sm mb-5'>
                    - Shows this season&apos;s Anime schedule on the main page.
                        <br />
                    - Site automatically scrolls to the current day in the schedule, and shows which shows are close to airing or have not aired.
                        <br />
                    - You can just click on the Anime picture and watch it.
                        <br />
                    </p>
                    <h2 className='font-bold text-2xl text-[#7b5bf5] mb-2.5'>
                    Important
                    </h2>
                    <p className='text-sm mb-5'>
                    Nor we, nor Stremio store any media files on our servers. Therefore, to watch on this site, you will have to install the Stremio service.
                        <br /> <a href="https://www.stremio.com/download-service" className='text-[#7b5bf5] hover:underline'>Link here</a>
                        <br /> <a href="https://guides.viren070.me/stremio/guide" className='text-[#7b5bf5] hover:underline'>Comprehensive Stremio guide here</a>
                        <br /> Remember, everything is open source and the setup takes a couple of seconds, so there&apos;s nothing to worry about.
                    </p>
                    <button onClick={toggleOnClick} className='bg-[#7b5bf5] text-white py-2 px-5 rounded cursor-pointer border-none'>
                    Close
                    </button>
                </div>
            </>
        )}

    </>);
};

SiteInformationDialog.propTypes = {
    handleButtonClick: PropTypes.func,
};
module.exports = SiteInformationDialog;

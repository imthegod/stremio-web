// Copyright (C) 2017-2023 Smart code 203358507

const React = require('react');
const classnames = require('classnames');
const debounce = require('lodash.debounce');
const { MainNavBars, MetaRow, MetaItem, StreamingServerWarning, useStreamingServer, withCoreSuspender, getVisibleChildrenRange, EventModal } = require('stremio/common');
const useBoard = require('./useBoard');
const useContinueWatchingPreview = require('./useContinueWatchingPreview');
const styles = require('./styles');
const useFetchTodaysSchedule = require('./useFetchTodaysSchedule');
const THRESHOLD = 5;

const Board = () => {
    const streamingServer = useStreamingServer();
    const continueWatchingPreview = useContinueWatchingPreview();
    const [board, loadBoardRows] = useBoard();
    const boardCatalogsOffset = continueWatchingPreview.items.length > 0 ? 1 : 0;
    const scrollContainerRef = React.useRef();
    const todayRowRef = React.useRef(null);

    const onVisibleRangeChange = React.useCallback(() => {
        const range = getVisibleChildrenRange(scrollContainerRef.current);
        if (range === null) {
            return;
        }

        const start = Math.max(0, range.start - boardCatalogsOffset - THRESHOLD);
        const end = range.end - boardCatalogsOffset + THRESHOLD;
        if (end < start) {
            return;
        }

        loadBoardRows({ start, end });
    }, [boardCatalogsOffset]);

    const onScroll = React.useCallback(debounce(onVisibleRangeChange, 250), [onVisibleRangeChange]);

    React.useLayoutEffect(() => {
        onVisibleRangeChange();
    }, [board.catalogs, onVisibleRangeChange]);

    const { schedule, loading, error } = useFetchTodaysSchedule();
    const [catalogs, setCatalogs] = React.useState([]);

    React.useEffect(() => {
        if (schedule) {
            const now = new Date();
            const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
            const nowMinutes = now.getHours() * 60 + now.getMinutes();

            const weeklyScheduleByDay = {};
            const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            const currentDayIndex = daysOfWeek.indexOf(currentDay);
            const sortedDays = [...daysOfWeek.slice(currentDayIndex + 1), ...daysOfWeek.slice(0, currentDayIndex + 1)];

            for (const [day, items] of Object.entries(schedule)) {
                if (!weeklyScheduleByDay[day]) {
                    weeklyScheduleByDay[day] = [];
                }
                items.forEach((item) => {
                    const [hours, minutes] = item.time.split(':').map(Number);
                    const scheduleTimeInMinutes = hours * 60 + minutes;

                    const timeDifference = scheduleTimeInMinutes - nowMinutes;
                    const isToday = day === currentDay;
                    const isInFuture = timeDifference > 0;

                    weeklyScheduleByDay[day].push({
                        id: item.id,
                        type: item.type,
                        name: item.name,
                        poster: item.poster,
                        background: item.poster,
                        logo: item.poster,
                        description: 'No description.',
                        releaseInfo: '2024',
                        runtime: item.time,
                        released: item.time,
                        day: day,
                        posterShape: 'poster',
                        today: isToday,
                        highlighted: isToday && isInFuture && timeDifference === Math.min(
                            ...items
                                .filter((i) => {
                                    const [h, m] = i.time.split(':').map(Number);
                                    return (h * 60 + m) > nowMinutes; // Filter out past items
                                })
                                .map((i) => {
                                    const [h, m] = i.time.split(':').map(Number);
                                    return (h * 60 + m) - nowMinutes;
                                })
                        )
                    });
                });
            }

            const todayCatalog = {
                id: 'todaysanime',
                title: currentDay,
                type: 'anime',
                content: {
                    type: 'Ready',
                    content: weeklyScheduleByDay[currentDay] || []
                }
            };

            const weeklyCatalogChunks = sortedDays.flatMap((day) => {
                const items = weeklyScheduleByDay[day] || [];
                const chunks = [];
                for (let i = 0; i < items.length; i += 9) {
                    const chunkItems = items.slice(i, i + 9);
                    chunks.push({
                        id: `weeklyanime-${day}-${Math.floor(i / 9)}`,
                        title: chunks.length === 0 ? `${day}` : `${day} (Part ${Math.floor(i / 9) + 1})`,
                        type: 'anime',
                        content: {
                            type: 'Ready',
                            content: chunkItems
                        }
                    });
                }
                return chunks;
            });

            setCatalogs([
                ...weeklyCatalogChunks.filter((chunk) => daysOfWeek.indexOf(chunk.title.split(' ')[0]) < currentDayIndex),
                todayCatalog,
                ...weeklyCatalogChunks.filter((chunk) => daysOfWeek.indexOf(chunk.title.split(' ')[0]) > currentDayIndex)
            ]);
        }
    }, [schedule, loading, error]);

    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const STICKY_DIV_HEIGHT = 0;

    React.useEffect(() => {
        if (todayRowRef.current && scrollContainerRef.current) {
            setTimeout(() => {
                scrollContainerRef.current.scrollTo({
                    top: todayRowRef.current.offsetTop - scrollContainerRef.current.offsetTop - STICKY_DIV_HEIGHT,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }, [catalogs]);

    const [currentScrolledDay, setCurrentScrolledDay] = React.useState('Friday');
    const dayRefs = React.useRef({});

    const days = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];

    const handleDayClick = (day) => {
        setCurrentScrolledDay(day);
        const ref = dayRefs.current[day];
        if (ref && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: ref.offsetTop - scrollContainerRef.current.offsetTop - STICKY_DIV_HEIGHT,
                behavior: 'smooth',
            });
        }
    };

    const combinedRef = (el, catalog) => {
        if (el) {
            dayRefs.current[catalog.title] = el;
            if (catalog.title === currentDay) {
                todayRowRef.current = el;
            }
        }
    };

    const handleScroll = () => {
        const scrollContainer = scrollContainerRef.current;
        const scrollTop = scrollContainer.scrollTop;
        const containerHeight = scrollContainer.clientHeight;
        const scrollHeight = scrollContainer.scrollHeight;
        let currentDay = currentScrolledDay;

        for (let i = 0; i < days.length; i++) {
            const day = days[i];
            const ref = dayRefs.current[day];
            if (ref) {
                const nextDay = days[i + 1];
                const nextRef = dayRefs.current[nextDay];
                if (scrollTop + containerHeight >= scrollHeight) {
                    currentDay = days[days.length - 1];
                    break;
                }
                if (nextRef) {
                    if (ref.offsetTop <= scrollTop + STICKY_DIV_HEIGHT && nextRef.offsetTop > scrollTop + STICKY_DIV_HEIGHT) {
                        currentDay = day;
                        break;
                    }
                } else {
                    if (ref.offsetTop <= scrollTop + STICKY_DIV_HEIGHT) {
                        currentDay = day;
                    }
                }
            }
        }
        if (currentDay !== currentScrolledDay) {
            setCurrentScrolledDay(currentDay);
        }
    };

    React.useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        scrollContainer.addEventListener('scroll', handleScroll);
        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, [currentScrolledDay]);

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         const startOfToday = new Date();
    //         startOfToday.setHours(0, 0, 0, 0);
    //         const startOfTodayEpochMilliseconds = startOfToday.getTime();
    //         const allAnimeURL = 'https://animes-season-addon-git-main-imthegods-projects.vercel.app/catalog/series/latest_anime_seasons.json'
    //         const response = await fetch('https://animes-season-addon-git-main-imthegods-projects.vercel.app/catalog/series/latest_anime_seasons.json');
    //         const text = await response.json();
    //         console.log(text);
    //     };
    //     fetchData();
    // }, []);

    return (
        <div className={styles['board-container']}>
            <EventModal />
            <MainNavBars className={styles['board-content-container']} route={'board'}>
                <div id='whatscrolling' style={{position: 'relative', height: '90%'}} ref={scrollContainerRef} className={styles['board-content']} onScroll={onScroll}>
                    {catalogs.map((catalog) => (
                        <MetaRow
                            key={catalog.id}
                            ref={(el) => combinedRef(el, catalog)}
                            className={classnames(styles['board-row'], styles[`board-row-${catalog.content.content[0].posterShape}`], 'animation-fade-in')}
                            catalog={catalog}
                            itemComponent={MetaItem}
                            mainPage={true}
                        />
                    ))}
                </div>
                <div className='hidden md:flex relative h-[10%] text-white px-4 justify-center items-center z-50'>
                    {days.map((day, index) =>
                        <div
                            key={`${index}-${day}`}
                            className={`cursor-pointer font-medium mx-4 duration-500 px-4 py-2 ${currentScrolledDay === day ? 'text-[#7b5bf5] text-xl' : 'hover:text-opacity-100 text-white text-opacity-60 text-base'}`}
                            onClick={() => handleDayClick(day)}
                        >
                            {day}
                        </div>
                    )}
                </div>
            </MainNavBars>
            {
                streamingServer.settings !== null && streamingServer.settings.type === 'Err' ?
                    <StreamingServerWarning className={styles['board-warning-container']} />
                    :
                    null
            }
        </div>
    );
};

const BoardFallback = () => (
    <div className={styles['board-container']}>
        <MainNavBars className={styles['board-content-container']} route={'board'} />
    </div>
);

module.exports = withCoreSuspender(Board, BoardFallback);

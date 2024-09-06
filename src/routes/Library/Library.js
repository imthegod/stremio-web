// Copyright (C) 2017-2023 Smart code 203358507

const React = require('react');
const classnames = require('classnames');
const { default: Icon } = require('@stremio/stremio-icons/react');
const { DelayedRenderer, Button, MainNavBars, MetaItem, Image, MetaPreview, CONSTANTS, useOnScrollToBottom, withCoreSuspender } = require('stremio/common');
const styles = require('./styles');
const ArrowIcon = require('./Icons');
const FilterDropdown = require('./FilterDropdown');
const { Multiselect } = require('stremio/common');
const SortDropdown = require('./SortDropdown');

const SCROLL_TO_BOTTOM_TRESHOLD = 400;

const Library = () => {
    const [selectedMetaItemIndex, setSelectedMetaItemIndex] = React.useState(0);
    const metasContainerRef = React.useRef();
    const [animeLibrary, setAnimeLibrary] = React.useState([]);
    const [completeLibrary, setCompleteLibrary] = React.useState([]);
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    // eslint-disable-next-line no-unused-vars
    const [currentPage, setCurrentPage] = React.useState(1);
    const [hasNextPage, setHasNextPage] = React.useState(true);
    const ITEMS_PER_PAGE = 50;

    const [tags, setTags] = React.useState([]);
    const [genres, setGenres] = React.useState([]);
    const [showFilters, setShowFilters] = React.useState(false);
    const [selectedTags, setSelectedTags] = React.useState(new Set());
    const [selectedGenres, setSelectedGenres] = React.useState(new Set());
    const [excludedTags, setExcludedTags] = React.useState(new Set());
    const [excludedGenres, setExcludedGenres] = React.useState(new Set());
    const [selectedTitleValue, setSelectedTitleValue] = React.useState('');
    const [sortedBy, setSortedBy] = React.useState('');

    const activeFilters = React.useMemo(() => {
        return [
            ...Array.from(selectedTags),
            ...Array.from(selectedGenres),
            ...Array.from(excludedGenres),
            ...Array.from(excludedTags),
            selectedTitleValue
        ];
    }, [selectedTags, selectedGenres, selectedTitleValue]);

    const filterOptions = React.useMemo(() => ({
        tags: {
            title: 'Filter tags',
            options: tags,
            selected: Array.from(selectedTags),
            excluded: Array.from(excludedTags),
        },
        genres: {
            title: 'Filter genres',
            options: genres,
            selected: Array.from(selectedGenres),
            excluded: Array.from(excludedGenres),
        }
    }), [tags, genres, selectedTags, selectedGenres, excludedTags, excludedGenres]);

    const loadNextPage = async () => {
        setCurrentPage((prevPage) => {
            const nextPage = prevPage + 1;
            reFetchLibrary({
                genres: filterOptions.genres.selected,
                tags: filterOptions.tags.selected,
                excludedGenres: filterOptions.genres.excluded,
                excludedTags: filterOptions.tags.excluded,
                title: selectedTitleValue,
                sortBy: selectedSort[0],
                page: nextPage,
                isScroll: true
            });
            return nextPage;
        });
    };
    const reFetchLibrary = async ({ genres = [], tags = [], excludedGenres = [], excludedTags = [], title = '', page = 1, sortBy = selectedSort[0] || 'latest' } = {}) => {
        try {
            setLoading(true);

            console.log(genres, tags, sortBy)
    
            if (!completeLibrary.length) {
                const response = await fetch('https://animes-season-addon.vercel.app/catalog/series/latest_anime_seasons.json');
                const data = await response.json();
                setCompleteLibrary(data.metas);
            }
    
            // Apply filtering first
            let filteredMetas = completeLibrary.filter((meta) => {
                const [genresLine, tagsLine] = meta.description.split('\n');
                const metaGenres = genresLine?.replace('Genres: ', '').split(', ').map((genre) => genre.trim());
                const metaTags = tagsLine?.replace('Tags:', '').split('/').map((tag) => tag.trim());
    
                const genreMatch = genres.length ? genres.some((genre) => metaGenres.includes(genre)) : true;
                const tagMatch = tags.length ? tags.some((tag) => metaTags.includes(tag)) : true;
                const genreExclusion = excludedGenres.length ? !excludedGenres.some((excludedGenre) => metaGenres.includes(excludedGenre)) : true;
                const tagExclusion = excludedTags.length ? !excludedTags.some((excludedTag) => metaTags.includes(excludedTag)) : true;
                const titleMatch = title ? meta.name.toLowerCase().includes(title.toLowerCase()) : true;
    
                return genreMatch && tagMatch && genreExclusion && tagExclusion && titleMatch;
            });
    
            // Then apply sorting to the filtered results
            if (sortBy === 'latest') {
                filteredMetas = filteredMetas; // Already sorted by latest
            } else if (sortBy === 'oldest') {
                filteredMetas.reverse(); // Reverse the array for oldest
            } else if (sortBy === 'az') {
                filteredMetas.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sortBy === 'za') {
                filteredMetas.sort((a, b) => b.name.localeCompare(a.name));
            } else if (sortBy === 'seriesfirst') {
                filteredMetas.sort((a, b) => (a.type === 'series' ? -1 : 1));
            } else if (sortBy === 'moviesfirst') {
                filteredMetas.sort((a, b) => (a.type === 'movie' ? -1 : 1));
            }
    
            console.log("After filtering and sorting:", filteredMetas);
    
            // Paginate results
            const startIndex = (page - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            const limitedMetas = filteredMetas.slice(startIndex, endIndex);
    
            setHasNextPage(endIndex < filteredMetas.length);
            setAnimeLibrary((prevLibrary) => (page === 1 ? limitedMetas : [...prevLibrary, ...limitedMetas]));
        } catch (err) {
            setError(err);
            console.error('fetchDataErr!', err);
        } finally {
            setLoading(false);
        }
    };

    const filterLibrary = () => {
        setAnimeLibrary([]);
        reFetchLibrary({
            genres: filterOptions.genres.selected,
            tags: filterOptions.tags.selected,
            excludedGenres: filterOptions.genres.excluded,
            excludedTags: filterOptions.tags.excluded,
            title: selectedTitleValue,
            sortBy: selectedSort[0],
            page: 1,
            isScroll: false
        });
    };

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://animes-season-addon.vercel.app/catalog/series/latest_anime_seasons.json');
                const data = await response.json();
                const metas = data.metas;

                const allGenres = new Set();
                const allTags = new Set();

                metas.forEach((meta) => {
                    const [genresLine, tagsLine] = meta.description.split('\n');
                    const metaGenres = genresLine.replace('Genres: ', '').split(', ').map((genre) => genre.trim());
                    const metaTags = tagsLine.replace('Tags:', '').split('/').map((tag) => tag.trim());

                    metaGenres.forEach((genre) => allGenres.add(genre));
                    metaTags.forEach((tag) => allTags.add(tag));
                });

                setCompleteLibrary(metas);
                setAnimeLibrary(metas.slice(0, 50));
                setTags(Array.from(allTags));
                setGenres(Array.from(allGenres));
            } catch (err) {
                setError(err);
                console.error('fetchDataErr!', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    React.useEffect(() => {
        if (loading) {
            metasContainerRef.current.scrollTop = 0;
        }
    }, [animeLibrary, loading]);

    const selectedMetaItem = React.useMemo(() => {
        return animeLibrary !== null &&
            !loading &&
            animeLibrary[selectedMetaItemIndex] ?
            animeLibrary[selectedMetaItemIndex]
            :
            null;
    }, [animeLibrary, selectedMetaItemIndex]);

    const metaItemsOnFocusCapture = React.useCallback((event) => {
        if (event.target.dataset.index !== null && !isNaN(event.target.dataset.index)) {
            setSelectedMetaItemIndex(parseInt(event.target.dataset.index, 10));
        }
    }, []);
    const metaItemOnClick = React.useCallback((event) => {
        if (event.currentTarget.dataset.index !== selectedMetaItemIndex.toString()) {
            event.preventDefault();
            event.currentTarget.focus();
        }
    }, [selectedMetaItemIndex]);

    const onScrollToBottom = React.useCallback(() => {
        if (hasNextPage) {
            loadNextPage();
        }
    }, [hasNextPage, loadNextPage]);

    const onScroll = useOnScrollToBottom(onScrollToBottom, SCROLL_TO_BOTTOM_TRESHOLD);

    React.useEffect(() => {
        setSelectedMetaItemIndex(0);
    }, [animeLibrary]);

    const showFiltersToggle = () => {
        setShowFilters((prev) => !prev);
    };

    const resetFilters = () => {
        setSelectedTitleValue('');
        setSelectedTags(new Set());
        setSelectedGenres(new Set());
    };

    const [selectedSort, setSelectedSort] = React.useState(['latest']);
    const onSelect = (event) => {
        setSelectedSort([event.value]);
    };

    return (
        <MainNavBars className={styles['discover-container']} route={'library'}>
            <div className={styles['discover-content']}>
                <div className={styles['catalog-container']}>
                    <div className="flex flex-col self-stretch overflow-visible p-6">
                        <div className='flex items-center w-full space-x-3 py-3'>
                            <div className='flex items-center px-0 h-11 rounded-3xl bg-white w-full text-white bg-opacity-5'>
                                <Icon className="w-6 h-6 mx-6 text-white opacity-60" name={'search'} />
                                <input
                                    className="w-full flex items-center"
                                    placeholder='Search...'
                                    onChange={(e) => setSelectedTitleValue(e.target.value)}
                                    value={selectedTitleValue}
                                />
                            </div>
                            <Button
                                className="bg-white w-64 h-11 flex items-center justify-center rounded-3xl text-white bg-opacity-10"
                                onClick={showFiltersToggle}
                            >
                                <span className=''>
                                    <ArrowIcon/>
                                </span>
                                Show filters
                            </Button>
                        </div>

                        <div className='flex items-center justify-start space-x-2 w-full py-3 overflow-visible'>
                            {
                                showFilters ?
                                    <FilterDropdown
                                        setSelectedTags={setSelectedTags}
                                        setSelectedGenres={setSelectedGenres}
                                        setExcludedTags={setExcludedTags}
                                        setExcludedGenres={setExcludedGenres}
                                        selectedGenres={selectedGenres}
                                        selectedTags={selectedTags}
                                        excludedTags={excludedTags}
                                        excludedGenres={excludedGenres}
                                        tags={tags}
                                        genres={genres}
                                    />
                                    :
                                    null
                            }
                            {
                                showFilters ?
                                    <>
                                        <SortDropdown
                                            selected={selectedSort}
                                            onSelect={onSelect}
                                        />
                                    </>
                                    :
                                    null
                            }

                        </div>
                        <div className='flex items-center justify-end space-x-2 w-full py-3'>
                            <Button
                                className={`bg-red-600 w-40 h-11 flex items-center justify-center rounded-3xl text-white ${!activeFilters.length > 0 ? 'opacity-10' : ''}`}
                                disabled={false}
                                onClick={resetFilters}
                            >
                                Reset filters
                            </Button>
                            <Button
                                className="bg-[#7b5bf5] w-40 h-11 flex items-center justify-center rounded-3xl text-white"
                                onClick={filterLibrary}
                            >
                                <Icon className="w-6 h-6 mr-3 text-white opacity-60" name={'search'} />
                                Search
                            </Button>
                        </div>
                    </div>
                    {
                        !animeLibrary ?
                            <DelayedRenderer delay={500}>
                                <div className={styles['message-container']}>
                                    <Image className={styles['image']} src={require('/images/empty.png')} alt={' '} />
                                    <div className={styles['message-label']}>No data fetched!</div>
                                </div>
                            </DelayedRenderer>
                            :
                            error ?
                                <div className={styles['message-container']}>
                                    <Image className={styles['image']} src={require('/images/empty.png')} alt={' '} />
                                    <div className={styles['message-label']}>{error}</div>
                                </div>
                                :
                                loading ?
                                    <div ref={metasContainerRef} className={classnames(styles['meta-items-container'], 'animation-fade-in')}>
                                        {Array(CONSTANTS.CATALOG_PAGE_SIZE).fill(null).map((_, index) => (
                                            <div key={index} className={styles['meta-item-placeholder']}>
                                                <div className={styles['poster-container']} />
                                                <div className={styles['title-bar-container']}>
                                                    <div className={styles['title-label']} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    :
                                    <div
                                        ref={metasContainerRef}
                                        className={classnames(styles['meta-items-container'], 'animation-fade-in')}
                                        onScroll={onScroll}
                                        onFocusCapture={metaItemsOnFocusCapture}
                                    >
                                        {animeLibrary.map((metaItem, index) => {
                                            const [genresLine, tagsLine, ...descriptionLines] = metaItem.description.split('\n');
                                            const genres = genresLine.replace('Genres: ', '').split(', ');
                                            const tags = tagsLine.replace('Tags:', '').split('/');
                                            const description = descriptionLines.join(' ');

                                            return (
                                                <MetaItem
                                                    key={index}
                                                    className={classnames({ 'selected': selectedMetaItemIndex === index })}
                                                    type={metaItem.type}
                                                    name={metaItem.name}
                                                    poster={metaItem.poster}
                                                    posterShape="poster"
                                                    playname={selectedMetaItemIndex === index}
                                                    data-index={index}
                                                    onClick={metaItemOnClick}
                                                    genres={genres}
                                                    tags={tags}
                                                    description={description}
                                                />
                                            );
                                        })}
                                    </div>
                    }
                </div>
                {
                    selectedMetaItem !== null ?
                        <MetaPreview
                            className={styles['meta-preview-container']}
                            compact={true}
                            name={selectedMetaItem.name}
                            logo={selectedMetaItem.poster}
                            background={selectedMetaItem.poster}
                            runtime='24m'
                            releaseInfo='2024'
                            released={new Date('2024')}
                            description={selectedMetaItem.description.split('\n').slice(2).join(' ').replace(/<\/?[^>]+(>|$)/g, '')}
                            genres={selectedMetaItem.description.split('\n')[0].replace('Genres: ', '').split(', ')}
                            tags={selectedMetaItem.description.split('\n')[1].replace('Tags:', '').split('/')}
                            deepLinks={{
                                metaDetailsVideos: `#/detail/${selectedMetaItem.type}/${selectedMetaItem.id}`,
                                metaDetailsStreams: null,
                                player: null
                            }}

                        />
                        :
                        animeLibrary !== null && loading ?
                            <div className={styles['meta-preview-container']} />
                            :
                            null
                }
            </div>
        </MainNavBars>
    );
};

const LibraryFallback = () => (
    <MainNavBars className={styles['discover-container']} route={'library'} />
);

module.exports = withCoreSuspender(Library, LibraryFallback);

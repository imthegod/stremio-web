const React = require('react');
const PropTypes = require('prop-types');

const FilterDropdown = ({ setSelectedTags, setSelectedGenres, selectedGenres, selectedTags, tags, genres, excludedGenres, setExcludedGenres, setExcludedTags, excludedTags }) => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredTags, setFilteredTags] = React.useState(tags);
    const [filteredGenres, setFilteredGenres] = React.useState(genres);

    const handleDropdownToggle = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query.length >= 3) {
            const lowercasedQuery = query.toLowerCase();
            setFilteredTags(tags.filter((tag) => tag.toLowerCase().includes(lowercasedQuery)));
            setFilteredGenres(genres.filter((genre) => genre.toLowerCase().includes(lowercasedQuery)));
        } else {
            setFilteredTags(tags);
            setFilteredGenres(genres);
        }
    };

    const toggleSelection = (item, type) => {
        const setSelected = type === 'tag' ? setSelectedTags : setSelectedGenres;
        const setExcluded = type === 'tag' ? setExcludedTags : setExcludedGenres;
        const excluded = type === 'tag' ? excludedTags : excludedGenres;

        setSelected((prevSelected) => {
            const newSelected = new Set(prevSelected);
            const newExcluded = new Set(excluded);

            if (newSelected.has(item)) {
                newSelected.delete(item);
                newExcluded.add(item);
            } else if (newExcluded.has(item)) {
                newExcluded.delete(item);
            } else {
                newSelected.add(item);
            }

            setExcluded(newExcluded);
            return newSelected;
        });
    };

    return (
        <div>
            <div className="flex items-center mb-2">
                <label className="block text-lg font-semibold text-white text-opacity-60 pr-1">Filter tags & genres</label>
                <div className="flex items-center gap-2 text-white text-opacity-60 text-xs font-semibold">
                    <div className="flex items-center text-green-500">
                        <span className="">+</span>
                        <span className="ml-1">{selectedGenres.size + selectedTags.size}</span>
                    </div>
                    <div className="flex items-center text-red-500 ">
                        <span className="">-</span>
                        <span className="ml-1">{excludedGenres.size + excludedTags.size}</span>
                    </div>
                </div>
            </div>
            <button
                onClick={handleDropdownToggle}
                className="bg-white space-x-1 bg-opacity-5 w-60 h-11 flex items-center justify-center rounded-3xl text-white text-center text-sm overflow-hidden relative"
            >
                {Array.from(selectedGenres).length === 0 &&
                Array.from(selectedTags).length === 0 &&
                Array.from(excludedGenres).length === 0 &&
                Array.from(excludedTags).length === 0 ?
                    'Include any'
                    :
                    (<>
                        {
                            selectedGenres.size + selectedTags.size > 0 ?
                                <span className='text-green-500 opacity-60 text-sm font-bold'>Included {selectedGenres.size + selectedTags.size}</span>
                                :
                                null
                        }
                        {
                            excludedGenres.size + excludedTags.size > 0 ?
                                <span className='text-red-500 opacity-60 text-sm font-bold'>Excluded {excludedGenres.size + excludedTags.size}</span>
                                :
                                null
                        }
                    </>)}
            </button>

            {dropdownOpen && (
                <div
                    style={{
                        background: 'linear-gradient(41deg,var(--primary-background-color) 0%,var(--secondary-background-color) 100%)'
                    }}
                    className="rounded-2xl absolute top-24 left-0 mt-24 w-[42rem] h-[32rem] border border-white border-opacity-5 text-white shadow-lg z-10 overflow-auto"
                >
                    <input
                        type="text"
                        placeholder="Search tags and genres..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full px-4 py-2 border-b border-white border-opacity-5 bg-transparent"
                    />
                    <div className="p-4 border-b border-white border-opacity-5">
                        <h4 className="text-lg font-semibold mb-2">Genres</h4>
                        <div className="flex flex-wrap gap-2">
                            {filteredGenres.map((genre, index) => (
                                <button
                                    key={index}
                                    onClick={() => toggleSelection(genre, 'genre')}
                                    className={`px-4 py-2 rounded-md border border-white border-opacity-5 ${selectedGenres.has(genre) ? 'bg-white bg-opacity-10' : excludedGenres.has(genre) ? 'bg-red-600 bg-opacity-10' : ''}`}
                                >
                                    {genre}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="p-4">
                        <h4 className="text-lg font-semibold mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {filteredTags.map((tag, index) => (
                                <button
                                    key={index}
                                    onClick={() => toggleSelection(tag, 'tag')}
                                    className={`px-4 py-2 rounded-md border border-white border-opacity-5 ${selectedTags.has(tag) ? 'bg-white bg-opacity-10' : excludedTags.has(tag) ? 'bg-red-600 bg-opacity-10' : ''}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

FilterDropdown.displayName = 'FilterDropdown';

FilterDropdown.propTypes = {
    setSelectedTags: PropTypes.func,
    setSelectedGenres: PropTypes.func,
    selectedGenres: PropTypes.instanceOf(Set),
    selectedTags: PropTypes.instanceOf(Set),
    tags: PropTypes.array,
    genres: PropTypes.array,
    excludedGenres: PropTypes.instanceOf(Set),
    setExcludedGenres: PropTypes.func,
    setExcludedTags: PropTypes.func,
    excludedTags: PropTypes.instanceOf(Set),
};

module.exports = FilterDropdown;

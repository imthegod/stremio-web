const React = require('react');
const { Multiselect } = require('stremio/common');
const styles = require('./styles');
const PropTypes = require('prop-types');

const options = [
    { label: 'Latest', value: 'latest'},
    { label: 'Oldest', value: 'oldest' },
    { label: 'A-Z', value: 'az' },
    { label: 'Z-A', value: 'za' },
    { label: 'Series first', value: 'seriesfirst' },
    { label: 'Movies first', value: 'moviesfirst'}
];

const SortDropdown = ({ selected, onSelect }) => {
    return (
        <div className='flex flex-col overflow-visible'>
            <div className="flex items-center mb-2">
                <label className="block text-lg font-semibold text-white text-opacity-60 pr-1">Sort by</label>
            </div>
            <Multiselect
                className={styles['select-input']}
                title='Latest'
                options={options}
                selected={selected}
                onSelect={onSelect}
            />
        </div>
    );
};

SortDropdown.displayName = 'SortDropdown';

SortDropdown.propTypes = {
    selected: PropTypes.array,
    onSelect: PropTypes.func
};

module.exports = SortDropdown;

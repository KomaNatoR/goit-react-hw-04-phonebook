import PropTypes from 'prop-types';

const Filter = ({onFilterChange, value}) => {
    return (
        <div>
            <label>Find contacts by name</label>
            <input onChange={onFilterChange} type="text" value={value} />
        </div>
    );
};
Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    value:PropTypes.string.isRequired,
};

export default Filter;
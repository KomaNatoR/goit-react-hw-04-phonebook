

const Filter = ({onFilterChange}) => {
    return (
        <div>
            <label>Find contacts by name</label>
            <input onChange={onFilterChange} type="text" />
        </div>
    );
};

export default Filter;
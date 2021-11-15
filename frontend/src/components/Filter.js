const Search = ({setFilterValue, filterValue}) => {

    const handleFilter = (event) => {
        setFilterValue(event.target.value)
    }

    return (
        <form>
            <h1>Search</h1>
            <input
                value={filterValue}
                onChange={handleFilter}
            />
        </form>
    )
}

export default Search
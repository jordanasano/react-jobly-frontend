/** To render a search bar.
 *
 *  Props:
 *      - searchQuery
 *
 *  No state
 *
 *  [CompanyList, JobList] -> SearchBar
 */

function SearchBar({ searchQuery }) {
    return (
        <form onSubmit={searchQuery}>
        <label for="search"></label>
        <input id="search" name="search" placeholder="search for a company"/>
        <button>Search</button>
        </form>
    )
}

export default SearchBar;

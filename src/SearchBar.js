import { useState } from "react";

/** To render a search bar.
 *
 *  Props:
 *      - searchQuery
 *
 *  State:
 *      - formData
 *
 *  [CompanyList, JobList] -> SearchBar
 */

//TODO: make a fully controlled component
function SearchBar({ searchQuery }) {

    const [formData, setFormData] = useState({});

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(st => ({
            ...st,
            [name]: value,
        }));
    }

    return (
        <form onSubmit={searchQuery}>
            <label htmlFor="search"></label>
            <input id="search" name="search" onChange={handleChange}
                placeholder="Enter search term..." />
            <button>Search</button>
        </form>
    );
}

export default SearchBar;

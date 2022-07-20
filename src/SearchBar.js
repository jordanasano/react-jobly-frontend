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
function SearchBar({ searchQuery }) {
    const [formData, setFormData] = useState({});

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(st => ({
            ...st,
            [name]: value,
        }));
    }


    // Stops the page from reloading and invokes searchQuery with user input
    function handleSubmit(evt) {
        evt.preventDefault();
        searchQuery(formData.search);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input 
                id="search" 
                name="search" 
                onChange={handleChange}
                placeholder="Enter search term..." />
            <button>Search</button>
        </form>
    );
}

export default SearchBar;

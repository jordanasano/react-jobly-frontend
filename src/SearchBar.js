import { useState } from "react";

/** To render a search bar.
 *
 *  Props:
 *      - searchQuery()
 *
 *  State:
 *      - formData
 *
 *  [CompanyList, JobList] -> SearchBar
 */
function SearchBar({ searchQuery }) {
    const [formData, setFormData] = useState({});

  // Updates state of form data through any change in the input fields
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(st => ({
            ...st,
            [name]: value,
        }));
    }


    // Stops the page from reloading and invokes searchQuery with user input
    async function handleSubmit(evt) {
        evt.preventDefault();
        await searchQuery(formData.search);
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

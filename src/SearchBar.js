import { useState } from "react";

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

    const [formData, setFormData] = useState({});

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(formData => ({
          ...formData,
          [name]: value,
        }));
      }

    return (
        <form onSubmit={searchQuery}>
        <label for="search"></label>
        <input id="search" name="search" onChange={handleChange}
               placeholder="search for a company" />
        <button>Search</button>
        </form>
    )
}

export default SearchBar;

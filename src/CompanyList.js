import CompanyCard from "./CompanyCard";
import SearchBar from "./SearchBar";
import { useEffect, useState } from 'react';
import JoblyApi from "./JoblyApi";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
/** To render company cards and search bar.
 *
 *  No props.
 *
 *  State: companies
 *
 *  RouteList -> CompanyList -> [SearchBar, CompanyCard]
 */

function CompanyList() {
    console.log("We're in the CompanyList component");
    const [companies, setCompanies] = useState([]);

    useEffect(function setInitialCompanies() {
        async function fetchAndSet() {
            let currentCompanies = await JoblyApi.getAllCompanies();
            currentCompanies = currentCompanies.map(c => ({ ...c, id: uuid() }));
            setCompanies(currentCompanies);
        }
        fetchAndSet();
    }, []);

    if (companies.length === 0) return <h1>Loading...</h1>;


    async function searchQuery(event) {
        event.preventDefault();
        console.log("we're in the searchQuery func... and event is: ",
            event.target[0].value);
        const input = event.target[0].value;
        let filteredCompanies = await JoblyApi.getCompaniesByName(input);
        filteredCompanies = filteredCompanies.map(c => ({ ...c, id: uuid() }));
        setCompanies(filteredCompanies);
    }

    return (
        <div>
            <SearchBar searchQuery={searchQuery} />
            {
                companies.map(c => (
                    <Link to={`/companies/${c.handle}`}>
                        <CompanyCard
                            key={c.id}
                            name={c.name}
                            description={c.description}
                            logo={c.logoUrl}
                        />
                    </Link>
                )
                )
            }
        </div>
    )
}

export default CompanyList;

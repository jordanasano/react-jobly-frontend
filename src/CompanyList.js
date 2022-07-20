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
 *      (i.e [{ handle, name, description, numEmployees, logoUrl } ...])
 *
 *  RouteList -> CompanyList -> [SearchBar, CompanyCard]
 */

function CompanyList() {
    console.log("We're in the CompanyList component");
    const [companies, setCompanies] = useState([]);
 
    useEffect(function setInitialCompanies() {
        async function fetchAndSet() {
            const currentCompanies = await JoblyApi.getAllCompanies();
            setCompanies(currentCompanies);
        }
        fetchAndSet();
    }, []);

    if (companies.length === 0) {
        return (
            <div>
                <SearchBar searchQuery={searchQuery} />
                <h1>No Companies Found</h1>
            </div>
        );
    }

    async function searchQuery(name) {
        const filteredCompanies = await JoblyApi.getCompaniesByName(name);
        setCompanies(filteredCompanies);
    }

    return (
        <div>
            <SearchBar searchQuery={searchQuery} />
            {
                companies.map(c => (
                    <Link key={c.handle} to={`/companies/${c.handle}`}>
                        <CompanyCard
                            name={c.name}
                            description={c.description}
                            logo={c.logoUrl}
                        />
                    </Link>
                )
                )
            }
        </div>
    );
}

export default CompanyList;

import CompanyCard from "./CompanyCard";
import SearchBar from "./SearchBar";
import { useEffect, useState } from 'react';
import JoblyApi from "./JoblyApi";
import {v4 as uuid} from "uuid";
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
            currentCompanies = currentCompanies.map(c => ({...c, id:uuid()}));
            setCompanies(currentCompanies);
        }
        fetchAndSet();
    }, []);

    if(companies.length === 0) return <h1>Loading...</h1>;
    
    return (
        <div>
            <SearchBar />
            {
                companies.map(c => (
                    <CompanyCard
                        key={c.id}
                        name={c.name}
                        description={c.description}
                        logo={c.logoUrl}
                    />
                )
                    )
            }
        </div>
    )
}

export default CompanyList;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";
import "./CompanyDetail.css";

/** To render company details and job card list.
 *
 *  No props.
 *
 *  State:
 *      - company
 *          (i.e { handle, name, description, numEmployees, logoUrl })
 *
 *  RouteList -> CompanyDetail -> JobCardList
 */
function CompanyDetail() {
    console.log("We're in the CompanyDetail component");
    const companyHandle = useParams().handle;
    const [company, setCompany] = useState(null);

    useEffect(function setInitialCompany() {
        async function fetchAndSet() {
            let currentData;

            try {
                currentData = await JoblyApi.getCompany(companyHandle);
            } catch {
                return setCompany([]);
            }

            console.log('getCompany(handle) response =', currentData);
            setCompany(currentData);
        }
        fetchAndSet();
    }, [companyHandle]);

    if (company === null) {
        return <h1>Loading...</h1>;
    } else if (company.length === 0) {
        return <h1>Company not found</h1>
    }

    return (
        <div className='CompanyDetail-text'>
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            <JobCardList jobs={company.jobs} />
        </div>

    );
}

export default CompanyDetail;

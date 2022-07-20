import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";

/** To render company details and job card list.
 *
 *  No props.
 * 
 *  State:
 *      - company
 *
 *  RouteList -> CompanyDetail -> JobCardList
 */
function CompanyDetail() {
    console.log("We're in the CompanyDetail component");
    const companyHandle = useParams().handle;
    const [company, setCompany] = useState('Loading...');

    useEffect(function setInitialCompany() {
        async function fetchAndSet() {
            let currentData;

            try{
                currentData = await JoblyApi.getCompany(companyHandle);
            } catch {
                return setCompany('Company not found');
            }

            console.log('getCompany(handle) response =' ,currentData);
            setCompany(currentData);
        }
        fetchAndSet();
    }, []);

    if (company === 'Loading...' || company === 'Company not found') {
        return <h1>{company}</h1>;
    }

    return (
        <div>
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            <JobCardList jobs={company.jobs} />
        </div>
       
    )
}

export default CompanyDetail;

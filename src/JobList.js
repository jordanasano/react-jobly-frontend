import SearchBar from "./SearchBar";
import { useEffect, useState } from 'react';
import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";

/** To render search bar and job card list.
 *
 *  No props.
 *
 *  State: jobs
 *      (i.e. [{ id, title, salary, equity, companyHandle, companyName } ...])
 *
 *  RouteList -> JobList -> [SearchBar, JobCardList]
 */

function JobList() {
    console.log("We're in the JobList component");
    const [jobs, setJobs] = useState([]);

    // After first render, sets jobs to an array of job objects
    useEffect(function setInitialJobs() {
        async function fetchAndSet() {
            let currentJobs = await JoblyApi.getAllJobs();
            setJobs(currentJobs);
        }
        fetchAndSet();
    }, []);

    if (jobs.length === 0) {
        return (
            <div>
                <SearchBar searchQuery={searchQuery} />
                <h1>No Jobs Found</h1>
            </div>
        );
    }

    /// Takes in a title, gets jobs that contain that title, updates jobs state
    async function searchQuery(title) {
        let filteredJobs = await JoblyApi.getJobsByTitle(title);
        setJobs(filteredJobs);
    }

    return (
        <div>
            <SearchBar searchQuery={searchQuery} />
            <JobCardList jobs={jobs} />
        </div>
    );
}

export default JobList;

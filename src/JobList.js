import SearchBar from "./SearchBar";
import { useEffect, useState } from 'react';
import JoblyApi from "./JoblyApi";
import { v4 as uuid } from "uuid";
import JobCardList from "./JobCardList";

/** To render search bar and job card list.
 *
 *  No props.
 *
 *  State: jobs
 *
 *  RouteList -> JobList -> [SearchBar, JobCardList]
 */

function JobList() {
    console.log("We're in the JobList component");
    const [jobs, setJobs] = useState([]);

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

    async function searchQuery(event) {
        event.preventDefault();
        console.log("we're in the searchQuery func... and event is: ",
            event.target[0].value);
        const input = event.target[0].value;
        let filteredJobs = await JoblyApi.getJobsByTitle(input);
        filteredJobs = filteredJobs.map(c => ({ ...c, id: uuid() }));
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

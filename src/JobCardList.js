import { v4 as uuid } from "uuid";
import JobCard from "./JobCard";
/** To render job cards.
 *
 *  Props:
 *      - jobs
 *
 *  No state.
 *
 *  RouteList -> [CompanyList, JobList] -> JobCardList
 */

function JobCardList({ jobs }) {
    jobs = jobs.map(job => ({ ...job, id: uuid() }));

    return (
        <div>
            {
                jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))
            }
        </div>
    );
}

export default JobCardList;

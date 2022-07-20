import JobCard from "./JobCard";
/** To render job cards.
 *
 *  Props:
 *      - jobs
 *        (i.e. [{ id, title, salary, equity, companyHandle, companyName } ...])
 *
 *  No state.
 *
 *  RouteList -> [CompanyList, JobList] -> JobCardList
 */

function JobCardList({ jobs }) {
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

//TODO: what is a job????
/** To render Job details.
 *
 *  Props:
 *    - job
 *
 *  No state.
 *
 *  JobList -> JobCard
 */

function JobCard({ job }) {
    return (
        <div>
            <h1>{job.title}</h1>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity !== null && job.equity}</p>
        </div>
    );
}

export default JobCard;

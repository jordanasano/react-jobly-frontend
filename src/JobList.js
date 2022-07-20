import SearchBar from "./SearchBar";
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
    return (
        <div>
            <SearchBar />
            <p>JobList Page</p>
        </div>
    )
}

export default JobList;

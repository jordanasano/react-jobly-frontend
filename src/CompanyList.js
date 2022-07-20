import CompanyCard from "./CompanyCard";
import SearchBar from "./SearchBar";

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
    return (
        <div>
            <SearchBar />
            <CompanyCard />
        </div>
    )
}

export default CompanyList;

import { Link } from "react-router-dom";
//TODO: Docstring
function Navigation() {
    // TODO: Formatting/styling. Use NavLink 
    return (
        <nav className="NavBar">
            <Link to="/">
                Jobly
            </Link>
            <Link to="/companies">
                Companies
            </Link>
            <Link to="/jobs">
                Jobs
            </Link>
        </nav>
    )
}

export default Navigation;
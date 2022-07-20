import { NavLink } from "react-router-dom";
import "./Navigation.css";

/** To render the navigation bar.
 *
 *  No props.
 *
 *  No state.
 *
 *  App -> Navigation
 */

function Navigation() {
    console.log("We're in the Navigation component");

    return (
        <nav className="NavBar">
            <NavLink className="home" to="/">
                Jobly
            </NavLink>
            <NavLink className="companies" to="/companies">
                Companies
            </NavLink>
            <NavLink className="jobs" to="/jobs">
                Jobs
            </NavLink>
        </nav>
    );
}

export default Navigation;

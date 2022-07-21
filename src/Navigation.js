import { NavLink } from "react-router-dom";
import "./Navigation.css";
import userContext from "./userContext";
import { useContext } from "react";

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

    const user  = useContext(userContext);


    return (
        <nav className="NavBar">
            <NavLink className="home" to="/">
                Jobly
            </NavLink>
            { user
            ?
            (<div>
            <NavLink className="companies" to="/companies">
                Companies
            </NavLink>
            <NavLink className="jobs" to="/jobs">
                Jobs
            </NavLink>
            <NavLink className="profile" to="/profile">
                Profile
            </NavLink>
            <NavLink className="logout" to="/logout">
                Logout, {user.username}
            </NavLink>
            </div>)
            : (<div><NavLink className="login" to="/login">
                Login
            </NavLink>
            <NavLink className="signup" to="/signup">
                Signup
            </NavLink>
            </div>)
            }
        </nav>
    );
}

export default Navigation;

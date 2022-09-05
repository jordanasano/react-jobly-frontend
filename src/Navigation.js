import { NavLink } from "react-router-dom";
import "./Navigation.css";
import userContext from "./userContext";
import { useContext } from "react";

/** To render the navigation bar.
 *
 *  Context: user
 *         (i.e. { username, firstName, lastName, email, isAdmin })
 *
 *  No props.
 *
 *  No state.
 *
 *  App -> Navigation
 */

function Navigation() {
    console.log("We're in the Navigation component");

    const user = useContext(userContext);


    return (
        <nav className="NavBar">
            <NavLink className="NavBar-home-link" to="/">
                Jobly
            </NavLink>
            {user
                ?
                (<div>
                    <NavLink className="NavBar-link" to="/companies">
                        Companies
                    </NavLink>
                    <NavLink className="NavBar-link" to="/jobs">
                        Jobs
                    </NavLink>
                    <NavLink className="NavBar-link" to="/profile">
                        Profile
                    </NavLink>
                    <NavLink className="NavBar-link" to="/logout">
                        Logout, {user.username}
                    </NavLink>
                </div>)
                : (<div><NavLink className="NavBar-link" to="/login">
                    Login
                </NavLink>
                    <NavLink className="NavBar-link" to="/signup">
                        Signup
                    </NavLink>
                </div>)
            }
        </nav>
    );
}

export default Navigation;

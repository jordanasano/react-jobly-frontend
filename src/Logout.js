import { Navigate } from "react";
/** To log out a user and reroute to homepage.
 *
 *  Props:
 *      - logout (function)
 *
 *  No state.
 *
 *  RouteList -> Logout
 */

function Logout({ logout }) {
    logout();

    return (
        <Navigate to='/' />
    );

}

export default Logout;
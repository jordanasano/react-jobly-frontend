import { useEffect } from 'react';
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

    useEffect(function invokeLogout() {
        logout();
    }, []);

     return null;

}

export default Logout;

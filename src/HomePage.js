import "./HomePage.css";
import userContext from "./userContext";
import { useContext } from "react";
/** To render homepage.
 *
 *  Context:
 *      - user 
 *          (i.e. { username, firstName, lastName, email, isAdmin })
 * 
 *  No props.
 *
 *  No state.
 *
 *  RouteList -> HomePage
 */

function HomePage() {
    console.log("We're in the HomePage component");

    const user = useContext(userContext);

    return (
        <div className="HomePage-container">
            <h1>Jobly</h1>
            { user && <h2>Welcome back, {user.firstName}!</h2> }
        </div>
    );
}

export default HomePage;

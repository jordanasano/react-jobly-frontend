import "./HomePage.css";
/** To render homepage.
 *
 *  No props.
 *
 *  No state.
 *
 *  RouteList -> HomePage
 */

function HomePage() {
    console.log("We're in the HomePage component");
    return (
        <div className="HomePage-container">
            <h1>Jobly</h1>
        </div>
    );
}

export default HomePage;

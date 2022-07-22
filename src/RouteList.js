import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './HomePage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import { useContext } from "react";
import userContext from "./userContext";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Logout from "./Logout";

/** To route user activity to applicable components.
 *
 *  Context: user
 *         (i.e. { username, firstName, lastName, email, isAdmin })
 *
 *  Props:
 *      - logout(), signUp(), login(), updateUser()
 *
 *  No state.
 *
 *  App -> RouteList
 */

function RouteList({ logout, signUp, logIn, updateUser }) {
    console.log("We're in the RouteList component");

    const user = useContext(userContext);

    return (
        <div>
            {user
                ?
                (<Routes>
                    <Route
                        path="/"
                        element={<HomePage />} />
                    <Route
                        path="/companies"
                        element={<CompanyList />} />
                    <Route
                        path="/companies/:handle"
                        element={<CompanyDetail />} />
                    <Route
                        path="/profile"
                        element={<Profile updateUser={updateUser}/>} />
                    <Route
                        path="/jobs"
                        element={<JobList />} />
                    <Route
                        path="/logout"
                        element={<Logout logout={logout} />} />
                    <Route
                        path='*'
                        element={<HomePage />} />
                </Routes>)
                :
                (<Routes>
                    <Route
                        path="/"
                        element={<HomePage />} />
                    <Route
                        path="/login"
                        element={<Login logIn={logIn} />} />
                    <Route
                        path="/signup"
                        element={<Signup signUp={signUp} />} />
                    <Route
                        path='*'
                        element={<Navigate to='/' />} />
                </Routes>)
            }
        </div>
    );
}

export default RouteList;

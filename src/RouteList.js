import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './HomePage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';

/** To route user activity to applicable components.
 *
 *  No props.
 *
 *  No state.
 *
 *  App -> RouteList
 */

function RouteList() {
    console.log("We're in the RouteList component");
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/companies/:handle" element={<CompanyDetail />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}

export default RouteList;

import './App.css';
import Navigation from './Navigation';
import RouteList from './RouteList';
import { BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import userContext from './userContext';
import JoblyApi from './JoblyApi';


/** To render Navigation and RouteList components
 *
 *  No props.
 *
 *  State:
 *    - user
 *        (i.e. { username, firstName, lastName, email, isAdmin })
 *
 *  App -> [userContext.Provider, Navigation, RouteList]
 */
function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  function logout() {
    setUser(null);
  }

  /// Takes in a title, gets jobs that contain that title, updates jobs state
  async function signUp(formData) {
    console.log("formData from signUp is =", formData);
    const { newUser, newToken } = await JoblyApi.signUp(formData);
    setUser(newUser);
    setToken(newToken);
  }

  /// Takes in a title, gets jobs that contain that title, updates jobs state
  async function login(formData) {
    console.log("formData from login is =", formData);
    const { newUser, newToken } = await JoblyApi.login(formData);
    setUser(newUser);
    setToken(newToken);
  }

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation />
          <RouteList logout={logout} signUp={signUp} login={login} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;

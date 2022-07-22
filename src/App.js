import './App.css';
import Navigation from './Navigation';
import RouteList from './RouteList';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from "react";
import userContext from './userContext';
import JoblyApi from './JoblyApi';
import jwtDecode from 'jwt-decode';


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

  //TODO: Docstring
  useEffect(function ifTokenUpdateUser() {
    async function decodeTokenUpdateUser() {
      const token = localStorage.getItem("token")
      const { username } = jwtDecode(token);
      const currUser = await JoblyApi.getUserByUsername({ token, username });
      setUser(currUser);
    }

    if (localStorage.getItem("token") && user === null) {
      decodeTokenUpdateUser();
    }
  }, [user]);

  //TODO: Docstring
  function logout() {
    setUser(null);
    localStorage.removeItem("token");
  }

  /// Takes in a title, gets jobs that contain that title, updates jobs state
  async function signUp(formData) {
    console.log("formData from signUp is =", formData);
    const { newUser, newToken } = await JoblyApi.signUp(formData);
    setUser(newUser);
    localStorage.setItem("token", newToken);
  }

  /// Takes in a title, gets jobs that contain that title, updates jobs state
  async function login(formData) {
    console.log("formData from login is =", formData);
    const { newUser, newToken } = await JoblyApi.login(formData);
    setUser(newUser);
    localStorage.setItem("token", newToken);
  }
  // TODO: Switch to checking if user is null, global const for 'token'
  if(!user && localStorage.getItem('token')) return <p>Loading...</p>;

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

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
  const LOGGED_IN_TOKEN = 'token';

  // Every time the state of user changes, this function checks if there is a
  // token in localStorage AND if user is null. If yes, this function gets run.
  // When run, we get user data from the server through the token.
  // We then uppdate the state of user.
  useEffect(function ifTokenUpdateUser() {
    async function decodeTokenUpdateUser() {
      const token = localStorage.getItem(LOGGED_IN_TOKEN);
      const { username } = jwtDecode(token);
      const currUser = await JoblyApi.getUserByUsername({ token, username });
      setUser(currUser);
    }

    if (localStorage.getItem(LOGGED_IN_TOKEN) && user === null) {
      decodeTokenUpdateUser();
    }
  }, [user]);

  //Function run to logout user and remove token from localStorage.
  function logout() {
    setUser(null);
    localStorage.removeItem(LOGGED_IN_TOKEN);
  }

  // Takes in user signup form data and updates app state of user.
  // Saves token in local storage. Creates user on server.
  async function signUp(formData) {
    console.log("formData from signUp is =", formData);
    const { newUser, newToken } = await JoblyApi.signUp(formData);
    setUser(newUser);
    localStorage.setItem(LOGGED_IN_TOKEN, newToken);
  }

  // Takes in user login form data and updates app state of user.
  // Saves token in local storage.
  async function login(formData) {
    console.log("formData from login is =", formData);
    const { newUser, newToken } = await JoblyApi.login(formData);
    setUser(newUser);
    localStorage.setItem(LOGGED_IN_TOKEN, newToken);
  }

  // Takes in updated user profile information. Updates user state. Updates
  // user info on server.
  async function updateUser(formData) {
    const { updatedUser } = await JoblyApi.updateUser(formData);
    setUser(updatedUser);
  }

  if (user === null && localStorage.getItem(LOGGED_IN_TOKEN)) return <p>Loading...</p>;

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation />
          <RouteList logout={logout} signUp={signUp} login={login}
            updateUser={updateUser} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;

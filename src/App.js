import './App.css';
import Navigation from './Navigation';
import RouteList from './RouteList';
import { BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import userContext from './userContext';

/** To render Navigation and RouteList components
 *  No props.
 *
 *  No state.
 *
 *  App -> [Navigation, RouteList]
 */
function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation />
          <RouteList />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;

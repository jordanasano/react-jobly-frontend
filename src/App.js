import './App.css';
import Navigation from './Navigation';
import RouteList from './RouteList';
import { BrowserRouter } from 'react-router-dom';

/** To render Navigation and RouteList components
 *  No props.
 *
 *  No state.
 *
 *  App -> [Navigation, RouteList]
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;

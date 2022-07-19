import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import RouteList from './Routes';
import { BrowserRouter } from 'react-router-dom';
//TODO: Docstrings throughout
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

// import logo from '../assets/logo.svg';
import '../App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './Navbar';
import Home from './Home' 
import Test from './Test'

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/test" component={Test} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>


  );
}

export default App;

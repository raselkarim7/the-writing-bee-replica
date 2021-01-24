// import logo from '../assets/logo.svg';
import '../App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './Navbar';
import Home from './home/index.js' 
import Footer from './Footer'
import Test from './Test'
import PastWritingBee from './past-writing-bee'

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/past-writing-bees" component={PastWritingBee} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </div>
  </Router>

  );
}

export default App;

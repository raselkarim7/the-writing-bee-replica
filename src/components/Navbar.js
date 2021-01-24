import React, {useRef } from 'react';
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

const Navbar = () => {
  const navRef = useRef(null)
  const handleBurgerClick = () => {
    let x = navRef.current;
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <nav>
      <div className="topnav" ref={navRef} id="myTopnav">
        <div> 
          <Link to="/" className="active">
            <img src={logo} />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/past-writing-bees">Past Writing Bees</Link>
        </div>
        <div to="javascript:void(0);" className="icon" onClick={handleBurgerClick}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
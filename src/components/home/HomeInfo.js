import React from 'react';
import { Link } from "react-router-dom";

import BoomWriterLogo from "../../assets/boomwriter-logo.png";
import HeroGlobImg from "../../assets/hero-glob.png";
import HeroTriangleImg from "../../assets/hero-triangle.png";

const HomeInfo = () => {
  return (
    <section id="home-info">
    <div className="hero-container">
      <div>
        <h1 className="hero-heading">
          <Link
            className="hero-heading-link"
            to="bee/2019/spoken_word.html"
          >
            <span className="hero-scroll">The 2020</span>
            <br />
            WRITING BEE
          </Link>
        </h1>
        <p className=" mx-auto hero-subheading  mb-3">
          Because all kids love writing stories!
        </p>
        <p className=" mx-auto hero-subheading mt-1 mt-md-5 col-12 mb-0 h5">
          Powered by:
        </p>
        <img
          className=" hero-bw-logo mx-auto"
          src={BoomWriterLogo}
          alt="Boomwriter bwm rgb rev"
        />
      </div>
      <img className="hero-img position-relative" src={HeroGlobImg} />
      <img className="hero-triangle" src={HeroTriangleImg} />
    </div>
  </section>
  );
};

export default HomeInfo;
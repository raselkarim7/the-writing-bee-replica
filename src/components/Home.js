import React from "react";
import { Link } from "react-router-dom";
import BoomWriterLogo from "../assets/boomwriter-logo.png";
import HeroGlobImg from "../assets/hero-glob.png";
import HeroTriangleImg from "../assets/hero-triangle.png";
import WilsonImg from "../assets/wilson.jpg";

const Home = () => {
  return (
    <div>
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
              className="img-fluid hero-bw-logo mx-auto"
              src={BoomWriterLogo}
              alt="Boomwriter bwm rgb rev"
            />
          </div>
          <img className="hero-img position-relative" src={HeroGlobImg} />
          <img className="hero-triangle" src={HeroTriangleImg} />
        </div>
      </section>
      <section className="intro-section-home panel-primary marketing-panel">
        <div className="container">
          <div>
            <div className="intro-container text-center ">
              <div className="mb-4 intro-header text-white  mx-auto uppercase">
                A Global event that starts right in your classroom!
              </div>
              <p className="mx-auto">
                Writing Bee Qualifying Rounds take place in individual
                classrooms around the world. Classroom-based winners and top
                vote-getters qualify for the Writing Bee Finals and a chance to
                become The Writing Bee Champion!
              </p>

              <Link
                to="https://account.boomwriter.com/signup"
                className="uppercase btn btn-primary"
              >
                Start your className writing bee
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimony-section-home panel-tertiary marketing-panel">
        <div className="container">
          <div className="tick-list-holder text-center mb-4">
            <h4 className="marketing-section-header text-center">
              The Writing Bee will improve Your Students’ Learning by Providing:
            </h4>
            <div className="ticket-list-contianer">
              <ul className="tick-list" style={{ display: 'flex', justifyContent: 'center'}}>
                <li className="tick-list-item" >
                  <div>
                    <i className="check-icon fa fa-check"></i>
                  </div>
                  <span className="uppercase">
                    Standards-based Writing Practice
                  </span>
                  <p>
                    While creating their story, students will strengthen their
                    use of effective techniques, descriptive details, and clear
                    event sequences.
                  </p>
                </li>
                <li className="tick-list-item">
                  <div>
                    <i className="check-icon fa fa-check"></i>
                  </div>
                  <span className="uppercase">
                    Personalized Writing Feedback
                  </span>
                  <p>
                    Providing students individualized feedback on their own work
                    is the most appropriate and effective approach to teach
                    writing.
                  </p>
                </li>
                <li className="tick-list-item">
                  <div>
                    <i className="check-icon fa fa-check"></i>
                  </div>
                  <span className="uppercase">Online Testing Preparation</span>
                  <p>
                    It’s never too soon to prepare students for the online
                    testing environment where they’ll be expected to produce
                    their best writing.
                  </p>
                </li>
                <li className="tick-list-item">
                  <div>
                    <i className="check-icon fa fa-check"></i>
                  </div>
                  <span className="uppercase">Transferable Writing Skills</span>
                  <p>
                    Storywriting offers a plethora of transferable writing
                    skills that will boost their ability in both fiction and
                    non-fiction writing assignments.
                  </p>
                </li>
              </ul>
            </div>

            <Link
              to="https://account.boomwriter.com/signup"
              className="uppercase btn btn-primary "
            >
              Start your className writing bee
            </Link>
          </div>
          <div className="testimony-holder">
            <div className="testimony mx-auto mt-5" >
              <img className="testimony-img" src={WilsonImg} alt="D wilson" />
              <blockquote className="testimony-quote">
                The Writing Bee was the most valuable writing experience I have
                had with my className in many years. My students were fully
                engaged - they collaborated, edited, imagined, improved, and
                happily worked for many hours on their chapter writing. My
                students improved their writing skills and also learned that
                they love writing. Invaluable lessons. Thank you, BoomWriter!
              </blockquote>
              <p className="testimony-name">D.Wilson</p>
              <p className="testimony-person-desc">
                Camino Elementary School, Camino, California USA
              </p>
            </div>
          </div>
          <div className="text-center mt-4 mb-4">
            <Link
              to="https://account.boomwriter.com/signup"
              className="uppercase btn btn-primary "
            >
              Start your className writing bee
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

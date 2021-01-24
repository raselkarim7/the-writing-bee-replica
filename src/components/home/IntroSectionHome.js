import React from 'react';
import { Link } from "react-router-dom";

const IntroSectionHome = () => {
  return (
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
  );
};

export default IntroSectionHome;
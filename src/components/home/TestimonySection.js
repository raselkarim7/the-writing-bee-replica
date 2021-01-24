import React from 'react';
import { Link } from "react-router-dom";

import WilsonImg from "../../assets/wilson.jpg";

const TestimonySection = () => {
  return (
    <section className="testimony-section-home panel-tertiary marketing-panel" style={{background: 'white', paddingBottom: '30px'}}>
    <div className="container">
      <div className="tick-list-holder text-center mb-4">
        <h4 className="marketing-section-header text-center">
          The Writing Bee will improve Your Students’ Learning by Providing:
        </h4>
        <div className="ticket-list-contianer">
          <ul
            className="tick-list"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <li className="tick-list-item">
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
        <div className="testimony mx-auto mt-5">
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
  );
};

export default TestimonySection;
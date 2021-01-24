import React from 'react';
import CompetitionImg from "../../assets/competition.png";
import { Link } from "react-router-dom";

const CompetitionSection = () => {
  return (
    <section className="competetion-section panel-secondary py-md-4">
    <div className="container">
      <div className="row">
        <div className="mx-auto text-center">
          <h1 className="mt-4 mb-3 heading">The Writing Bee Competition</h1>
          <p className="lead">
            The Writing Bee kicks off in schools with students participating
            in district or school-based Qualifying sessions. Students who
            qualify move on to the Finals with a chance to be crowned The
            Writing Bee Champion.
          </p>
          <div className="clearfix">
            <img
              className="mb-5"
              style={{ width: "50%" }}
              src={CompetitionImg}
              alt="How it works diagram"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="largeContainer mb-4">
      <div className="row">
        <div className=" text-center">
          <div>
            <h3 className="mb-2">
              <strong>1. Kick Off</strong>
            </h3>
            <p>
              Students read the Writing Bee’s original story start before
              independently writing their version of the next chapter.
              Teachers have the option to provide feedback and request
              revisions before approving each student's work.
            </p>
          </div>
        </div>
        <div className="text-center">
          <div>
            <h3 className="mb-2">
              <strong>2. Qualifying Rounds</strong>
            </h3>
            <p>
              Students read the anonymous submissions of their peers in
              small batches and vote for their favorites. A winning piece is
              identified to serve as the story’s middle chapter, and the
              process repeats to identify the final chapter.
            </p>
          </div>
        </div>
        <div className=" text-center">
          <div>
            <h3 className="mb-2">
              <strong>3. Finals</strong>
            </h3>
            <p>
              Class chapter winners and top vote-getters qualify to compete
              in The Writing Bee Finals. Plus, all classroom Qualifying
              round participants are eligible to read and cast votes for
              their favorites throughout The Finals.
            </p>
          </div>
        </div>
        <div className=" text-center">
          <div>
            <h3 className="mb-2">
              <strong>4. Winner</strong>
            </h3>
            <p>
              Writing Bee Finalists create a new story by submitting their
              work for review by students around the world. Only top
              vote-getters move on in this ‘knockout style’ event until the
              2020 Writing Bee Champion is crowned!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default CompetitionSection;
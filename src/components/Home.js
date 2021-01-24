import React from "react";
import { Link } from "react-router-dom";

import BoomWriterLogo from "../assets/boomwriter-logo.png";
import HeroGlobImg from "../assets/hero-glob.png";
import HeroTriangleImg from "../assets/hero-triangle.png";
import WilsonImg from "../assets/wilson.jpg";
import CompetitionImg from "../assets/competition.png";
import bwLogo from '../assets/bw-logo.png'

import IconRead from '../assets/icon/read.png'
import IconWrite from '../assets/icon/write.png'
import IconShare from '../assets/icon/share.png'
import IconVote from '../assets/icon/vote.png'
import IconRepeat from '../assets/icon/repeat.png'

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
              className=" hero-bw-logo mx-auto"
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

<section className="worksHeader">
	<div className="container mt-4 mb-4">
		<div className="heading">
        <div className="mx-auto text-center">
				<h2 className="heading ">The Writing Bee is powered by <img src={bwLogo} alt="Bw splat" /></h2>
				<p className="lead">The Writing Bee employs BoomWriter’s unique content generation platform that allows students to compete and collaborate online as they:</p>
			</div>
		</div>
	</div>

	<div className="container works-header-icon-container mb-4 mt-4">
		<div className="works-header-icon-container">
			<div >
				<div className="worksBullet text-center animated bounceInDown">
					<img className="worksBulletIcon  " src={IconRead} alt="Works bullet read" />
					<h3 className="mb-4 worksBulletText"><span className="h3"><strong>Read/View</strong></span><br/>The prompt</h3>
				</div>
			</div>
			<div >
				<div className="worksBullet text-center animated bounceInDown">
					<img className="worksBulletIcon " src={IconWrite} alt="Works bullet write" />
					<h3 className="mb-4 worksBulletText"><span className="h3"><strong>Write</strong></span><br/>An entry</h3>
				</div>
			</div>			
			<div >
				<div className="worksBullet text-center animated bounceInDown">
					<img className="worksBulletIcon  " src={IconShare} alt="Works bullet share" />
					<h3 className="mb-4 worksBulletText"><span className="h3"><strong>Share</strong></span><br/>With peers</h3>
				</div>
			</div>								
			<div >
				<div className="worksBullet text-center animated bounceInDown">
					<img className="worksBulletIcon" src={IconVote} alt="Works bullet vote" />
					<h3 className="mb-4 worksBulletText"><span className="h3"><strong>Vote</strong></span><br/>For the favorite</h3>
				</div>
			</div>
			<div >
				<div className="worksBullet text-center animated bounceInDown">
					<img className="worksBulletIcon " src={IconRepeat} alt="Works bullet repeat" />
					<h3 className="mb-4 worksBulletText"><span className="h3"><strong>Repeat</strong></span><br/>Until complete</h3>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  );
};

export default Home;

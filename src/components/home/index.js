import React from "react";
import { Link } from "react-router-dom";

import HomeInfo from './HomeInfo'
import IntroSectionHome from './IntroSectionHome'
import TestimonySection from './TestimonySection'
import CompetitionSection from './CompetitionSection'
import WorksHeaderSection from './WorksHeaderSection'
import TimelineSection from './TimelineSection'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
      <HomeInfo />
      <IntroSectionHome />
      <TestimonySection />
      <CompetitionSection />
      <WorksHeaderSection />
      <TimelineSection />
      <Footer />


    </div>
  );
};

export default Home;

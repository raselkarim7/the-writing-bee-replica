import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import HomeInfo from './HomeInfo'
import IntroSectionHome from './IntroSectionHome'
import TestimonySection from './TestimonySection'
import CompetitionSection from './CompetitionSection'
import WorksHeaderSection from './WorksHeaderSection'
import TimelineSection from './TimelineSection'

import YellowImg from '../../assets/yellow-img.jpg'


const Home = () => {

  useEffect(() => {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
    let observer = new IntersectionObserver(entries => {
      if (entries[0].boundingClientRect.y < 100) {
        document.body.style.background = `url(${YellowImg})`
        document.body.style.backgroundRepeat = `no-repeat cover`
        document.body.style.backgroundAttachment = `fixed`
      } else {
        document.body.style.background =  'none' //`url(${YellowImg}) no-repeat center` 
      }
    });
    observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
    }
    
  }, []);

  return (
    <div>
      <HomeInfo />
      <IntroSectionHome />
      <TestimonySection />
      <div id="top-of-site-pixel-anchor"> </div>

      <CompetitionSection />
      <WorksHeaderSection />
      <TimelineSection />



    </div>
  );
};

export default Home;

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Hero } from '../components/Hero';
import AboutMe from '../components/about me';
import CoreValues from '../components/Corevalue';
import PracticeAreas from '../components/PracticeAreas';
import Testimonials from '../components/Testimonial';
import CallToAction from '../components/CTA';
import CaseCount from '../components/CaseCount';
const HeroSection = () => {
  return (
  <>
    <Hero />
    <AboutMe ></AboutMe>
    <CaseCount />
    <CoreValues />
    <PracticeAreas />
    <Testimonials />
    <CallToAction />

  </>
  );
};

export default HeroSection;

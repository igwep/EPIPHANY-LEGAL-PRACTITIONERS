// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Hero } from '../components/Hero';
import AboutMe from '../components/about me';
import CoreValues from '../components/Corevalue';
import PracticeAreas from '../components/PracticeAreas';
import Testimonials from '../components/Testimonial';
const HeroSection = () => {
  return (
  <>
    <Hero />
    <AboutMe ></AboutMe>
    <CoreValues />
    <PracticeAreas />
    <Testimonials />

  </>
  );
};

export default HeroSection;

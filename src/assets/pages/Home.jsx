import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import AboutMe from '../components/about me';
const HeroSection = () => {
  return (
  <>
    <Hero />
    <AboutMe ></AboutMe>
  </>
  );
};

export default HeroSection;

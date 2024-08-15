import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './GlobalProvider';
import { useContext } from 'react';

const CallToAction = () => {
  const {handleLinkClick} = useContext(GlobalContext);
  return (
    <section className="bg-custom-primary py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Take the Next Step?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Contact Epiphany Legal Practitioners today to schedule your consultation and get the legal support you need.
        </p>
        <Link
          onClick={handleLinkClick}
          to="/contact"
          className="bg-white text-custom-primary font-bold hover:bg-custom-secondary transition-colors duration-300 py-3 px-6 rounded-full text-lg md:text-xl cursor-pointer transform hover:scale-105"
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;

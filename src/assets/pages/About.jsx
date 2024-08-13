import React from 'react';
import LegalIcon from '@mui/icons-material/Gavel'; // Example icon, replace with relevant ones
import SupportIcon from '@mui/icons-material/Support';
import IntegrityIcon from '@mui/icons-material/VerifiedUser';

const About = () => {
  return (
    <section className="flex flex-col h-[100vh] mt-72 md:flex-row items-center justify-between bg-white py-10 md:py-20 px-4 md:px-16">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src="../src/assets/images/about-image.jpg"
          alt="About us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section: Text and Icons */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-custom-primary mb-4">
          About Epiphany Legal Practitioners
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          At Epiphany Legal Practitioners, we pride ourselves on delivering exceptional legal services to our clients.
          With years of experience and a deep commitment to justice, we are here to guide you through every step of the legal process.
        </p>

        {/* List of Values or Services */}
        <ul className="space-y-4">
          <li className="flex items-center">
            <LegalIcon className="text-custom-primary mr-3" />
            <span className="text-gray-700 text-lg">Expert Legal Advice</span>
          </li>
          <li className="flex items-center">
            <SupportIcon className="text-custom-primary mr-3" />
            <span className="text-gray-700 text-lg">24/7 Client Support</span>
          </li>
          <li className="flex items-center">
            <IntegrityIcon className="text-custom-primary mr-3" />
            <span className="text-gray-700 text-lg">Integrity and Transparency</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

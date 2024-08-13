import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex  md:mt-36 mt-80 flex-col-reverse md:flex-row items-center md:justify-between bg-gray-100 py-10 md:py-20 px-4 md:px-16">
      {/* Left Section: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-custom-primary mb-4">
          Welcome to Epiphany Legal Practitioners
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          Providing expert legal advice and representation with a personal touch.
          We are dedicated to ensuring the best outcomes for our clients.
        </p>
        <button className="bg-custom-primary text-white py-2 px-4 rounded-full hover:bg-custom-secondary transition-colors duration-300 w-full md:w-auto">
          Get in Touch
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src="../src/assets/images/New Folder/198890-909564521_tiny.jpg"
          alt="Legal consultation"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;

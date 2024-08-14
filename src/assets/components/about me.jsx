import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section className="bg-custom-bg py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/images/New%20Folder/Hero%20Image.jpg"
              alt="About Me"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Meet [Your Name]
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              I was called to the bar in 1995 after completing my studies at the prestigious University of Benin. I fulfilled my NYSC duties in Kaduna, and upon completion, I joined the esteemed law firm of A. O. Akpedeye & Co. in 1996. Over the years, I have been a part of the firm's evolution into Compos Months Legal Practitioners. 
            </p>
           
            <Link
              to="/about"
              className="text-custom-primary font-bold text-lg underline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

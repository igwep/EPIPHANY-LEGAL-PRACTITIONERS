import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="path-to-your-image.jpg"
              alt="About Me"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Meet [Your Name]
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              I am [Your Name], a dedicated and passionate professional with a rich background in [Your Field]. With [X years] of experience, I have honed my skills in [mention specific areas]. My journey has been shaped by a deep commitment to [mention your values or mission].
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

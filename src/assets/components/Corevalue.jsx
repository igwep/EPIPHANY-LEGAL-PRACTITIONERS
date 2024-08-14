import React from 'react';
import IntegrityIcon from '@mui/icons-material/VerifiedUser';
import ExcellenceIcon from '@mui/icons-material/Star';
import ClientFocusIcon from '@mui/icons-material/People';

const CoreValues = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
          Our Core Values
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          At the heart of our practice, we are guided by unwavering principles that ensure we provide the best legal representation to our clients.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12">
          <div className="mb-8 md:mb-0 text-white">
            <IntegrityIcon className="text-custom-primary mb-4 text-6xl" />
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-300">
              We uphold the highest standards of integrity, ensuring that our actions and advice align with ethical principles.
            </p>
          </div>
          <div className="mb-8 md:mb-0 text-white">
            <ExcellenceIcon className="text-custom-primary mb-4 text-6xl" />
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-gray-300">
              We are committed to excellence, consistently striving to deliver the highest quality legal services.
            </p>
          </div>
          <div className="text-white">
            <ClientFocusIcon className="text-custom-primary mb-4 text-6xl" />
            <h3 className="text-xl font-bold mb-2">Client Focus</h3>
            <p className="text-gray-300">
              Our clients are our priority. We listen, understand, and tailor our approach to meet their unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

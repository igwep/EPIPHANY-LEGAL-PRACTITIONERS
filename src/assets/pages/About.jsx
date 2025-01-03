// eslint-disable-next-line no-unused-vars
import React from 'react';
import LegalIcon from '@mui/icons-material/Gavel'; // Example icon, replace with relevant ones
import SupportIcon from '@mui/icons-material/Support';
import IntegrityIcon from '@mui/icons-material/VerifiedUser';

const About = () => {
  return (
    <section className="flex flex-col mt-96 md:mt-28 h-auto  md:flex-row items-center justify-between bg-white py-10 md:py-20 px-4 md:px-16">
      {/* Left Section: Image */}
      <div className="w-full md:w-[40%] mb-6 md:mb-0">
        <img
          src="/assets/images/New%20Folder/Hero%20Image.jpg"
          alt="About us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section: Bio and About Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
      <h2 className="text-4xl font-extrabold text-custom-primary mb-4">
              ABOUT MICHAEL NWOSU
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              I was called to the bar in 1995 after completing my studies at the prestigious University of Benin. I fulfilled my NYSC duties in Kaduna, and upon completion, I joined the esteemed law firm of A. O. Akpedeye & Co. in 1996. Over the years, I have been a part of the firm's evolution into Compos Months Legal Practitioners. 
            </p>
            <p className="text-gray-700 text-lg mb-6">
              I also had the honor of serving the Delta State Government as the Special Assistant to the Honourable Attorney General and Commissioner for Justice. My journey in law has been defined by a commitment to excellence and a deep dedication to justice.
            </p>

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

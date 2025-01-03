// eslint-disable-next-line no-unused-vars
import React from 'react';
import ContactForm from '../components/ContactForm';

const Consultation = () => {
  return (
    <div className="bg-gray-100 md:mt-40 mt-80">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center md:h-[70vh] h-[50vh]" style={{ backgroundImage: "url('/assets/images/New%20Folder/legal.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Schedule a Consultation</h1>
          <p className="mt-4 text-lg md:text-xl">Your First Step Towards Legal Guidance</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Schedule a Consultation?</h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          A consultation with our legal experts provides you with the opportunity to discuss your legal needs, understand your options, and get professional advice on how to proceed. It’s the first step in securing the representation you need.
        </p>
      </section>

      {/* Steps to Schedule Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">How to Schedule a Consultation</h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li className="mb-4">Contact us by phone or email to request a consultation.</li>
              <li className="mb-4">Choose a date and time that works best for you.</li>
              <li className="mb-4">Provide a brief overview of your legal needs so we can prepare.</li>
              <li className="mb-4">Attend your consultation at our office or virtually.</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="/assets/images/New%20Folder/agenda-2080420.jpg" alt="Schedule Consultation" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You Gain From a Consultation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Expert Legal Advice</h3>
            <p className="text-gray-700">
              Receive professional advice tailored to your specific legal situation from experienced attorneys.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Personalized Strategy</h3>
            <p className="text-gray-700">
              Develop a legal strategy that addresses your unique needs and goals, ensuring the best possible outcome.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Clear Next Steps</h3>
            <p className="text-gray-700">
              Understand the steps involved in your legal process and the options available to you moving forward.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Confidentiality</h3>
            <p className="text-gray-700">
              We prioritize your privacy and ensure that all consultations are confidential, providing you with peace of mind.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Cost Estimate</h3>
            <p className="text-gray-700">
              Get a clear understanding of potential costs and fees associated with your case before moving forward.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Commitment-Free</h3>
            <p className="text-gray-700">
              A consultation does not obligate you to hire us; it’s an opportunity to explore your options without pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-custom-primary py-16 px-4 md:px-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
        <p className="text-lg mb-12">
          Contact us today to schedule your consultation and take the first step towards resolving your legal issues.
        </p>
        <a href="tel:+2348033451428" className="bg-custom-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-custom-secondary-dark transition-colors">Call Us: +2348033451428</a>
        <p className="mt-8">or</p>
        <a href="mailto:barrmike3@yahoo.com" className="mt-4 inline-block bg-custom-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-custom-secondary-dark transition-colors">Email Us: barrmike3@yahoo.com</a>
      </section>

      {/* Contact Form Section */}
     <ContactForm />
    </div>
  );
};

export default Consultation;

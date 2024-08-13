import React from 'react';

const LegalRepresentation = () => {
  return (
    <div className="bg-gray-100 md:mt-36 mt-80">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('../src/assets/images/New Folder/legal.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Legal Representation</h1>
          <p className="mt-4 text-lg md:text-xl">Professional and Dedicated Legal Services</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comprehensive Legal Services</h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          At Epiphany Legal Practitioners, we provide a wide range of legal services tailored to meet the needs of individuals and businesses. Our experienced team is dedicated to delivering results with professionalism and integrity.
        </p>
      </section>

      {/* Areas of Representation */}
      <section className="max-w-7xl mx-auto py-16 px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-custom-primary mb-4">Corporate Law</h3>
          <p className="text-gray-700">
            Our corporate law services cover everything from formation and governance to mergers and acquisitions. We help businesses navigate complex legal landscapes with confidence.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-custom-primary mb-4">Criminal Defense</h3>
          <p className="text-gray-700">
            We provide aggressive representation for clients facing criminal charges. Our team is committed to protecting your rights and achieving the best possible outcome.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-custom-primary mb-4">Family Law</h3>
          <p className="text-gray-700">
            Our family law practice offers compassionate guidance and representation in matters such as divorce, child custody, and support. We work to resolve family disputes with care and discretion.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-custom-primary mb-4">Personal Injury</h3>
          <p className="text-gray-700">
            If youve been injured due to someone elses negligence, our personal injury lawyers will fight for the compensation you deserve. We handle cases with empathy and dedication.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-custom-primary mb-4">Real Estate Law</h3>
          <p className="text-gray-700">
            Our real estate law services include transactions, zoning issues, and property disputes. We provide comprehensive legal support for both residential and commercial real estate matters.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-custom-primary mb-4">Employment Law</h3>
          <p className="text-gray-700">
            We represent both employers and employees in employment law matters. Our services cover contracts, wrongful termination, discrimination, and more, ensuring fair treatment in the workplace.
          </p>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="bg-white py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Choosing the right legal representation can make all the difference in the outcome of your case. Our firm stands out for its commitment to client satisfaction, in-depth knowledge, and proven track record of success.
          </p>

          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-custom-primary mb-4">Expertise</h3>
              <p className="text-gray-700">
                Our attorneys bring years of experience and specialized knowledge to every case. We stay up-to-date with the latest legal developments to provide you with the best possible representation.
              </p>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-custom-primary mb-4">Personalized Approach</h3>
              <p className="text-gray-700">
                We understand that every case is unique, and we tailor our approach to meet the specific needs of each client. You can expect personalized attention and a strategy designed to achieve your goals.
              </p>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-custom-primary mb-4">Results-Driven</h3>
              <p className="text-gray-700">
                Our track record speaks for itself. We have successfully represented clients in a wide range of legal matters, delivering positive outcomes through skilled advocacy and strategic planning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalRepresentation;

import React from 'react';
import LegalServicesIcon from '@mui/icons-material/Gavel'; // Example icon, replace with relevant ones
import ConsultationIcon from '@mui/icons-material/EmojiPeople';
import DisputeResolutionIcon from '@mui/icons-material/Handshake';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="bg-gray-100 mt-36 py-12 md:py-20 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-custom-primary mb-4">
          Our Services
        </h2>
        <p className="text-gray-700 text-lg md:text-xl">
          We provide a wide range of legal services to meet your needs. Heres what we offer:
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/legal-representation" className="bg-white p-6 rounded-lg shadow-lg text-center">
          <LegalServicesIcon className="text-custom-primary text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Legal Representation</h3>
          <p className="text-gray-600">
            Professional and dedicated legal representation in various fields of law.
          </p>
        </Link>

        <Link to="/consultation" className="bg-white p-6 rounded-lg shadow-lg text-center">
          <ConsultationIcon className="text-custom-primary text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Consultation</h3>
          <p className="text-gray-600">
            Get expert legal advice tailored to your unique situation.
          </p>
        </Link>

        <Link to="/dispute-resolution" className="bg-white p-6 rounded-lg shadow-lg text-center">
          <DisputeResolutionIcon className="text-custom-primary text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dispute Resolution</h3>
          <p className="text-gray-600">
            Effective and efficient dispute resolution services.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Services;

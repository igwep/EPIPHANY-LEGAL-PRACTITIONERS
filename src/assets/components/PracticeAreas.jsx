import React from 'react';
import LegalIcon from '@mui/icons-material/Gavel';
import ConsultationIcon from '@mui/icons-material/Forum';
import DisputeResolutionIcon from '@mui/icons-material/Balance';

const PracticeAreas = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Practice Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Legal Representation */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <LegalIcon className="text-custom-primary text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Legal Representation</h3>
            <p className="text-gray-700">
              Providing expert legal advocacy and representation to protect your rights.
            </p>
          </div>

          {/* Consultation */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <ConsultationIcon className="text-custom-primary text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Consultation</h3>
            <p className="text-gray-700">
              Offering professional legal consultations to guide you through complex issues.
            </p>
          </div>

          {/* Dispute Resolution */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <DisputeResolutionIcon className="text-custom-primary text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Dispute Resolution</h3>
            <p className="text-gray-700">
              Resolving conflicts through mediation, negotiation, and arbitration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;

import React from 'react';
import LegalIcon from '@mui/icons-material/Gavel';
import ConsultationIcon from '@mui/icons-material/Forum';
import DisputeResolutionIcon from '@mui/icons-material/Balance';
import { Link } from 'react-router-dom';
import { GlobalContext } from './GlobalProvider';
import { useContext } from 'react';

const PracticeAreas = () => {
  const {handleLinkClick} = useContext(GlobalContext);
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Practice Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Legal Representation */}
          <Link onClick={handleLinkClick}  to="/legal-representation" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <LegalIcon className="text-custom-primary text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Legal Representation</h3>
            <p className="text-gray-700">
              Providing expert legal advocacy and representation to protect your rights.
            </p>
          </Link>

          {/* Consultation */}
          <Link onClick={handleLinkClick} to="/consultation" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <ConsultationIcon className="text-custom-primary text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Consultation</h3>
            <p className="text-gray-700">
              Offering professional legal consultations to guide you through complex issues.
            </p>
          </Link>

          {/* Dispute Resolution */}
          <Link onClick={handleLinkClick} to="/dispute-resolution" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <DisputeResolutionIcon className="text-custom-primary text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Dispute Resolution</h3>
            <p className="text-gray-700">
              Resolving conflicts through mediation, negotiation, and arbitration.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;

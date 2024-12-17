// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import  Services  from './assets/pages/Services';
import Footer from './assets/components/Footer';
import  About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import Consultation from './assets/pages/Consultation';
import LegalRepresentation from './assets/pages/LegalRepresentation';
import { GlobalProvider } from './assets/components/GlobalProvider';
import DisputeResolution from './assets/pages/Dispute Resolution';
import NotFound from './assets/components/NotFound';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
      <Navbar />
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal-representation" element={<LegalRepresentation />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/dispute-resolution" element={<DisputeResolution />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback route for 404 */}
        </Routes>
      </div>
      <Footer />
    </Router>
    </GlobalProvider>
  );
};

export default App;
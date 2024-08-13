import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import  Services  from './assets/pages/Services';
import Footer from './assets/components/footer';
import  About from './assets/pages/About';
import Submenu1 from './assets/pages/Submenu1';
import Submenu2 from './assets/pages/Submenu2';
import Submenu3 from './assets/pages/Submenu3';
import Contact from './assets/pages/Contact';
import Consultation from './assets/pages/Consultation';
import LegalRepresentation from './assets/pages/LegalRepresentation';
import { GlobalProvider } from './assets/components/GlobalProvider';
import DisputeResolution from './assets/pages/Dispute Resolution';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal-representation" element={<LegalRepresentation />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/dispute-resolution" element={<DisputeResolution />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/home/submenu1" element={<Submenu1 />} />
          <Route path="/home/submenu2" element={<Submenu2 />} />
          <Route path="/home/submenu3" element={<Submenu3 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </GlobalProvider>
  );
};

export default App;
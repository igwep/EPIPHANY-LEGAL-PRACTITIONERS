import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import  Services  from './assets/pages/Services';
import  About from './assets/pages/About';
import Submenu1 from './assets/pages/Submenu1';
import Submenu2 from './assets/pages/Submenu2';
import Submenu3 from './assets/pages/Submenu3';
import { GlobalProvider } from './assets/components/GlobalProvider';

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
          <Route path="/home/submenu1" element={<Submenu1 />} />
          <Route path="/home/submenu2" element={<Submenu2 />} />
          <Route path="/home/submenu3" element={<Submenu3 />} />
        </Routes>
      </div>
    </Router>
    </GlobalProvider>
  );
};

export default App;
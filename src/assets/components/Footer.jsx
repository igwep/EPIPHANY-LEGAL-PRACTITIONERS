// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GlobalContext } from './GlobalProvider';
import { useContext } from 'react';

const Footer = () => {
  const {handleLinkClick} = useContext(GlobalContext);
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        {/* Logo and Contact Section */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Epiphany Legal Practitioners</h2>
          <div className="flex items-center mb-4">
            <LocationOnIcon className="mr-2" />
            <p>124 Jakpa Road Effurun, Uvwie Local Government Area Delta state, Nigeria</p>
          </div>
          <div className="flex items-center mb-4">
            <CallIcon className="mr-2" />
            <p>+2348033451428</p>
          </div>
          <div className="flex items-center">
            <EmailIcon className="mr-2" />
            <p>barrmike3@yahoo.com</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link onClick={handleLinkClick} to="/" className="hover:underline">Home</Link>
              </li>
              <li className="mb-2">
                <Link onClick={handleLinkClick} to="/about" className="hover:underline">About Us</Link>
              </li>
              <li className="mb-2">
                <Link onClick={handleLinkClick} to="/services" className="hover:underline">Services</Link>
              </li>
              <li className="mb-2">
                <Link onClick={handleLinkClick} to="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul>
              <li className="mb-2">
                <Link onClick={handleLinkClick} to="/legal-representation" className="hover:underline">Legal Representation</Link>
              </li>
              <li className="mb-2">
                <Link onClick={handleLinkClick} to="/consultation" className="hover:underline">Consultation</Link>
              </li>
              <li className="mb-2">
                <Link onClick={handleLinkClick} to="/dispute-resolution" className="hover:underline">Dispute Resolution</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center md:justify-end gap-6 mb-8">
        <a href="https://facebook.com" className="hover:text-gray-400">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com" className="hover:text-gray-400">
          <TwitterIcon />
        </a>
        <a href="https://linkedin.com" className="hover:text-gray-400">
          <LinkedInIcon />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center md:text-right">
        <p>&copy; {new Date().getFullYear()} Epiphany Legal Practitioners. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

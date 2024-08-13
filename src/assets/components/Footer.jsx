import React from 'react';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        {/* Logo and Contact Section */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Epiphany Legal Practitioners</h2>
          <div className="flex items-center mb-4">
            <LocationOnIcon className="mr-2" />
            <p>1234 Legal St., Suite 100, City, ST 12345</p>
          </div>
          <div className="flex items-center mb-4">
            <CallIcon className="mr-2" />
            <p>(314) 530-8633</p>
          </div>
          <div className="flex items-center">
            <EmailIcon className="mr-2" />
            <p>dmueller@muellerlawgroupstl.com</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:underline">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="hover:underline">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul>
              <li className="mb-2">
                <Link to="/legal-representation" className="hover:underline">Legal Representation</Link>
              </li>
              <li className="mb-2">
                <Link to="/consultation" className="hover:underline">Consultation</Link>
              </li>
              <li className="mb-2">
                <Link to="/dispute-resolution" className="hover:underline">Dispute Resolution</Link>
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
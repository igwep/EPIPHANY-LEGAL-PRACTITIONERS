// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './GlobalProvider';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { menuModal, setMenuModal } = useContext(GlobalContext);
  const dropdownRef = useRef(null);
  const {handleLinkClick} = useContext(GlobalContext);
  const handleMobileModal = () => {
    setMenuModal(!menuModal);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors font-Gup duration-300 ${
        isScrolled ? 'bg-gray-900' : 'bg-gray-900'
      }`}
    >
      {/* Top Section with Logo and Contact Info */}
      <div
        className={`flex flex-col md:flex-row justify-between items-center px-4 py-4 bg-white transition-all duration-300 ${
          isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center">
          <img src="/assets/logo/Picture2.png" alt="Logo" className="h-16 md:h-20" />
          <div className="flex flex-col justify-center mt-2 md:mt-0 md:ml-4 text-center md:text-left">
            <p className="text-xl md:text-3xl font-extrabold uppercase text-custom-primary">Epiphany Legal Practitioners</p>
            <hr className="border-custom-primary border-t-2 mt-1 hidden md:block" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-gray-800 mt-4 md:mt-0">
          <div className="flex items-center bg-custom-secondary py-2 px-4 rounded-full">
            <CallIcon className="text-white" />
            <p className="ml-2 text-white cursor-pointer">+2348033451428</p>
          </div>
          <div className="flex items-center bg-custom-secondary py-2 px-4 rounded-full">
            <EmailIcon className="text-white" />
            <p className="ml-2 text-white">barrmike3@yahoo.com</p>
          </div>
        </div>
      </div>

      {/* Navigation Links Section */}
      <div
        className={`flex items-center py-2 md:py-4 px-4 bg-custom-primary transition-all duration-300 ${
          isScrolled ? 'pt-2 pb-2 justify-between' : 'pt-4 pb-4 justify-end'
        }`}
      >
        {/* Logo */}
        <img
          src="/assets/logo/Picture3.png"
          alt="Logo"
          className={`h-16  md:h-16 transition-transform duration-300 ${isScrolled ? 'scale-75 flex' : 'scale-100 hidden'}`}
        />

        {/* Navigation Links */}
        <div className="hidden md:flex gap-4 text-white">
          <Link onClick={handleLinkClick}  to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link onClick={handleLinkClick} to="/about" className="hover:text-gray-300">
            About
          </Link>
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            
            ref={dropdownRef}
          >
            <Link onClick={handleLinkClick} to="/services" className="hover:text-gray-300 flex items-center gap-1">
              Services <ExpandMoreIcon />
            </Link>
            {isDropdownOpen && (
              <div onMouseLeave={() => setIsDropdownOpen(false)} className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2">
                <Link
                onClick={handleLinkClick}
                  to="/dispute-resolution"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Dispute Resolution
                </Link>
                <Link
                onClick={handleLinkClick}
                  to="/consultation"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Consultation
                </Link>
                <Link
                onClick={handleLinkClick}
                  to="/legal-representation"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Legal Representation
                </Link>
              </div>
            )}
          </div>
          <Link onClick={handleLinkClick} to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="bg-custom-secondary md:hidden text-xl justify-center flex gap-2 cursor-pointer text-white items-center p-2 rounded-full"
          onClick={handleMobileModal}
        >
          <MenuIcon /> <p>Menu</p>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuModal && (
        <div className="md:hidden flex flex-col items-center bg-gray-200 text-black">
          <Link onClick={handleLinkClick} to="/" className="py-2 hover:underline underline-offset-4 decoration-2">
            Home
          </Link>
          <Link onClick={handleLinkClick} to="/about" className="py-2 hover:underline underline-offset-4 decoration-2">
            About
          </Link>
          {/* Mobile Services Dropdown */}
          <div className="w-full flex flex-col items-center">
            <Link onClick={handleLinkClick}
            to="/services"
          
              className="py-2 hover:underline underline-offset-4 decoration-2 flex items-center gap-1 w-full justify-center"
            >
              Services 
            </Link>
            
          </div>
          <Link onClick={handleLinkClick} to="/contact" className="py-2 hover:underline underline-offset-4 decoration-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

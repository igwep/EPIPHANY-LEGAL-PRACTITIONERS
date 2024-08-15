// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './GlobalProvider';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { menuModal, setMenuModal } = useContext(GlobalContext);
  const dropdownRef = useRef(null);
  const { handleLinkClick } = useContext(GlobalContext);

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
        <Link onClick={handleLinkClick} to="/">
          <img
            src="/assets/logo/Picture3.png"
            alt="Logo"
            className={`h-16  md:h-16 transition-transform duration-300 ${
              isScrolled ? 'scale-75 flex' : 'scale-100 hidden'
            }`}
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-4 text-white">
          <Link onClick={handleLinkClick} to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link onClick={handleLinkClick} to="/about" className="hover:text-gray-300">
            About
          </Link>
          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} ref={dropdownRef}>
            <Link
              onClick={handleLinkClick}
              to="/services"
              className="hover:text-gray-300 flex items-center gap-1"
            >
              Services <ExpandMoreIcon />
            </Link>
            {isDropdownOpen && (
              <div
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2"
              >
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

      {/* Mobile Slide Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-2/3 bg-gray-900 text-white p-6 transform ${
          menuModal ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <CloseIcon onClick={handleMobileModal} className="cursor-pointer" />
        </div>
        <div className="mt-8 flex flex-col gap-6">
          <Link
            onClick={() => {
              handleMobileModal();
              handleLinkClick();
            }}
            to="/"
            className="hover:underline"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              handleMobileModal();
              handleLinkClick();
            }}
            to="/about"
            className="hover:underline"
          >
            About
          </Link>
          <Link
            onClick={() => {
              handleMobileModal();
              handleLinkClick();
            }}
            to="/services"
            className="hover:underline"
          >
            Services
          </Link>
          <Link
            onClick={() => {
              handleMobileModal();
              handleLinkClick();
            }}
            to="/contact"
            className="hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

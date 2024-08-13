import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 mt-36 md:mt-36 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>
        
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Contact Information */}
          <div className="md:w-1/3">
            <div className="flex items-center mb-6">
              <LocationOnIcon className="mr-2 text-custom-primary" />
              <p>1234 Legal St., Suite 100, City, ST 12345</p>
            </div>
            <div className="flex items-center mb-6">
              <CallIcon className="mr-2 text-custom-primary" />
              <p>(314) 530-8633</p>
            </div>
            <div className="flex items-center mb-6">
              <EmailIcon className="mr-2 text-custom-primary" />
              <p>dmueller@muellerlawgroupstl.com</p>
            </div>
            
            {/* Google Map */}
            <iframe
              title="Google Map"
              className="w-full h-64 mt-6"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509199!2d144.9556513153164!3d-37.817313979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727cfb1b3b4b9b!2sLegal%20Practitioners!5e0!3m2!1sen!2sus!4v1632746113477!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 bg-white p-8 shadow-md rounded-lg">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-primary"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-primary"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-primary"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-custom-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-custom-primary-dark transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

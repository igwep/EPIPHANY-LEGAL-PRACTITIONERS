import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [state, handleSubmit] = useForm("mwpeqpyj"); // Replace with your Formspree form ID

  if (state.succeeded) {
    return <p className="mt-96 px-4 mb-20 py-4 text-center text-white font-semibold bg-custom-primary rounded-md shadow-lg max-w-md mx-auto">
    Thank you for reaching out! We appreciate your message and will get back to you as soon as possible.
  </p>;
  
  }

  return (
    <section className="bg-gray-100 py-16 mt-72 md:mt-36 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>
        
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Contact Information */}
          <div className="md:w-1/3">
            <div className="flex items-center mb-6">
              <LocationOnIcon className="mr-2 text-custom-primary" />
              <p>124 Jakpa Road Effurun, Uvwie Local Government Area Delta state, Nigeria</p>
            </div>
            <div className="flex items-center mb-6">
              <CallIcon className="mr-2 text-custom-primary" />
              <p>+2348033451428</p>
            </div>
            <div className="flex items-center mb-6">
              <EmailIcon className="mr-2 text-custom-primary" />
              <p>barrmike3@yahoo.com</p>
            </div>
            
            {/* Google Map */}
            <iframe
              title="Google Map"
              className="w-full h-64 mt-6"
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d31768.362679651105!2d5.754624539383564!3d5.560299383886993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d5.545990199999999!2d5.8231174!4m5!1s0x1041adb406555555%3A0x9d70fc70f162962b!2sUvwie%20Local%20Government%20Council%20area%2C%20HQCQ%2B66X%2C%20Secretariat%20Road%2C%20Effurun%20GRA%2C%20Effurun%2C%20Wado%20City%2C%20Delta!3m2!1d5.5623678!2d5.780024699999999!5e0!3m2!1sen!2sng!4v1723678069286!5m2!1sen!2sng" 
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 bg-white p-8 shadow-md rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-primary"
                  placeholder="Your Name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-primary"
                  placeholder="Your Email"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-primary"
                  placeholder="Your Message"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                className="w-full bg-custom-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-custom-primary-dark transition duration-300"
                disabled={state.submitting}
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

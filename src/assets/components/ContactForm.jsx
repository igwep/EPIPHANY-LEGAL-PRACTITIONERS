import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mwpeqpyj"); // Replace "yourFormspreeID" with your actual Formspree ID

  if (state.succeeded) {
    return <p className="mt-96 px-4 mb-20 py-4 text-center text-white font-semibold bg-custom-primary rounded-md shadow-lg max-w-md mx-auto">
    Thank you for reaching out! We appreciate your message and will get back to you as soon as possible.
  </p>;
  }

  return (
    <section className="bg-white py-16 px-4 md:px-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Request a Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name" 
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-custom-primary"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-custom-primary"
              placeholder="Your Email"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone" // Add this name attribute for Formspree
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-custom-primary"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-custom-primary"
              rows="4"
              placeholder="How can we help you?"
              required
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-custom-primary text-white font-bold py-3 px-8 rounded-full hover:bg-custom-primary-dark transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

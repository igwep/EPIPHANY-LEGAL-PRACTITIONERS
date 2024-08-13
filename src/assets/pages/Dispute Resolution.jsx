import React from 'react';

const DisputeResolution = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('../src/assets/images/dispute-resolution.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Dispute Resolution</h1>
          <p className="mt-4 text-lg md:text-xl">Effective Strategies for Resolving Conflicts</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach to Dispute Resolution</h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          At Epiphany Legal Practitioners, we understand that disputes can be complex and emotionally charged. Our team of experienced attorneys is dedicated to finding the best possible resolution for our clients, whether through negotiation, mediation, arbitration, or litigation.
        </p>
      </section>

      {/* Services Offered Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Negotiation</h3>
            <p className="text-gray-700">
              Our skilled negotiators work to find mutually agreeable solutions, avoiding the need for lengthy court battles.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Mediation</h3>
            <p className="text-gray-700">
              We facilitate discussions between parties to reach a resolution that satisfies everyone involved, with minimal conflict.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Arbitration</h3>
            <p className="text-gray-700">
              Our arbitration services provide a binding resolution, often faster and more cost-effective than traditional litigation.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Litigation</h3>
            <p className="text-gray-700">
              When necessary, our attorneys are prepared to aggressively represent your interests in court to achieve a favorable outcome.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Conflict Prevention</h3>
            <p className="text-gray-700">
              We also offer services aimed at preventing disputes before they arise, through sound legal advice and strategic planning.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Settlement Agreements</h3>
            <p className="text-gray-700">
              Crafting legally sound settlement agreements that protect your interests and ensure compliance by all parties involved.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Dispute Resolution Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Expert Guidance</h3>
            <p className="text-gray-700">
              Our attorneys bring years of experience and a deep understanding of the law to every case, ensuring that you receive expert advice and representation.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Cost-Effective Solutions</h3>
            <p className="text-gray-700">
              We strive to resolve disputes in a manner that is both time-efficient and cost-effective, minimizing the financial burden on our clients.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Personalized Attention</h3>
            <p className="text-gray-700">
              We take the time to understand your unique situation and tailor our approach to meet your specific needs and goals.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Confidentiality</h3>
            <p className="text-gray-700">
              We handle all matters with the utmost confidentiality, ensuring that your privacy is protected throughout the process.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Aggressive Representation</h3>
            <p className="text-gray-700">
              When necessary, we are prepared to take your case to court and aggressively advocate for your rights and interests.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-custom-primary mb-4">Proven Track Record</h3>
            <p className="text-gray-700">
              We have a proven track record of successfully resolving disputes for our clients, both in and out of the courtroom.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-custom-primary py-16 px-4 md:px-16 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-custom-secondary p-6 rounded-lg shadow-lg">
            <p className="italic mb-4">"Epiphany Legal Practitioners helped me resolve a business dispute quickly and efficiently. Their team was professional, knowledgeable, and always had my best interests in mind."</p>
            <p className="font-bold">- John D., Business Owner</p>
          </div>
          <div className="bg-custom-secondary p-6 rounded-lg shadow-lg">
            <p className="italic mb-4">"I was impressed with the level of care and attention I received. They explained every step of the process and made sure I was comfortable with the decisions being made."</p>
            <p className="font-bold">- Sarah M., Individual Client</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-white py-16 px-4 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Need Help Resolving a Dispute?</h2>
        <p className="text-lg text-gray-700 mb-12">
          If you're facing a dispute and need professional legal guidance, we're here to help. Contact us today to schedule a consultation and learn more about how we can assist you.
        </p>
        <a href="tel:(314)530-8633" className="bg-custom-primary text-white font-bold py-3 px-8 rounded-full hover:bg-custom-primary-dark transition-colors">Call Us: (314) 530-8633</a>
        <p className="mt-8">or</p>
        <a href="mailto:dmueller@muellerlawgroupstl.com" className="mt-4 inline-block bg-custom-primary text-white font-bold py-3 px-8 rounded-full hover:bg-custom-primary-dark transition-colors">Email Us: dmueller@muellerlawgroupstl.com</a>
      </section>
    </div>
  );
};

export default DisputeResolution;

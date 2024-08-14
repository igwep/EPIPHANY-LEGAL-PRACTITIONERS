import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CaseCount = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-custom-primary mb-8">
          Our Achievements
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="text-center mb-8 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                {({ isVisible }) => (
                  <span>
                    {isVisible ? <CountUp end={500} duration={3} /> : '500'}
                  </span>
                )}
              </VisibilitySensor>
            </h3>
            <p className="text-lg md:text-xl text-gray-700">Cases Handled</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                {({ isVisible }) => (
                  <span>
                    {isVisible ? <CountUp end={450} duration={3} /> : '450'}
                  </span>
                )}
              </VisibilitySensor>
            </h3>
            <p className="text-lg md:text-xl text-gray-700">Cases Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseCount;

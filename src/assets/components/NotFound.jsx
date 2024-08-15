import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-custom-primary mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
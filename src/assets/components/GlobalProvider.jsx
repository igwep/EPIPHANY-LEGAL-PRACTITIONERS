// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';

// Create a Context
export const GlobalContext = createContext();

// Create a Provider Component
// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  // Example of global state
  const [menuModal, setMenuModal] = useState(false)
  
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('here')
  };

  return (
    <GlobalContext.Provider value={{menuModal, handleLinkClick, setMenuModal }}>
      {children}
    </GlobalContext.Provider>
  );
};
import React, { createContext, useState } from 'react';

// Create a Context
export const GlobalContext = createContext();

// Create a Provider Component
export const GlobalProvider = ({ children }) => {
  // Example of global state
  const [menuModal, setMenuModal] = useState(false)
  
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <GlobalContext.Provider value={{menuModal, handleLinkClick, setMenuModal }}>
      {children}
    </GlobalContext.Provider>
  );
};
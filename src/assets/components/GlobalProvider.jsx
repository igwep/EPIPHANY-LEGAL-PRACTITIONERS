// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';
export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
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
import React, { createContext, useState } from 'react';

// Create a Context
export const GlobalContext = createContext();

// Create a Provider Component
export const GlobalProvider = ({ children }) => {
  // Example of global state
  const [menuModal, setMenuModal] = useState(false)
  
  

  return (
    <GlobalContext.Provider value={{menuModal, setMenuModal }}>
      {children}
    </GlobalContext.Provider>
  );
};
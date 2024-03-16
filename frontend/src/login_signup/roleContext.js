import React, { createContext, useState, useContext } from 'react';

// Create a context
const RoleContext = createContext();

// Create a custom hook to use the context
export const useRoleContext = () => useContext(RoleContext);

// Create a context provider component
export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
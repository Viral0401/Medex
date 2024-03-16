import React, { createContext, useState, useContext } from 'react';

// Create a context
const HospitalContext = createContext();

// Create a custom hook to use the context
export const useHospitalContext = () => useContext(HospitalContext);

// Create a context provider component
export const AnalysisProvider = ({ children }) => {
  const [hospital, setHospital] = useState(null);

  return (
    <HospitalContext.Provider value={{ hospital, setHospital }}>
      {children}
    </HospitalContext.Provider>
  );
};
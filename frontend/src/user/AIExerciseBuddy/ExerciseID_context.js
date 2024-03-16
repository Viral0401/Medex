import React, { createContext, useState } from 'react';

export const ExerciseID_context = createContext();

export const ExerciseIdProvider = ({ children }) => {
  const [exerciseId, setExerciseId] = useState(null);

  return (
    <ExerciseID_context.Provider value={{ exerciseId, setExerciseId }}>
      {children}
    </ExerciseID_context.Provider>
  );
};

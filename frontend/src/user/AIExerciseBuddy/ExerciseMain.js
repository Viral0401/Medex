import React, { useContext } from 'react';
import { ExerciseID_context } from './ExerciseID_context';

const ExerciseMain = () => {
  const { exerciseId } = useContext(ExerciseID_context);
  console.log(exerciseId)


  // Get the URL based on the exerciseId
  let exerciseUrl
  if (exerciseId === 1) {
    exerciseUrl = 'https://bicep-curl-counter.streamlit.app/?embed=true';
  } else if (exerciseId === 2) {
    exerciseUrl = 'https://bicep-curl-counter.streamlit.app/?embed=true';
  } else if (exerciseId === 3) {
    exerciseUrl = 'https://bicep-curl-counter.streamlit.app/?embed=true';
  }

  return (
    <div className='h-[100%]'>
      {exerciseUrl && (
        <iframe
          title={`Exercise: ${exerciseId}`}
          src={exerciseUrl}
          width="100%"
          style={{height:"100vh"}}
          allow="camera"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default ExerciseMain;

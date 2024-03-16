import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { AnalysisProvider } from './user/Donor/hospitalContext';
import { RoleProvider } from './login_signup/roleContext';
import { ExerciseIdProvider } from './user/AIExerciseBuddy/ExerciseID_context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RoleProvider>
      <AnalysisProvider>
        <ExerciseIdProvider>
          <App />
        </ExerciseIdProvider>
      </AnalysisProvider>
    </RoleProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

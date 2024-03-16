import React, { useState } from 'react';
import { UserAuth } from '../../../FirebaseAuthContext/AuthContext';
import Overview from './Overview'; // Import all tab components
import Medical from './Medical';
import Consent from './Consent';

const PatientProfile = () => {
  const { user } = UserAuth();

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('Overview');

  // Function to change the active tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Define the content of each tab based on the activeTab state
  const tabContents = {
    Overview: <Overview />,
    Medical: <Medical />,
    Consent: <Consent />,
  };

  return (
    <div>
      <div className='text-2xl px-10 pt-5 flex items-center justify-between'>
        <p className='font-semibold tracking-widest text-3xl'>Profile Page</p>
        <p>{user && user.email}</p>  
      </div>

      {/* Tabs for displaying user information */}
      <div className='mb-10 mt-5 px-10'>
        <ul className='flex items-center justify-around text-lg border-b'>
          {Object.keys(tabContents).map((tabName) => (
            <li
              key={tabName}
              onClick={() => handleTabClick(tabName)}
              className={`py-2 cursor-pointer ${
                activeTab === tabName ? 'border-b border-black' : 'border-black hover:border-b'
              }`}
            >
              {tabName}
            </li>
          ))}
        </ul>
      </div>

      {/* Display the selected tab content */}
      {tabContents[activeTab]}
    </div>
  );
}

export default PatientProfile;

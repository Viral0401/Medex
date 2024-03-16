import React, { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const VerificationCard = ({ donorId, requestId, age, blood, authStatus }) => {
  const [verified, setVerified] = useState(false);

  async function verifyRequest() {
    try {
      // Update the authentication status in the request document to true.
      const requestDocRef = doc(db, 'Donors', donorId, 'Requests', requestId);
      await updateDoc(requestDocRef, { auth: true });

      // Update the local state to indicate verification.
      setVerified(true);
      console.log('Request verified successfully:', requestId);
    } catch (error) {
      console.error('Error verifying request:', error);
    }
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
      <div className="flex flex-col items-center py-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Donor ID: {donorId}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Age: {age}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Blood Type: {blood}
        </span>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Authentication Status: {authStatus ? 'Authenticated' : 'Not Authenticated'}
        </p>
        <div className="flex mt-4 space-x-3 md:mt-6">
          {!verified && !authStatus && (
            <button
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={verifyRequest}
            >
              Verify Request
            </button>
          )}
          {verified && (
            <p className="mb-1 text-lg font-medium text-green-600 dark:text-green-400">
              Verified
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerificationCard;

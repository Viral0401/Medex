import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const DonorCard = ({id, organ, authStatus }) => {

    const [requestSent, setRequestSent] = useState(false);

    async function sendRequest() {
        try {
            // Create a new request document
            const requestRef = await addDoc(collection(db, 'Donors', id, 'Requests'), {
                age: '34', // Fill in the age value
                blood: 'B+', // Fill in the blood type
                // Add other fields as needed
                auth: false, // Initially set as false
            });

            // Update the state to indicate that the request has been sent
            setRequestSent(true);
            console.log('Request sent successfully:', requestRef.id);
        } catch (error) {
            console.error('Error sending request:', error);
        }
    }

  return (
    <div className="px-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
        <div className="flex flex-col items-center py-10">

            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Hospital ID: {id}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Organ Type: {organ}</span>
            <p className="text-sm text-gray-500 dark:text-gray-400">Authentication Status: {authStatus ? 'Authenticated' : 'Not Authenticated'}</p>
            <div className="flex mt-4 space-x-3 md:mt-6">
                {!requestSent && (
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={sendRequest}
                    >Send Request For Verification</a>
                )}
                {requestSent && (
                    <p className='mb-1 text-lg font-medium text-gray-900 dark:text-white'>Request Sent</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default DonorCard

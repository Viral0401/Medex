import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from '../firebase';
import VerificationCard from './VerificationCard';

const Verification = () => {
  const [verificationData, setVerificationData] = useState([]);

  async function fetchVerificationData() {
    try {
      // Reference to the "Donors" collection.
      const donorsCollectionRef = collection(db, 'Donors');

      // Query to get all documents in the "Donors" collection.
      const querySnapshot = await getDocs(donorsCollectionRef);

      // Process each donor document.
      const verificationDataArray = [];

      for (const docSnapshot of querySnapshot.docs) {
        // Reference to the "Requests" subcollection inside the donor document.
        const requestsSubcollectionRef = collection(doc(db, 'Donors', docSnapshot.id), 'Requests');
        const requestsQuerySnapshot = await getDocs(requestsSubcollectionRef);

        requestsQuerySnapshot.forEach((requestDoc) => {
          const requestData = requestDoc.data();
          verificationDataArray.push({
            donorId: docSnapshot.id,
            requestId: requestDoc.id,
            age: requestData.age, // Update with the actual field name
            blood: requestData.blood, // Update with the actual field name
            authStatus: requestData.auth, // Update with the actual field name
          });
        });
      }

      setVerificationData(verificationDataArray);
    } catch (error) {
      console.error('Error fetching verification data:', error);
      setVerificationData([]);
    }
  }

  useEffect(() => {
    fetchVerificationData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <p className="text-4xl px-10 pt-10">Verification for Donor Requests</p>

      <div className='flex items-center justify-around p-10 flex-wrap my-2'>
        {verificationData.map((data, key) => (
          <div key={key} className='my-3'>
            <VerificationCard
              donorId={data.donorId}
              requestId={data.requestId}
              age={data.age}
              blood={data.blood}
              authStatus={data.authStatus}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Verification;
 
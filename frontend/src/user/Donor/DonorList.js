import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHospitalContext } from './hospitalContext';
import DonorCard from './DonorCard';
import { collection, getDocs, doc, query } from "firebase/firestore";
import { db } from '../../firebase';

const DonorList = () => {
    const { hospital } = useHospitalContext();
    const [resultData, setResultData] = useState([]);

    async function fetchAllDonors() {
        try {
            // Reference to the "Donors" collection.
            const donorsCollectionRef = collection(db, 'Donors');

            // Query to get all documents in the "Donors" collection.
            const querySnapshot = await getDocs(donorsCollectionRef);

            // Process each document.
            const donorsData = [];
            for (const docSnapshot of querySnapshot.docs) {
                const donorData = docSnapshot.data();

                // Reference to the "Requests" subcollection inside the document.
                const requestsSubcollectionRef = collection(doc(db, 'Donors', docSnapshot.id), 'Requests');
                const requestsQuerySnapshot = await getDocs(requestsSubcollectionRef);
                const requestsData = requestsQuerySnapshot.docs.map((requestDoc) => requestDoc.data());

                donorsData.push({
                    donor: docSnapshot.id,
                    ...donorData,
                    requests: requestsData,
                });
            }

            setResultData(donorsData);
        } catch (error) {
            console.error("Error fetching data:", error);
            setResultData([]);
        }
    }

    useEffect(() => {
        fetchAllDonors();
    }, []); // Empty dependency array ensures the effect runs only once

    resultData.forEach(item => {
        item.requests.forEach(request => {
            console.log(request.auth);
        });
    });

    return (
        <div>
            <p className='text-4xl px-10 pt-10'>Available Donors at: &nbsp; <span className='font-semibold'>{hospital}</span></p>

            <div className='flex items-center justify-around'>
                <div className='p-10'>
                    {resultData.map((data, key) => {
                        return <div key={key}><DonorCard id={data.DonorID} organ={data.Organ} authStatus={data.requests.Auth}/></div>
                    })}
                </div>

                <div className=''>
                    <div className="px-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                        <div className="flex flex-col items-center py-10">

                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Hospital ID: JGkW3XM2n3k8EC0xBZMw</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Organ Type: Liver</span>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Authentication Status: Authenticated</p>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                
                                    <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                                    ><Link to="/meeting">Video Chat with the Donor</Link></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonorList;

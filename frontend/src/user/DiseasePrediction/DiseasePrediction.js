import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Input, Row } from 'reactstrap';
import { AiOutlineRight, AiOutlineLeft, AiFillDelete } from 'react-icons/ai';

const symptomsList = [
  'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_ urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic _patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload.1', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze'
];

const DiseasePrediction = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [commonSymptoms, setCommonSymptoms] = useState([
    'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain', 'stomach_pain', 'acidity', 
  ]);
  const [result, setResult] = useState({ predictions: { final_prediction: '' }, response: '' });

  const handleNextPage = async () => {
    // Prepare the symptoms string for the POST request
    const formattedSymptoms = selectedSymptoms.map(symptom => 
      symptom.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    );
    const symptomsString = formattedSymptoms.join(',');
    console.log(symptomsString);
  
    // Make a POST request to the backend endpoint
    try {
      const response = await fetch('http://127.0.0.1:5000/final-medic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: symptomsString }),
      });
  
      if (response.ok) {
        const resultData = await response.json();
        console.log(resultData);

        // Set the result state
        setResult(resultData);
  
        // Handle the result, you might want to store it in state or navigate to another page
      } else {
        console.error('Error in response');
      }
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  
    // Move to the next page
    setCurrentPage((prevPage) => prevPage + 1);
  };
  

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectSymptom = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
    setSearchTerm('');
  };

  const handleRemoveSymptom = (symptom) => {
    setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
  };

  const handleAddCommonSymptom = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };
  console.log(selectedSymptoms);

  return (
    <div>
      {/* Page 1 */}
      {currentPage === 1 && (
        <Row className='w-100 h-[78vh]'>
          <Col md={4}>
            {/* Page 1 Content */}
            <Card className='h-100'>
              <CardBody>
                <h2 className='my-2 py-6 text-4xl text-center bg-gradient-to-r from-blue-600 to-blue-200 text-white font-extrabold'>Predict Your Disease</h2>
                <div className='relative flex items-center justify-center my-7'>
                  <Input
                    type='text'
                    placeholder='Enter the symptoms you are facing...'
                    className='border p-4 rounded w-[85%]'
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {searchTerm && (
                    <ul className='absolute left-2 right-0 mt-24 ml-24 bg-white border rounded shadow-md w-[85%]'>
                      {symptomsList
                        .filter((symptom) =>
                          symptom.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((filteredSymptom) => (
                          <li
                            key={filteredSymptom}
                            className='p-2 cursor-pointer hover:bg-gray-100'
                            onClick={() => handleSelectSymptom(filteredSymptom)}
                          >
                            {filteredSymptom}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
                {/* Selected Symptoms */}
                <h1 className='mx-16 text-2xl font-bold my-3'>Selected Symptoms</h1>
                <div className='mx-16 my-5 flex items-center justify-start gap-3 flex-wrap'>
                  
                  {selectedSymptoms.map((symptom) => (
                    <Button
                      key={symptom}
                      color='primary'
                      className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2 mb-2 shadow-xl inset-3  flex items-center justify-around gap-2'
                      onClick={() => handleRemoveSymptom(symptom)}
                    >
                      {symptom} <AiFillDelete size={15} />
                    </Button>
                  ))}
                </div>
                {/* Common Symptoms */}
                <h1 className='mx-16 text-2xl font-bold my-3'>Common Symptoms</h1>
                <div className='mx-16 my-5 flex items-center justify-start gap-3 flex-wrap'>
                  
                  {commonSymptoms.map((symptom) => (
                    <Button
                      key={symptom}
                      color='secondary'
                      className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2 mb-2 shadow-xl inset-3  flex items-center justify-around gap-2'
                      onClick={() => handleAddCommonSymptom(symptom)}
                    >
                      {symptom}
                    </Button>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}

      {/* Page 2 */}
      {currentPage === 2 && (
        <Row className='flex items-center justify-around w-[90%] h-[75vh] mx-10'>
          <Col className='w-[40%] h-full'>
            <div className='h-full shadow-2xl rounded-xl my-2 py-6 text-4xl text-center bg-gradient-to-r from-blue-600 to-blue-200 text-white font-extrabold'>
              <h1 className='text-white text-4xl text-center'>Analyzed Disease</h1>
              <h3 className='text-white text-4xl text-center mt-36'>{result.predictions.final_prediction}</h3>
            </div>
            {/* Add your content for the second page here */}
          </Col>

          <Col className='w-[40%] h-full'>
            <div className='h-full shadow-2xl rounded-xl my-2 py-6  text-center bg-gradient-to-r text-[#090909] font-extrabold'>
              <h1 className='text-4xl'>Medicine Suggestions</h1>
              <ul className='text-xl text-[#090909] mt-5'>
                {result.response.split('\n').map((medicine, index) => (
                  <li key={index}>{medicine}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      )}

      {/* Navigation Buttons */}
      <Row className='w-[100%] mt-5'>
        <Col md={12} className='d-flex align-items-center justify-content-center'>
          <Card className='d-flex align-items-center justify-content-between w-75'>
            <CardBody className='w-full flex items-center justify-around '>
              {currentPage > 1 && (
                <div className='flex items-center justify-around w-full'>
                  <Button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2 mb-2 shadow-xl inset-3  flex items-center justify-around gap-2' onClick={handlePrevPage}>
                    <AiOutlineLeft /> Previous
                  </Button>
                  <a href="/meeting"><Button className='bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2 mb-2 shadow-xl inset-3  flex items-center justify-around gap-2' onClick={handlePrevPage}>
                    Consult Doctor
                  </Button></a>
                </div>
              )}
              {currentPage < 2 && (
                <Button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-2 mb-2 shadow-xl inset-3  flex items-center justify-around gap-2' onClick={handleNextPage}>
                  Next <AiOutlineRight />
                </Button>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DiseasePrediction;

import React, {useState, useEffect} from 'react';
import Sidebar from './components/Sidebar';
import Login from './login_signup/Login';
import Signup from './login_signup/Signup';
import Community from './user/CommunitySection/Community';
import Education from './user/Education/Education';
import BlogsPage from './user/Education/Blog/BlogsPage';
import VideosPage from './user/Education/Videos/VideosPage';
import Insurance from './user/Insurance/Insurance';
import GovScehems from './user/GovSchemes/GovScehems';
import PatientProfile from './user/UserMain/PatientProfile/PatientProfile';
import FindDonor from './user/Donor/FindDonor';
import DonorList from './user/Donor/DonorList';
import {Routes, Route} from 'react-router-dom'
import { AuthContextProvider } from './FirebaseAuthContext/AuthContext';
import Fundraiser from './user/Fundraiser/Fundraiser';
import DonateOrgan from './DonorSide/DonateOrgan';
import Analytics from './admin/Analytics';
import Verification from './admin/Verification';
import VideoCall from './user/Donor/VideoCall';
import Exercises from './user/AIExerciseBuddy/Exercises'
import ExerciseMain from './user/AIExerciseBuddy/ExerciseMain';
import DiseasePrediction from './user/DiseasePrediction/DiseasePrediction';
import MentalHealth from './user/MentalHealth/MentalHealth';
import Chatbot from './user/MentalHealth/Chatbot';
import LiveTherapy from './user/MentalHealth/LiveTherapy';


function App() {
  const [patient, setPatient] = useState(false);
  // const [donor, setDonor] = useState(false);
  // useEffect(()=>{}, [me]) 
  useEffect(()=>{}, [patient])  

  return (
    <div className=" h-full w-full scrollbar-hide">
      <AuthContextProvider>
      {patient && <Sidebar setPatient={setPatient} />}
      <Routes>
        <Route path='/login' element={<Login setPatient={setPatient}/>} />
        <Route path='/signup' element={<Signup setPatient={setPatient}/>} />
        <Route path='/community' element={<Community />} />
        <Route path='/education' element={<Education />} />
        <Route path='/blog' element={<BlogsPage />} />
        <Route path='/edvideo' element={<VideosPage />} />
        <Route path='/insurance' element={<Insurance />} />
        <Route path='/schemes' element={<GovScehems />} />
        <Route path='/patientprofile' element={<PatientProfile />} />
        <Route path='/finddonor' element={<FindDonor />} />
        <Route path='/donorlist' element={<DonorList />} />
        <Route path='/fundraiser' element={<Fundraiser />} />
        <Route path='/donateorgan' element={<DonateOrgan />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/verification' element={<Verification />} />
        <Route path='/meeting' element={<VideoCall />} />
        <Route path='/exercise' element={<Exercises />} />
        <Route path='/exercise/:exerciseId' element={<ExerciseMain />} />
        <Route path='/disease-prediction' element={<DiseasePrediction />} />
        <Route path='/mental-health' element={<MentalHealth/>} />
        <Route path='/mental-health/mh-chatbot' element={<Chatbot/>} />
        <Route path='/mental-health/therapy' element={<LiveTherapy/>} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

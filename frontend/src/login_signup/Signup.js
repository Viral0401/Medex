import React, { useState } from "react";
import Typical from 'react-typical'
import logo from './intellihealthnobg.png'
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom'
// import { createUserWithEmailAndPassword } from '@firebase/auth'
import { UserAuth } from '../FirebaseAuthContext/AuthContext'
// import axios from "axios";
import { useRoleContext } from './roleContext'
import Tesseract from 'tesseract.js';


const Signup = ({setPatient}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {role, setRole} = useRoleContext();
  const [error, setError] = useState('')
  const [image, setImage] = useState(null);
  const [recognizedText, setRecognizedText] = useState('');

  const {createUser} = UserAuth();

  const navigate = useNavigate()

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  const handleTextRecognition = async () => {
        if (!image) {
        setError('Please select an image to recognize text from.');
        return;
        }

        setError('');

        try {
        const { data } = await Tesseract.recognize(image, 'eng');
        setRecognizedText(data.text);
        console.log(data.text)
        } catch (err) {
        console.error('Error recognizing text:', err);
        setError('Error recognizing text. Please try again.');
        }
    };
    console.log(recognizedText)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    handleTextRecognition();
    try {
      await createUser(email, password);
      setPatient(true)
      navigate('/community')
    } 
    catch (e) {
      setError(e.message);
      console.log(error);
    }

  };



  return (
    <div className="h-screen w-screen overflow-y-hidden" style={{ backgroundImage: `url("https://kpmg.com/content/dam/kpmg/in/images/2022/05/top-15-priorities-transformation-of-indian-healthcare-2024-healthcare-agenda.jpg")`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>

        <div className="h-screen w-[45%] bg-white flex flex-col item-center justify-center">

            <img src={logo} className="ml-6" style={{height:"auto", width:"50%"}} alt="intellihealth logo"/>
            
            <div className="flex flex-col item-center justify-center w-full p-8">
                <div>
                    {/* <h3 className="text-2xl mb-5">    
                        <Typical
                            steps={
                                [
                                    'Welcome to IntelliHealth! 😄', 7000, 
                                    'इंटेलीहेल्थ में आपका स्वागत है! 😄', 7000,
                                ]
                            }
                            loop={Infinity}
                            wrapper="p"
                        />
                    </h3> */}

                    <h1 className="text-4xl mt-5 mb-3 font-semibold tracking-widest ">Sign Up</h1>

                    <h4 className="font-semibold text-[#c0c0c0] cursor-pointer">Already Signed Up? <span className="text-[#8D2FFF]"><Link to="/login">Login</Link></span></h4>

                </div>

                <div className="w-[100%] mt-5">
                    <p className="font-medium">Email</p>
                    <div className="flex items-center border-b-2 border-ourmedpurp ">
                    <input className="appearance-none bg-transparent border-none w-full text-subtext p-1 leading-tight focus:outline-none h-10"  type="text" placeholder="Enter your email address" name="email" value={email}
                        onChange={(e) => {
                        setEmail(e.target.value);
                        }}
                    />
                    </div>
                    <p className="font-medium mt-5">Password</p>
                    <div className="flex items-center border-b-2 border-ourmedpurp ">
                    <input
                        onChange={(e) => {
                        setPassword(e.target.value);
                        }} value={password} className="appearance-none bg-none border-none w-full text-subtext p-1 leading-tight focus:outline-none h-10"
                        type="password" placeholder="Enter your password" name="password"
                    />
                    </div>
                    <div>
                    <label htmlFor="type" className="font-medium mt-5 block mb-1 text-sm">
                        Role:
                    </label>
                    <select type="text" name="role" id="role" value={role}
                        onChange={(e) => {
                        setRole(e.target.value);
                        }}
                        className="border-b-2 text-gray-900 text-sm rounded-sm focus:outline-none block w-full p-2 bg-[#F0F0F0] placeholder-[#F0F0F0] h-10"
                        required
                    >
                        <option defaultValue>Choose a type</option>
                        <option value="patient">Patient</option>
                        <option value="donor">Donor</option>
                        <option value="admin">Admin</option>
                    </select>
                    <div className="mt-5">
                        <label htmlFor="imageInput" className="font-semibold">
                        Scan Aadhar Automatically Using OCR:
                        </label>
                        <input
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        onChange={handleFileUpload}
                        />
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                    </div>
                    <div className="mt-8">
                        <Link to="/community">
                            <Button 
                            onClick={handleSubmit}
                            variant="contained" className="w-full rounded-full" style={{padding:"10px"}}>Sign Up Using Aadhar Card
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
        
    </div>
  );
};

export default Signup;

//   const url = "http://localhost:5000/";

//   const loginUser = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(url + `login${role}`, { email, password });
//       const token = res.data.authToken;
//       localStorage.setItem("token", token);
//       localStorage.setItem("userType", role);
//       if (role === "user") {
//         setMe(true);
//         navigate("/pension");
//       } else if (role === "helper") {
//         setMe(true);
//         navigate("/postjobs");
//       }
//     } catch (err) {
//       setEmail("");
//       setPassword("");
//       alert("Error occured while logging in");
//       console.log(err);
//     }
//   };

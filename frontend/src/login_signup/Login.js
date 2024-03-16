import React, { useState, useRef } from "react";
import Typical from 'react-typical'
import logo from './intellihealthnobg.png'
import Button from '@mui/material/Button';
// import { redirect, useNavigate } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../FirebaseAuthContext/AuthContext';
import { useRoleContext } from './roleContext'
import Webcam from 'react-webcam';
import axios from 'axios';


const Login = ({setPatient}) => {
//   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {role, setRole} = useRoleContext();

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [webcamActivated, setWebcamActivated] = useState(false);
  const activateWebcam = () => {
    setWebcamActivated(true);
  };

  const capturePhoto = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);

    // // Send the captured image as a POST request
    // try {
    //   const response = await axios.post('/upload', { image: imageSrc });
    //   console.log('Image uploaded successfully:', response.data);
    // } catch (error) {
    //   console.error('Error sending image:', error);
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      setPatient(true)
      navigate('/community')
    } catch (e) {
      setError(e.message)
      console.log(error)
    }
  };

  return (
    <div className="h-screen w-screen overflow-y-hidden " style={{ backgroundImage: `url("https://kpmg.com/content/dam/kpmg/in/images/2022/05/top-15-priorities-transformation-of-indian-healthcare-2024-healthcare-agenda.jpg")`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>

        <div className="h-screen w-[45%] bg-white flex flex-col item-center justify-center">

            <img src={logo} className="ml-6" style={{height:"auto", width:"50%"}} alt="intellihealt logo"/>
            
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

                    <h1 className="text-4xl mt-5 mb-3 font-semibold tracking-widest ">Login</h1>

                    <h4 className="font-semibold text-[#c0c0c0] cursor-pointer">Haven't Signed Up? <span className="text-[#8D2FFF]"><Link to="/signup">Create Account</Link></span></h4>
                </div>

                <div className="w-[100%] mt-5">
                    <p className="font-medium">Email</p>
                    <div className="flex items-center border-b-2 border-ourmedpurp ">
                    <input className="appearance-none bg-transparent border-none w-full text-subtext p-1 leading-tight focus:outline-none h-10"    type="text"
                        placeholder="Enter your email address" name="email" value={email}
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
                        }} value={password} className="appearance-none bg-transparent border-none w-full text-subtext p-1 leading-tight focus:outline-none h-10"
                        type="password" placeholder="Enter your password" name="password"
                    />
                    </div>
                    <div>
                        <label
                            htmlFor="type"
                            className="font-medium mt-5 block mb-1 text-sm text-neutralSecondary"
                        >
                            Role:
                        </label>
                        <select type="text" name="role" id="role" value={role}
                            onChange={(e) => {
                            setRole(e.target.value);
                            }}
                            className="mb-2  border-b-2 text-gray-900 text-sm rounded-sm focus:outline-none focus:border-b-buttons block w-full p-2 bg-[#F0F0F0] placeholder-[#F0F0F0] h-10"
                            required
                        >
                            <option defaultValue>Choose a type</option>
                            <option value="patient">Patient</option>
                            <option value="donor">Donor</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {!webcamActivated ? (
                        <Button onClick={activateWebcam} className="">Activate Webcam For Authentication &nbsp; &nbsp; (important!!)</Button>
                    ) : (
                        <div className="flex items-center justify-around mt-3">
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            style={{ width: '100%', maxWidth: '100px' }}
                        />
                        {capturedImage && <img src={capturedImage} alt="Captured Photo" style={{maxWidth:"100px"}}/>}
                        <Button onClick={capturePhoto}>Capture Photo</Button>
                        </div>
                    )}

                    <div className="mt-3">
                    <Link to="/community">
                        <Button type="submit" variant="contained"
                        onClick={handleSubmit}
                            className="flex-shrink-0 text-sm text-white py-3 px-1 rounded-lg w-full font-medium bg-[#279EFF]"
                        >
                            Sign In
                        </Button>
                    </Link>
                    </div>
                </div>
            </div>

        </div>

    </div>
  );
};

export default Login;


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
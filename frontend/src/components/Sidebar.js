import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, IconButton} from "@mui/material";
import InputBase from "@mui/material/InputBase";
//icons
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import MicIcon from '@mui/icons-material/Mic';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
//image
import logo from "../login_signup/intellihealthnobg.png"
import { RiMentalHealthLine } from "react-icons/ri";

import { UserAuth } from '../FirebaseAuthContext/AuthContext';
// import Popup from 'reactjs-popup'
import SpeechRecognition, {
    useSpeechRecognition,
  } from "react-speech-recognition";

// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRoleContext } from '../login_signup/roleContext'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#15181C',
  border: '1px solid ',
  boxShadow: 24,
  borderRadius: 10,
  color:'white',
  px: 4,
  py: 5
};




export default function Sidebar({setPatient}) {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const {role} = useRoleContext();

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {logout} = UserAuth()
  const [error, setError] = useState()

  const handleLogout = async (e) => {
    e.preventDefault();
    setError('');
    try {
        await logout();
        setPatient(false)
        setAnchorEl(null);
        navigate('/login')
      } 
      catch (e) {
        setError(e.message);
        console.log(error);
      }

  }

  const [open, setOpen] = useState(false);
  const handleVoiceNavOpen = () => setOpen(true);
  const handleVoiceNavClose = () => setOpen(false);

  const [redirectUrl, setRedirectUrl] = useState("");
    const commands = [
        {
        command: ["Go to * page", "Go to *", "Open * page", "Open *"],
        // callback: (redirectPage) => setRedirectUrl(redirectPage),
        callback: (redirectPage) => setRedirectUrl(encodeURIComponent(redirectPage)),
        },
    ];
    const { transcript } = useSpeechRecognition({ commands });

    useEffect(() => {
        if (redirectUrl) {
            navigate(`/${redirectUrl}`);
            setRedirectUrl(""); // Clear the redirectUrl after navigation
        }
    }, [redirectUrl, navigate])

    // const pages = ["community", "education", "blogs", "videos", "insurance", "schemes" ];
    // const urls = {
    //     community: "/community",
    //     education: "/education",
    //     blogs: "/blog",
    //     videos: "/edvideo",
    //     insurance: "/insurance",
    //     schemes: "/schemes",
    // };

    // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    //     return null;
    // }

  
    const list = () => {
        if (role === 'patient' || role === 'donor') {
          return (
            <div
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              className='p-5  h-full'
              style={{ maxWidth: '300px' }}
            >
              <img src={logo} alt="intellihealth logo" className='w-[80%] h-auto'/>
              <List className='w-full'>
                <ListItem className='my-2'>
                  <Link to="/community">
                    <Button style={{ color: 'black' }}>
                      <HomeIcon className='mr-3'/>Community
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className='my-2'>
                  <Link to="/disease-prediction">
                    <Button style={{ color: 'black' }}>
                      <OnlinePredictionIcon className='mr-3'/>Disease Prediction
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className='my-2'>
                  <Link to="/exercise">
                    <Button style={{ color: 'black' }}>
                      <FitnessCenterIcon className='mr-3'/>AI Exercise Buddy
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className='my-2'>
                  <Link to="/mental-health">
                    <Button style={{ color: 'black' }}>
                      <RiMentalHealthLine size={30} className='mr-3'/>Mental Health
                    </Button>
                  </Link>
                </ListItem>
                {role === 'patient' ? (
                  <ListItem className='my-2'>
                    <Link to="/finddonor">
                      <Button style={{ color: 'black' }}>
                        <CalendarTodayIcon className='mr-3'/>Find a Donor
                      </Button>
                    </Link>
                  </ListItem>
                ) : (
                  <ListItem className='my-2'>
                    <Link to="/donateorgan">
                        <Button style={{ color: 'black' }}>
                        <CalendarTodayIcon className='mr-3'/>Donate
                        </Button>
                    </Link>
                  </ListItem>
                )}
                <ListItem className='my-2'>
                  <Link to="/education">
                    <Button style={{ color: 'black' }}>
                      <CastForEducationIcon className='mr-3'/>Education
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className='my-2'>
                  <Link to="/insurance">
                    <Button style={{ color: 'black' }}>
                      <AccountBalanceIcon className='mr-3'/>Insurance
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className='my-2'>
                  <Link to="/schemes">   
                    <Button style={{ color: 'black' }}>
                      <GavelIcon className='mr-3'/>Gov. Schemes
                    </Button>
                  </Link>
                </ListItem>
                <ListItem className='my-2'>
                  <Link to="/fundraiser">   
                    <Button style={{ color: 'black' }}>
                      <VolunteerActivismIcon className='mr-3'/>Fundraiser
                    </Button>
                  </Link>
                </ListItem>
              </List>
            </div>
          );
        }else{
            return(
                <div
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              className='py-5 px-2 h-full'
              style={{ maxWidth: '300px' }}
            >
              <img src={logo} alt="intellihealth logo" className='w-[80%] h-auto'/>
                <List>
                    <ListItem className='my-5'>
                        <Link to="/community">
                            <Button style={{ color: 'black' }}>
                            <HomeIcon className='mr-3'/>Community
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className='my-5'>
                        <Link to="/analytics">   
                            <Button style={{ color: 'black' }}>
                              <AnalyticsIcon className='mr-3'/>Analytics
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className='my-5'>
                        <Link to="/verification">   
                            <Button style={{ color: 'black' }}>
                              <DomainVerificationIcon className='mr-3'/>Request Verification
                            </Button>
                        </Link>
                    </ListItem>
                </List>
                </div>
            )
        }
      };
      
      

  return (
    <div className='w-full shadow-lg'>
      <Box display="flex" justifyContent="space-between" p={2}>
            <div className='flex items-center justify-center'>
                <Button onClick={toggleDrawer(true)}>
                    <MenuIcon color='black'/>
                </Button>
                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={toggleDrawer(false)}
                
                >
                    {list()}
                </Drawer>
                <img src={logo} alt="intellihealth logo" className='h-[40px] w-[140px]'/>
            </div>

            {/* ICONS */}
            <Box display="flex" gap="8px">
                {/* SEARCH BAR */}
                <Box
                    display="flex"
                    border="1px solid black"
                    borderRadius="8px"
                    padding="2px"
                >
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>

                    <IconButton onClick={handleVoiceNavOpen} type="button" sx={{ p: 1 }}>
                        <MicIcon />
                    </IconButton>

                    <Modal
                        open={open}
                        onClose={handleVoiceNavClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <h1 className=" text-center text-2xl mb-10">Voice Assisted Tab Navigation</h1>
                            <p className="my-16">Transcript: &nbsp;&nbsp;
                            <span className="text-white">{transcript}</span> </p>
                            <div className=" flex items-center justify-center">
                            <Button variant="contained" className="bg-[#4961e7] transition duration-300 hover:text-black px-5 py-2 rounded-full "
                            onClick={SpeechRecognition.startListening}>Start</Button>
                            </div>
                        </Box>
                    </Modal>

                    
                </Box>


                <IconButton>
                <NotificationsOutlinedIcon />
                </IconButton>

                <IconButton>
                <SettingsOutlinedIcon />
                </IconButton>

                {/* Profile dropdown */}
                <div>
                    
                    <IconButton onClick={handleClick}>
                        <PersonOutlinedIcon />
                    </IconButton>
                    
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link to="/patientprofile"><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                        <MenuItem onClick={handleClose}>My Account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
                
            </Box>
        </Box>
    </div>
  );
}

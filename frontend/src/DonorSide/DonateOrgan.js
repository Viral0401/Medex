import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0.5px solid ',
    boxShadow: 48,
    borderRadius:7,
    p: 2,
  };

const DonateOrgan = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [gender, setGender] = useState(null);

    const handleChange = (e) => {
        setGender(e.target.value);
        
    };
    console.log(gender)

  return (
    <div className='px-10 py-5'>
        <Button onClick={handleOpen}>TERMS AND CONDITIONS / CONSENT</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <div className="flex flex-col items-center justify-center ">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Accept Terms and Conditions</h2>
                    <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" checked={isChecked} onChange={handleCheckboxChange}
                    />
                    <span className="text-gray-700">
                        I agree to the following:
                        <ul className="list-disc ml-6">
                        <li>Terms and Conditions In the Consent Part of the Profile</li>
                        <li>Privacy Policy</li>
                        <li>Indian Laws for Transplant</li>
                        </ul>
                    </span>
                    </label>
                </div>
            </div>
            </Box>
        </Modal>
        <p className='text-2xl font-semibold tracking-wide'>Please enter the required details below to initiate the donor process</p>

        <div className='px-10 flex items-center justify-around py-10'>

            <div className='flex flex-col items-center justify-around gap-16'>
                <TextField id="outlined-basic" label="First Name" variant="outlined" /> 
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <input value={selectedDate} onClick={handleChange} type="date" className='py-4 px-9 rounded-md border border-[#c4c4c4]'/>
            </div>
            <div className='flex flex-col items-center justify-around gap-16'>
                <TextField id="outlined-basic" label="Last Name" variant="outlined" /> 
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" type="number" />
                <FormControl sx={{ minWidth: 225 }}>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                    onChange={handleChange}
                    >
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    <MenuItem value={'rather_not_say'}>Rather Not Say</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className='flex flex-col items-center justify-around gap-16'>
                {/*    - Address:
                        - City:
                        - State/Province:
                        - Zip/Postal Code:
                        - Preferred Contact Method (Phone/Email):
                */}
                <TextField id="outlined-basic" label="Address Line 1" variant="outlined" />
                <TextField id="outlined-basic" label="Address Line 2" variant="outlined" />
                <TextField id="outlined-basic" label="State/Province" variant="outlined" />
            </div>

            <div className='flex flex-col items-start justify-start gap-16'>

                <TextField id="outlined-basic" label="Zip/Postal Code" type='number' variant="outlined" />
                <FormControl sx={{ minWidth: 225 }}>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={gender}
                    label="Gender"
                    // onChange={handleChange}
                    >
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    <MenuItem value={'rather_not_say'}>Rather Not Say</MenuItem>
                    </Select>
                </FormControl>

            </div>
        </div>

        <div className='w-full flex items-center justify-center mt-10'>  
            <Button style={{paddingLeft:"36px", paddingRight:"36px", paddingTop:"12px", paddingBottom:"12px"}}
            className=' text-white text-xl font-bold flex items-center justify-center gap-5  group ' variant='contained'>

            Save Details

            </Button>
        </div>
    </div>
  )
}

export default DonateOrgan
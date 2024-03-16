import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const Overview = () => {

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
    <div className='justify-center'>
        <div className='px-10 flex items-center justify-around'>

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

export default Overview
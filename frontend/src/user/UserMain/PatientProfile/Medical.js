import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const Medical = () => {


  return (
    <div className='justify-center'>
        <div className='px-10 flex items-center justify-around'>

            <div className='flex flex-col items-center justify-around gap-16'>
                <TextField sx={{ minWidth: 350 }} id="outlined-basic" label="Organ Needed" variant="outlined" /> 
                <TextField sx={{ minWidth: 350 }} id="outlined-basic" label="Current Medical Condition" variant="outlined" />
                <TextField sx={{ minWidth: 350 }} id="outlined-basic" label="Name of Attending Physician" variant="outlined" />
            </div>
            <div className='flex flex-col items-center justify-around gap-16'>
                <TextField sx={{ minWidth: 350 }} id="outlined-basic" label="Hospital/Healthcare Facility Name" variant="outlined" /> 
                <TextField sx={{ minWidth: 350 }} id="outlined-basic" label="Any specific preferences or requirements for a potential donor?" variant="outlined" type="number" />
                <FormControl sx={{ minWidth: 350 }}>
                    <InputLabel id="demo-simple-select-label">Are you registered as an organ recipient with any other organizations?</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={gender}
                    label="Are you registered as an organ recipient with any other organizations?"
                    // onChange={handleChange}
                    >
                      <MenuItem value={'yes'}>Yes</MenuItem>
                      <MenuItem value={'no'}>No</MenuItem>
                    </Select>
                </FormControl>
            </div>


            <div className='flex flex-col items-start justify-start gap-16'>

                <FormControl sx={{ minWidth: 350 }}>
                    <InputLabel id="demo-simple-select-label">Have you received any organ transplants in the past?</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={gender}
                    label="Have you received any organ transplants in the past?"
                    // onChange={handleChange}
                    >
                      <MenuItem value={'yes'}>Yes</MenuItem>
                      <MenuItem value={'no'}>No</MenuItem>
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

export default Medical
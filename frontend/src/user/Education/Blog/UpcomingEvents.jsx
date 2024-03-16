import React from 'react';
import events  from './EventsData'
import {BsArrowRight} from 'react-icons/bs'
import Button from '@mui/material/Button';


const UpcomingEvents = () => {

  return (
    
    <div className='border-b-[1px] border-gray-300 p-16'>

        <h1 className='text-3xl text-[#1b1b1b] font-semibold tracking-widest mb-4 mx-5 text-center md:text-left'>Upcoming Events</h1>

        <h2 className='text-2xl text-[#684d4d] font-semibold tracking-widest mb-16 mx-5 text-center md:text-left'>Unleash the Excitement: Discover Upcoming Events!!</h2>
        
        <div className='flex flex-wrap items-center gap-3 '>
          {events.map((event) => (

            <div className=' border-[1px] border-gray-100 shadow-2xl m-3 p-5 rounded-2xl transition duration-500 hover:-translate-y-2'>
              
              <img src={event.image} alt={event.title} className='h-[150px] w-[230px] rounded-2xl' />

              <p className='py-2 text-2xl font-bold text-[#1b1b1b] w-[230px]'>{event.title}</p>

              <p className='tracking-wider text-md font-semibold text-[#1b1b1b] w-[230px]'>{event.genre} | {event.duration}</p>

              <p className='py-2 text-sm tracking-widest font-bold text-gray-400 w-[230px]'>{event.venue} | {event.location} | {event.date} | {event.time} </p>

              <p className='py-2 text-sm tracking-widest font-normal text-[#1b1b1b] w-[230px]'>{event.description}</p>

              <p className='my-5 p-2 text-md tracking-widest font-normal text-white w-[230px] flex items-center justify-center  gap-2 cursor-pointer group rounded-2xl shadow-xl
              bg-gradient-to-b from-gray-800 via-[#1b1b1b]] to-black'>Book for {event.ticketPrice} <BsArrowRight size={25} className='transition duration-300 group-hover:translate-x-1' /></p>

            </div>
          ))}
        </div>

        <div className='w-full flex items-center justify-center mt-5'>  
          <Button style={{paddingLeft:"36px", paddingRight:"36px", paddingTop:"12px", paddingBottom:"12px"}}
          className=' text-white text-xl font-bold flex items-center justify-center gap-5  group ' variant='contained'>

            Explore More Latest News
            <BsArrowRight size={30} className='transition duration-300 group-hover:translate-x-4 '/>

          </Button>
        </div>

    </div>
  
  );
};

export default UpcomingEvents;

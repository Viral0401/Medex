import React from 'react'
import vid_data from './VideoData'
import Button from '@mui/material/Button';
import {BsArrowRight} from 'react-icons/bs'

const VideosPage = () => {
  return (
    <div>

      <p className='text-4xl p-10'>Unlocking Knowledge: Dive into Our Informative Video Library</p>

      <div className='p-10 grid grid-cols-2 gap-4'>

        {vid_data.map((video, index) => (
          <div key={index} className='w-[560px] mb-5'>
            <iframe width="560" height="315" src={video.src} title={`YouTube video player ${index}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2 className='text-3xl font-semibold mt-4'>{video.title}</h2>
          </div>
        ))}

      </div>

      <div className='w-full flex items-center justify-center mb-10 mt-5'>  
        <Button style={{paddingLeft:"36px", paddingRight:"36px", paddingTop:"12px", paddingBottom:"12px"}}
        className=' text-white text-xl font-bold flex items-center justify-center gap-5  group ' variant='contained'>

          Explore More Videos
          <BsArrowRight size={30} className='transition duration-300 group-hover:translate-x-4 '/>

        </Button>
      </div>

    </div>
  )
}

export default VideosPage
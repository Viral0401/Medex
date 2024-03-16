import React from 'react'
import Post from './Post'
import TrendingSec from './TrendingSec'

const Community = () => {
  return (
    <div className='flex items-start justify-center w-full h-full px-3 gap-2'>
      
      <div className='w-[50%] h-full border-r border-l  border-gray-700 flex flex-col items-center'>
        
        <div className='border-b text-3xl w-full p-5 shadow-lg'>New Posts</div>
        
        <div className='w-full h-screen overflow-y-scroll scrollbar-hide'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>

      <div className='w-[50%] h-full'>
        <div className='border-b text-3xl w-full p-5 shadow-lg'>In the News</div>
        <TrendingSec />
      </div>

    </div>
  )
}

export default Community
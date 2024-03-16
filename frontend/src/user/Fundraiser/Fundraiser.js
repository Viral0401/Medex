import React from 'react'
import Paypal from './Paypal'
import image from './fund_image.jpeg'
import bg from './bg.png'
 
const Fundraiser = () => {
  return (
    <div className='h-[88.6vh] w-full flex items-center justify-center gap-4 font-semibold' style={{backgroundImage: `url(${bg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div className='w-[40%]'><img src={image} className='h-full w-full rounded-2xl shadow-2xl' alt='fundraiser'/></div>
        <div className='w-[50%]'>
            <p className='text-4xl px-10 '>Help Us Cater More People In Need Through Our Platform</p>
            <p className='text-4xl px-10 py-10'>Donate Money For the Greater Good!!</p>
            <div className='w-full flex  items-center justify-center'>
                <Paypal />
            </div>
        </div>
    </div>
  )
}

export default Fundraiser
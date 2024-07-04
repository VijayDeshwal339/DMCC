import React from 'react'
import Group from '../assests/Group 4.png';
import  LinkedIn from '../assests/LinkedIn.png'
import Twitter from '../assests/Twitter.png'
import Facebook from '../assests/Facebook.png'
import Instagram from '../assests/Instagram.png'

const Footer = () => {
  return (
    <div className='bg-[#123557]'>
      <div className='flex flex-col w-[79.49%] mx-auto pt-[43px] pb-[30px] gap-10'>
      <hr></hr>

     <div className='flex flex-col md:flex-row gap-10 md:justify-between items-center'>

         <div className='grid grid-cols-2 md:grid-cols-5 gap-12 text-[#FFFFFF]'>
          
            <div className='md:col-span-2 flex flex-col gap-3 mt-5'>
              <img src={Group} alt='' />
              <p className='font-poppin font-light leading-32 text-16' >© R Singhania</p>
              
            </div>

            <div className='col-span-1 flex flex-col gap-1'>
              <p className='font-Arial font-bold leading-24 text-15.13' >Company</p>
              <p className='font-Inter font-light leading-25 text-14' >About</p>
              <p className='font-Inter font-light leading-25 text-14'>FAQ</p>
            </div>

            <div className='col-span-1 flex flex-col gap-1'>
              <p className='font-Arial font-bold leading-24 text-15.13'>Terms</p>
              <p className='font-Inter font-light leading-25 text-14'>Data privacy</p>
              <p className='font-Inter font-light leading-25 text-14'>Terms</p>
              <p className='font-Inter font-light leading-25 text-14'>Accessibility</p>
            </div>

            <div className='col-span-1 flex flex-col gap-1'>
              <p className='font-Arial font-bold leading-24 text-15.13'>Related</p>
              <p className='font-Inter font-light leading-25 text-14'>Find Buyer</p>
              <p className='font-Inter font-light leading-25 text-14'>Feedback</p>
            </div>

         </div>

         <div className='flex items-center gap-4 cursor-pointer'>
          <img src={LinkedIn} alt='LinkedIn' className='w-[40px] h-[40px]' />
          <img src={Twitter} alt='Twitter' className='w-[40px] h-[40px]' />
          <img src={Facebook} alt='Facebook' className='w-[40px] h-[40px]' />
          <img src={Instagram} alt='Instagram' className='w-[40px] h-[40px]' />
         </div>

     </div>
     <hr></hr>
    </div>

    </div>
  )
}

export default Footer
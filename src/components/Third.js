import React from 'react'
import youtube from '../assests/Youtube.png'
import youtube1 from '../assests/Youtube1.png'
import Part from './Part'

const Third = () => {
  return (
    <div className='bg-[#072F57] w-[full] md:w-[85.6%] mx-auto h-[full] lg:h-[623px] mb-[100px] lg:mb-[150px] justify-center rounded-md flex  items-center'>
        <div className='w-[89%] mx-auto flex py-10 lg:py-0 flex-col lg:flex-row justify-between'>
         <div className="w-full lg:w-[55%] h-[350px] flex items-center justify-center rounded-md bg-cover bg-center" style={{ backgroundImage: `url(${youtube})` }}>
           <img src={youtube1} alt="youtube1" className="w-[106.29px] h-[75.22px]" />
          </div>

         <div className='w-[100%] lg:w-[40%]'>
           <Part/>
         </div>
        </div>

    </div>
  )
}

export default Third
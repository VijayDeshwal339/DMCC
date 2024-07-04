import React from 'react'
import arrow from '../assests/arrow.png'

const Second = () => {
  return (
    // main div
    <div className='flex flex-col lg:flex-row w-[87.6%] mx-auto mt-[95px] mb-[112px] items-center gap-10 md:justify-between'>

     {/* left div */}
     <div className='flex flex-col lg:ml-5 justify-center items-center w-[80%] lg:items-start  sm:w-[90%] lg:w-[46%] gap-11'>

      <p className='font-poppin font-bold leading-40 text-30 md:text-37.34'>Ready to dive into HABOT?</p>

      <p className='font-poppin font-light text-14 md:text-17.16 leading-28'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>

      <button className='flex rounded-md bg-[#00732F] w-[317px] h-[54px] items-center justify-end text-white gap-[40px] font-poppin font-bold text-18 leading-24'>Sign up Today ! <img src={arrow} alt='arrow' className='mr-[25px] w-[32px] h-[16.08px]'/></button>

     </div>

     {/* right div */}
     <div className='w-[80%]  sm:w-[90%] lg:w-[50%] grid sm:grid-cols-2 gap-[4%]'>

       <div className='w-[100%] flex flex-col gap-5'>
        <button className='flex items-center justify-center border border-[#E7760D] w-[100%] h-[65px] rounded-md hover:bg-[#E7760D] font-Inter font-medium text-[#3E3E3E] text-18.75 leading-32'><p className=''>Abu Dhabi</p> <img src={arrow} alt='arrow' className=' w-[32px] h-[16.08px]'/></button>
        <button className='flex items-center justify-center border border-[#E7760D] w-[100%] h-[65px] rounded-md hover:bg-[#E7760D] font-Inter font-medium text-[#3E3E3E] text-18.75 leading-32'><p className='text-nowrap'>Sharjah & Ajman</p><img src={arrow} alt='arrow' className=' w-[32px] h-[16.08px]'/></button>
        <button className='flex items-center justify-center border border-[#E7760D] w-[100%] h-[65px] rounded-md hover:bg-[#E7760D] font-Inter font-medium text-[#3E3E3E] text-18.75 leading-32'><p className=''>Ras Al Khaimah</p> <img src={arrow} alt='arrow' className=' w-[32px] h-[16.08px]'/></button>
        </div> 

        <div className='w-[100%] flex flex-col gap-5'>
        <button className='flex items-center justify-center border border-[#E7760D] w-[100%] h-[65px] rounded-md hover:bg-[#E7760D] font-Inter font-medium text-[#3E3E3E] text-18.75 leading-32'><p className=''>Dubai</p> <img src={arrow} alt='arrow' className=' w-[32px] h-[16.08px]'/></button>
        <button className='flex items-center justify-center border border-[#E7760D] w-[100%] h-[65px] rounded-md hover:bg-[#E7760D] font-Inter font-medium text-[#3E3E3E] text-18.75 leading-32'><p className=''>Fujairah</p> <img src={arrow} alt='arrow' className=' w-[32px] h-[16.08px]'/></button>
        <button className='flex items-center justify-center border border-[#E7760D] w-[100%] h-[65px] rounded-md hover:bg-[#E7760D] font-Inter font-medium text-[#3E3E3E] text-18.75 leading-32'><p className=''>Umm Al Quwain</p> <img src={arrow} alt='arrow' className=' w-[32px] h-[16.08px]'/></button>
        </div> 

     </div>


    </div>
  )
}

export default Second
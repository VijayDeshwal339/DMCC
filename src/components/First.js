import React from 'react'
import Rectangle from '../assests/Rectangle.png'
import suitcase from '../assests/suitcase.png'
import location from '../assests/location.png'

const First = () => {
  return (
    <div className='h-[530px] flex flex-col gap-10 items-center justify-center text-white text-center' style={{ backgroundImage: `url(${Rectangle})`,backgroundSize: 'cover',backgroundPosition: 'center', }}>

      <p className='font-poppin font-bold leading-50  md:leading-66 text-35 md:text-55'>Are You a Supplier?<br></br> <span className='font-normal'>Explore Matching Opportunities.</span></p>

      <div className='flex flex-col lg:flex-row  items-center gap-4'>

     <form className="w-[100%] sm:w-[338.45px]">
       <label  htmlFor="service-search" className="mb-2 sr-only font-poppin font-light leading-22.69px text-15.13px">Search</label>
        <div className="relative">
         <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <img src={suitcase} alt="suitcase icon" className="w-[21px] h-[21px]" />
         </div>
       <input type="search" id="service-search" className="block w-full h-[56px] pl-12 border outline-none rounded-sm font-poppin font-light leading-22.69px text-15.13px text-black placeholder-gray-400 bg-white"  placeholder="Search your required service here"  required  />
       </div>
    </form>

      <form className="w-[100%] sm:w-[338.45px]">
        <label htmlFor="location-search" className="mb-2 sr-only font-poppin font-light leading-22.69 text-15.13">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
            <img src={location} alt="location icon" className="w-[21px] h-[21px]" />
          </div>
          <input type="search" id="location-search" className="block w-full h-[56px] ps-12 border outline-none rounded-sm font-poppin font-light leading-22.69 text-15.13 text-black" placeholder="Search your desired location here" required  />
        </div>
      </form>

     <button className='text-white bg-[#00732F] w-[117.94px] h-[54px] rounded-sm font-Inter font-bold leading-24 text-15.13'>Search</button>

      </div>

      <p className='w-[80%] mx-auto font-poppin font-bold leading-20 md:leading-24 text-14 md:text-18'>Are you a buyer? <span className=' border-b-2' >Click here if you are looking to post a requirements</span></p>

    </div>
  )
}

export default First
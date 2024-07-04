import React, { useState } from 'react';
import Logo from '../assests/Logo.png';
import SVG from '../assests/SVG.png';
import { FaBars } from 'react-icons/fa'; 
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className='flex justify-between py-4 w-[95%] mx-auto items-center'>
      <img src={Logo} alt='' className='ml-[3%]' />
      <div className='hidden lg:flex items-center gap-8'>
        <p className='text-[#6D6E71] font-poppin font-normal text-15.25 leading-24'>Find Suppliers</p>
        <div className='flex items-center gap-2'>
          <p className='text-[#6D6E71] font-poppin font-normal text-15.25 leading-24'>Find Service Tags</p>
          <img src={SVG} alt='' />
        </div>
        <button className='border border-[#00732F] w-[193.31px] h-[50px] rounded-md text-[#00732F] font-Inter font-bold text-15 leading-24'>
          Login / Sign Up
        </button>
      </div>
      <div className='lg:hidden flex items-center'>
        <button onClick={toggleDrawer} className='text-2xl'>
          <FaBars />
        </button>
      </div>

      {isDrawerOpen && (
        <div className='fixed top-0 left-0 w-[200px] h-full bg-black bg-opacity-50 z-10' onClick={toggleDrawer}>
          <div className='fixed top-0 left-0 w-[250px] sm:w-[50%]  h-full bg-white p-4 z-20'>
            <div className='flex justify-between items-center mb-4'>
              <img src={Logo} alt='' className='ml-[3%]' />
              <button onClick={toggleDrawer} className='text-2xl'>
                <AiOutlineClose />
              </button>
            </div>
            <p className='text-[#6D6E71] font-normal text-base mb-4'>Find Suppliers</p>
            <div className='flex items-center gap-2 mb-4'>
              <p className='text-[#6D6E71] font-normal text-sm'>Find Service Tags</p>
              <img src={SVG} alt='' />
            </div>
            <button className='border border-[#00732F] w-full h-[50px] rounded-md text-[#00732F] font-bold text-base'>
              Login / Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

import React from 'react';
import { FaGithubSquare,FaInstagram } from 'react-icons/fa';
// import { RxDividerVertical } from 'react-icons/rx';

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12' >
       <div className='space-y-4' > 
       <h3 className='text-2xl text-gray-200 font-semibold' >Kishore K</h3>
       <div className='flex flex-row gap-6 text-gray-400 text-4xl' > 
       
       <a href="https://github.com/Kishorek78"><FaGithubSquare/> </a>
       <a> <FaInstagram/> </a>
       </div>
       </div>
       <p className='text-gray-400'>@ 2024 Kishore K</p>
    </div>
  );
}

export default Footer;

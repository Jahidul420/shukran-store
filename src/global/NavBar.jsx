import React from 'react';
import { BsHandbag, BsSuitHeart } from "react-icons/bs";
function NavBar() {
  return (
    <div className='sticky top-0 z-50 text-white'>
        <div className='flex justify-between items-center h-32 w-full font-oswald px-10 '>
            <div className='flex items-center gap-5'>
               <a href=''>Home</a> 
               <a href=''>Products</a> 
               <a href=''>Find Store</a> 
               <a href='' className='p-2  hover:bg-black/50 duration-300  hover:text-white rounded-full border border-white'><BsSuitHeart /></a> 
            </div>
            <div className='flex items-center gap-5'>
               <a href=''>Blog</a> 
               <a href=''>About Us</a> 
               <a href=''>Contact</a> 
               <a href='' className='p-2  hover:bg-black/50  hover:text-white rounded-full duration-300 border border-white'><BsHandbag /></a> 
            </div>
        </div>
    </div>
  )
}

export default NavBar
import React from 'react';
import { BsHandbag, BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="sticky top-0 z-50 text-white">
      <div className="flex justify-between items-end h-16 w-full font-oswald px-10 ">
        <div className="flex items-center gap-5">
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">Find Store</Link>
          <Link
            to="/"
            className="p-2  hover:bg-[#4a094a] duration-300  hover:text-white rounded-full border border-white"
          >
            <BsSuitHeart />
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/">Blog</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>
          <Link
            to="/"
            className="p-2  hover:bg-[#4a094a]  hover:text-white rounded-full duration-300 border border-white"
          >
            <BsHandbag />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar
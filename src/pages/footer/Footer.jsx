import React from "react";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";
import pattern from "../../assets/pattern.png";
import Logo from "../../assets/shukranLogo.png";
const Footer = () => {
  return (
    <div className="bg-purple-800 relative">
      <img
        src={pattern}
        alt=""
        className=" absolute top-0 left-0 object-cover h-full w-full opacity-5"
      />
      <div className="h-[80vh] w-full flex justify-between items-end gap-5 px-10 relative">
        <FirstDiv />
        <MiddelDiv />
        <LastDiv />
      </div>
      <div className="py-20 text-center text-white">
        <Link to="/">Copyright © 2023 Shukran. All rights reserved</Link>
      </div>
    </div>
  );
};

export default Footer;

const FirstDiv = () => {
  const IconArr = [
    { icon: <BsFacebook />, to: "/" },
    { icon: <AiFillYoutube />, to: "/" },
    { icon: <AiOutlineTwitter />, to: "/" },
    { icon: <FaLinkedinIn />, to: "/" },
    { icon: <AiOutlineInstagram />, to: "/" },
  ];
  return (
    <div className="w-[30%]">
      <h2 className="text-4xl text-white font-zen mb-8">FOLLOW US</h2>
      <div className="flex justify-between ie text-white text-5xl items-center group">
        {IconArr.map((item, index) => (
          <Link
            to={item.to}
            key={index}
            className=" hover:scale-150 duration-300 hover:drop-shadow-[0_0px_10px_rgb(255,255,255,0.7)]"
          >
            {item.icon}
          </Link>
        ))}
      </div>
      <div className="text-xs text-white space-x-5 mt-2">
        <Link to="/" className="border-b">
          PRIVACY & TERMS
        </Link>
        <Link to="/" className="border-b">
          PARTNERSHIPS
        </Link>
        <Link to="/" className="border-b">
          +88 017 0000 0000
        </Link>
        <Link to="/" className="border-b">
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

const MiddelDiv = () => {
  return (
    <div className="w-[40%]">
      <div>
        <img src={Logo} alt="" className="h-full w-full object-scale-down" />
      </div>
    </div>
  );
};

const LastDiv = () => {
  return (
    <div className="w-[30%] text-white">
      <div className=" space-y-5 md:mt-8 mt-4">
        <div className="flex items-center justify-between w-full">
          <AppStore
            icon={<IoLogoGooglePlaystore className="text-3xl" />}
            storeName="Google Play Store"
          />
          <AppStore
            icon={<GrAppleAppStore className="text-3xl" />}
            storeName="Apple App Store"
          />
        </div>

        <div className="w-full flex items-center">
          <input
            type="email"
            className="outline-none border-none h-12 text-black px-2 w-[70%] rounded-l-md"
            placeholder="Enter your Email..."
          />
          <button className="h-12 bg-purple-600 w-[30%] rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>
      <p className="text-xs mt-3">
        Sign up to receive 10% off your first order. By signing up I agree to
        the Shukran
        <button className="border-b"> Terms & Conditions</button>
      </p>
    </div>
  );
};

const AppStore = ({ icon, storeName }) => {
  return (
    <div className="py-3 px-2 rounded-lg border-2 border-white ">
      <button className="flex items-center text-xl font-semibold justify-between w-full">
        {icon}
        {storeName}
      </button>
    </div>
  );
};

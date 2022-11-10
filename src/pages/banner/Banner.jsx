import React from "react";
import rice from "../../assets/rice.mp4";
import logo from "../../assets/shukranLogo.png";
const Banner = () => {
  return (
    <div className=" -mt-16 relative h-[100vh] w-full">
      <video
        src={rice}
        autoPlay
        muted
        loop
        className=" object-cover h-full w-full"
      ></video>
      <div className="bg-black/50 absolute top-0 left-0 w-full h-full z-5"></div>

      <div className=" absolute top-0 left-0 h-full w-full space-y-32">
        <div className="h-20 mt-5">
            <img src={logo} alt="" className="h-full m-auto object-cover" />
        </div>
        <div className="text-center w-[85%] m-auto">
          <h2 className="text-[80px] text-white font-zen tracking-tighter">
            WHAT ARE YOU GREATEFUL FOR TODAY?
          </h2>
          <button className="px-10 py-4 mt-20 bg-white  text-black rounded-full hover:scale-110 duration-500">
            FIND MORE ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

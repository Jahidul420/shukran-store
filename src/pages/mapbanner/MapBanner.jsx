import React from "react";
import map from "../../assets/map.jpg";
const MapBanner = () => {
  return (
    <div className="h-auto w-screen relative">
      <img
        src={map}
        alt=""
        className="h-full w-full object-cover absolute top-0 left-0"
      />
      <div className="h-full w-full absolute top-0 left-0 bg-black/70"></div>
      <div className="h-full w-full text-white flex flex-col justify-center items-center  font-austin relative py-[400px]">
        <h1 className="text-[100px] w-[60%] text-center leading-none">WE'RE ALL OVER THE SHOPS</h1>
        <button className="px-7 mt-10 py-3 rounded-full bg-white text-black font-oswald">FIND A SHOP</button>
      </div>
    </div>
  );
};

export default MapBanner;
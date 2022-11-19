import React from "react";
import agora from "../../assets/agora.png";
import dShop from "../../assets/dailyShop.png";
import shawpno from "../../assets/shawpno.png";
import unimart from "../../assets/unimart.png";

const PartnarShip = () => {
  return (
    <div className=" relative py-60 bg-[url('./assets/ricefield.jpg')] bg-cover bg-fixed">
      <div className="absolute top-0 left-0 bg-black/60 h-full w-full"></div>
      {/* <img
        src={riceField}
        alt=""
        className=" absolute top-0 left-0 h-full w-full object-cover bg-fixed "
      /> */}

      <div className=" relative ">
        <div className="text-center w-4/6 mx-auto text-white">
          <h1 className="text-[100px] font-austin leading-none">
            FOR YOUR WELLBEING. FOR YOUR MAJESTY
          </h1>
          <p className="py-20 text-2xl font-austin">PRODUCT PARTNERS INCLUDE</p>
        </div>
        <div className=" flex justify-between items-center w-4/6 mx-auto">
          <button>
            <img src={dShop} alt="" className=" h-40" />
          </button>
          <button>
            <img src={unimart} alt="" className=" h-40 " />
          </button>
          <button>
            <img src={shawpno} alt="" className=" h-40" />
          </button>
          <button>
            <img src={unimart} alt="" className=" h-40 object-cover" />
          </button>
        </div>
        <div className=" flex justify-center items-center w-5/6 mx-auto ">
          <button>
            <img src={agora} alt="" className=" h-20 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnarShip;

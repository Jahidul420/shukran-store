import React from "react";
import { FaStar } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import katari from "../../assets/png/katari.png";
import miniket from "../../assets/png/miniket.png";
import najirshail from "../../assets/png/najirshail.png";
import KgButton from "../../component/KgButton";
const Popular = () => {
  // bg-[#570A57]
  return (
    <div className=" px-10 py-20 bg-[#570A57] ">
      {/* <div className="bg-[url('./assets/pattern.png')] bg-fixed bg-cover bg-no-repeat absolute top-0 left-0 h-full w-full opacity-10"></div> */}

      <div className=" text-center text-white font-zen text-5xl my-20">
        <h2 className="w-[60%] m-auto">OUR POPULARS PRODUCTS</h2>
        <p className="text-lg mt-5">
          100% Recomended and plepoles love it somuch
        </p>
      </div>
      <div className="flex items-center">
        <PopularCart
          image={najirshail}
          productTitle="PREMIUM nAJIRSHAIL RICE"
          price={199}
        />
        <PopularCart
          image={miniket}
          productTitle="PREMIUM MINIKET RICE"
          price={299}
        />
        <PopularCart
          image={katari}
          productTitle="PREMIUM KATARI RICE"
          price={150}
        />
      </div>
    </div>
  );
};

export default Popular;

const PopularCart = ({ image, productTitle, price }) => {
  return (
    <div className="bg-red-20 relative group">
      <div className=" absolute top left-0 w-full h-[470px] rounded-full bg-[#4a094a] group-hover:scale-105 duration-300 opacity-0 group-hover:opacity-100"></div>
      <div className="h-[400px] my-5 w-full relative">
        <img
          src={image}
          alt=""
          className=" h-full w-full object-scale-down group-hover:rotate-6 duration-300"
        />
      </div>
      <div className="text-center text-white space-y-3 relative">
        <h2 className="text-xl font-zen">{productTitle}</h2>
        <div className="flex items-center justify-center gap-x-2">
          <p className="flex items-center font-zen mr-3 text-xl">
            <TbCurrencyTaka />
            {price}
          </p>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="text-sm space-x-5 font-normal font-openSans m-auto ">
          <button className="py-[2px] w-14 border rounded-full bg-white text-purple-500 duration-300 ">
            1 kgs
          </button>
          <KgButton kg={5} />
          <KgButton kg={10} />
          <KgButton kg={25} />
        </div>
        <p className="text-md w-[80%] m-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
        <button className="py-3 px-12 bg-white rounded-full border-white text-purple-800 font-oswald hover:scale-110 duration-300">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

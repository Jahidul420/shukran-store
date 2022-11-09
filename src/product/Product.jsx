import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

import KgButton from "../component/KgButton";
import NavBar from "../global/NavBar";
const Product = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-between h-[100vh] w-full bg-purple-900 -mt-16">
        <div className=" w-[60%] bg-green-500">
          <div className="h-[100vh] w-full">
            <BgImage />
            <BgImage />
            <BgImage />
          </div>
        </div>
        <div className=" w-[40%] h-full px-14 py-32 text-white">
          <div className="text-left space-y-4">
            <h2 className="text-4xl font-zen ">
              SHUKRAN PREMIUM NAJIRSHAL RICE
            </h2>
            <p className="text-xl font-zen">FOR YOUR JOY</p>
            <p className=" font-openSans">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="flex items-center text-2xl font-zen mt-14">
            <TbCurrencyTaka />
            <p className="">199</p>
            <div className="text-sm space-x-5 ml-10 font-normal font-openSans">
              <button className="py-[2px] px-2 border rounded-full bg-white text-purple-500 duration-300 ">
                1 kgs
              </button>
              <KgButton kg={5} />
              <KgButton kg={10} />
              <KgButton kg={25} />
            </div>
          </div>
          <div className=" py-2 text-sm font-openSans">
            <Link to="/product">
              Pay in 3 interest-free payments on purchases of 5% to 20% off with
              BKASH<p className=" underline">LEARN MORE</p>
            </Link>
          </div>
          <div className="flex justify-between items-center font-zen mt-10">
            <p className="text-xl">Quantity</p>
            <button>
              <FaMinus />
            </button>
            <p className="h-9 w-10 border flex justify-center items-center text-xl">
              1
            </p>
            <button>
              <FaPlus />
            </button>
            <button className="w-[50%] py-3 rounded-full bg-white text-purple-900 font-oswald">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

const BgImage = ({ img }) => {
  return (
    <div className="h-[100vh] w-full">
      <img src={img} alt="" className=" h-full w-full object-cover" />
    </div>
  );
};

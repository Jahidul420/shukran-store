import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
<<<<<<< HEAD

=======
import rice1 from "../assets/rice1-min.jpg";
import rice2 from "../assets/rice2-min.jpg";
import rice3 from "../assets/rice3-min.jpg";
import rice4 from "../assets/rice4-min.jpg";
>>>>>>> a801b67e111655b3002fca94b4c960e09151b741
import KgButton from "../component/KgButton";
import NavBar from "../global/NavBar";
const Product = () => {
  return (
    <div>
      <NavBar />
<<<<<<< HEAD
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
=======
      <div className="flex justify-between w-screen -mt-16 sticky scroll-smooth">
        <div className=" w-[60%] h-auto">
          <BgImage img={rice1} />
          <BgImage img={rice4} />
          <BgImage img={rice2} />
          <BgImage img={rice3} />
        </div>

        <div className="w-[40%] h-screen ">
          <div className=" h-screen px-14 py-32 text-white bg-[#570A57] overflow-y-scroll fixed scroll-smooth">
            <div className="text-left space-y-4">
              <h2 className="text-4xl font-zen ">
                SHUKRAN PREMIUM NAJIRSHAL RICE
              </h2>
              <p className="text-xl font-zen">FOR YOUR JOY</p>
              <p className=" font-openSans text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="flex items-center text-4xl font-zen mt-14">
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
            <div className=" py-5 text-xs font-openSans">
              <Link to="/product">
                Pay in 3 interest-free payments on purchases of 5% to 20% off
                with BKASH<p className=" underline">LEARN MORE</p>
              </Link>
            </div>
            <p className=" py-2 text-xs font-openSans">
              Free Delevary in Dhaka on orders over 1000 tk
              <Link to="/product" className=" underline ml-2">
                DELIVERY INFO
              </Link>
            </p>
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
      <div className="h-screen w-full sticky bg-[#5f0b5f] border-t">
        <h2>Hello world i amd from another worl</h2>
      </div>
>>>>>>> a801b67e111655b3002fca94b4c960e09151b741
    </div>
  );
};

export default Product;

const BgImage = ({ img }) => {
  return (
<<<<<<< HEAD
    <div className="h-[100vh] w-full">
      <img src={img} alt="" className=" h-full w-full object-cover" />
=======
    <div className="h-screen w-full ">
      <img src={img} alt="" className="h-full w-full object-cover" />
>>>>>>> a801b67e111655b3002fca94b4c960e09151b741
    </div>
  );
};

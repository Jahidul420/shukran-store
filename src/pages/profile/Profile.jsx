import React, { useContext } from "react";
import {
  AiFillGift,
  AiFillStar,
  AiOutlineInstagram,
  AiOutlineTwitter
} from "react-icons/ai";
import { BsCartCheckFill, BsFacebook, BsFillCartXFill } from "react-icons/bs";
import { FaBoxOpen, FaCrown, FaMoneyBillAlt } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Cell, Legend, Pie, PieChart } from "recharts";
import nobita from "../../assets/nobita.jpg";
import pattern from "../../assets/pattern.png";
import dch from "../../assets/png/dChinigura.png";
import katari from "../../assets/png/katari.png";
import mini from "../../assets/png/miniket.png";
import naj from "../../assets/png/najirshail.png";
import StoreContext from "../../context/StoreContext";
import Nav from "../../global/Nav";
import Footer from "../footer/Footer";
const Profile = () => {
  return (
    <div>
      <Nav />
      <div className="w-full h-auto -mt-20 bg-gray-100 pb-12">
        <ProfileBanner />
        <div className="w-[90vw] mx-auto space-y-12">
          <div className="w-full flex h-[400px] gap-x-12">
            {/* WIN GIFT BOX STATUS */}
            <div className="w-3/6 flex flex-col justify-between h-full bg-white rounded-lg py-8 px-10 drop-shadow-sm">
              <p className="text-lg font-semibold text-gray-600">
                Purches To Win Gift Box
              </p>
              <PurchesGift
                icon={<AiFillGift />}
                image={naj}
                color="bg-sky-400"
                textColor="text-sky-400"
                widht={"w-[90%]"}
              />
              <PurchesGift
                icon={<AiFillGift />}
                image={dch}
                color="bg-stone-500"
                textColor="text-stone-500"
                widht={"w-[20%]"}
              />
              <PurchesGift
                icon={<FaBoxOpen />}
                image={katari}
                color="bg-purple-800"
                textColor="text-purple-800"
                widht={"w-[100%]"}
              />
              <PurchesGift
                icon={<AiFillGift />}
                image={mini}
                color="bg-lime-400"
                textColor="text-lime-400"
                widht={"w-[70%]"}
              />
            </div>
            {/* PORFILE ALL STATUS  */}
            <TotalStatus />
          </div>
          {/* RECENT PURCHES STATUS SECTION  */}
          <div className="h-[400px] w-full flex justify-between gap-x-12 items-center">
            <div className="w-[60%] h-full bg-white rounded-lg py-3 px-8">
              <p className=" text-lg font-semibold text-gray-600">
                Recent Purches
              </p>
              <div className="w-full h-auto overflow-y-scroll">
                <RecentPurchesProducts />
              </div>
            </div>
            {/* PICHART */}
            <div className="w-[40%] h-full bg-white rounded-lg py-3 px-4 drop-shadow-sm">
              <p className=" text-lg font-semibold text-gray-600 text-center">
                Over View
              </p>
              <PiChartStatue />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;

const ProfileBanner = () => {
  return (
    <>
      <div className="h-[400px] w-full bg-black overflow-hidden flex justify-center items-center text-white text-7xl text-center font-austin">
        <div>
          <p className=" text-4xl">SHUKRAN</p>
          <h2>GRATITUDE INBOUND</h2>
        </div>
        <img
          src={pattern}
          alt=""
          className=" h-auto w-full object-cover absolute top-0 left-0 opacity-20"
        />
      </div>
      <div className=" w-[90vw] h-auto flex justify-between py-4 mx-auto relative bg-gray-100">
        <div className=" relative flex w-3/6">
          <div className="h-[200px] w-[200px] rounded-full overflow-hidden drop-shadow-xl relative -top-20 left-0">
            <img src={nobita} alt="" className="h-full w-full object-cover" />
          </div>
          <div className=" text ml-8 text-sm font-medium text-gray-600">
            <h2 className=" text-2xl mb-2 font-bold">JAHIDUL ISLAM</h2>
            <p>01234567899</p>
            <p>Join Date: 30/12/22</p>
          </div>
        </div>

        <div className=" flex items-center h-10 w-64 text-4xl justify-between">
          <p className="text-sm font-semibold">Socain Media</p>
          <button className="text-sky-500 text-3xl">
            <BsFacebook />
          </button>
          <button className="text-rose-500">
            <AiOutlineInstagram />
          </button>
          <button className="text-sky-500">
            <AiOutlineTwitter />
          </button>
        </div>
      </div>
    </>
  );
};

const PurchesGift = ({ image, color, widht, textColor, icon }) => {
  return (
    <div className=" flex items-center w-full h-[20%] justify-between">
      <div className="h-full w-[15%] ">
        <img src={image} alt="" className=" h-full w-auto object-cover" />
      </div>
      <div className=" h-[10px] rounded-full w-[90%] bg-gray-200 relative overflow-hidden">
        <div
          className={` ${color} ${widht} absolute top-0 left-0 h-full`}
        ></div>
      </div>
      <div
        className={`${textColor} w-[10%] text-3xl ml-auto mb-1 flex justify-center items-center`}
      >
        {icon}
      </div>
    </div>
  );
};

const TotalStatus = () => {
  return (
    <div className="flex w-3/6 px-10 py-8 justify-between gap-6 items-center h-full bg-white rounded-lg drop-shadow-sm">
      <div className=" w-3/6 flex flex-col justify-between h-full gap-2">
        <StatusCard
          name="Total Purches"
          number={20}
          icon={<BsCartCheckFill />}
          color="text-emerald-400"
          textColor="textxt-emerald-400"
        />
        <StatusCard
          name="Total Transition"
          number={9500}
          icon={<FaMoneyBillAlt />}
          color="text-emerald-500"
          textColor="textxt-emerald-500"
        />
        <StatusCard
          name="Total Return"
          number={0}
          icon={<BsFillCartXFill />}
          color="text-red-500"
          textColor="textxt-red-500"
        />
      </div>
      <div className=" w-3/6 flex flex-col justify-between h-full gap-2">
        <StatusCard
          name="Rank"
          number="2"
          icon={<FaCrown />}
          color="text-purple-500"
          textColor="textxt-purple-500"
        />
        <StatusCard
          name="Win Reward"
          number={7}
          icon={<AiFillGift />}
          color="text-rose-500"
          textColor="textxt-rose-500"
        />

        <StatusCard
          name="Total Star"
          number={10}
          icon={<AiFillStar />}
          color="text-yellow-400"
          textColor="textxt-yellow-400"
        />
      </div>
    </div>
  );
};
const StatusCard = ({ name, number, icon, color }) => {
  return (
    <div className="h-[25%] w-full p-2 flex items-center bg-gray-100 rounded-md drop-shadow-sm">
      <div className={`text-4xl px-3 ${color}`}>{icon}</div>
      <div className=" text-gray-700">
        <p className="text-base font-semibold">{name}</p>
        <p className="text-2xl font-bold">{number}</p>
      </div>
    </div>
  );
};

const PiChartStatue = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="flex justify-center items-center h-full w-full">
      <PieChart width={300} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={110}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
      </PieChart>
    </div>
  );
};

const RecentPurchesProducts = () => {
  const { wish } = useContext(StoreContext);
  return (
    <>
      <div className="flex justify-between items-center text-xs font-normal text-center py-3">
        <p className="w-[10%] text-left">IMAGE</p>
        <p className="w-[40%] text-left">NAME</p>
        <p className="w-[15%]">DATE</p>
        <p className="w-[10%]">QUANTITY</p>
        <p className="w-[10%]">K.G</p>
        <p className="w-[15%]">PRICE</p>
      </div>

      {wish?.map((product, index) => (
        <div
          className="flex justify-between items-center font-medium h-16 w-full text-xs text-center text-gray-600 my-3"
          key={index}
        >
          <div className="w-[10%] h-full items-center flex">
            <div className="h-14 w-14 rounded-full bg-gray-300">
              <img
                src={product.image}
                alt=""
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
          <h2 className="w-[40%] font-roboto text-sm text-left">
            {product.name}
          </h2>
          <div className="w-[15%]">10-JUN-23</div>
          <div className="w-[10%]">{product.quantity}</div>
          <div className="w-[10%]">{product.priceAndKgs[1].kg}</div>
          <div className="w-[15%] flex justify-center items-center font-roboto text-sm">
            <TbCurrencyTaka />
            {product.priceAndKgs[1].kg}
          </div>
        </div>
      ))}
    </>
  );
};

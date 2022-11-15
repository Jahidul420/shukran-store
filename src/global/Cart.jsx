import React, { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { TbCurrencyTaka } from "react-icons/tb";
import StoreContext from "../context/StoreContext";
const Cart = () => {
  const { cart, showCart, handleShowCart, handleQuantity } =
    useContext(StoreContext);

  return (
    <div
      className={`h-screen ${
        showCart ? "w-[420px] border-l" : " w-0"
      } bg-white/30 backdrop-blur-xl absolute top-0 right-0 z-50 duration-500 transition-all`}
    >
      <div
        className={`${
          showCart
            ? " opacity-100 ease-in-out transition-all duration-1000"
            : "opacity-0"
        } px-4 font-openSans `}
      >
        <div className=" h-20 w-full flex justify-between items-center text-2xl text-white mb-5">
          <button onClick={handleShowCart} className="pr-2 py-2 text-4xl">
            <HiXMark />
          </button>
          <button onClick={handleShowCart} className="p-2 mr-3 relative">
            <BsHandbag />
            <div
              className={` ${
                cart.length > 0 ? "opacity-100" : "opacity-0"
              } bg-transparent border-white border h-5 w-5 rounded-full absolute -top-1 -right-2 flex justify-center items-center text-xs duration-300 transition-all`}
            >
              <p>
                {cart.reduce(
                  (qrevious, current) => qrevious + current.quantity,
                  0
                )}
              </p>
            </div>
          </button>
        </div>
        {cart.map((product, index) => (
          <div
            className="h-28 mb-8 w-full flex overflow-hidden rounded-md text-black border bg-white drop-shadow-md"
            key={index}
          >
            <div className="h-full w-38">
              <img
                src={product.image}
                alt=""
                className=" object-cover h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-between px-3 py-2 items-start w-full">
              <p className=" text-base font-semibold">
                {product.name} - {product.kg}kg
              </p>

              <div className="flex items-center w-full text-sm font-semibold text-gray-800">
                <p>Unite Price - </p>
                <TbCurrencyTaka />
                <p>{product.price}</p>
              </div>

              <div className="flex justify-between items-center w-full">
                <div className="flex gap-4 items-center font-zen w-20 text-sm">
                  <button onClick={() => handleQuantity(product)}>
                    {product.quantity < 2 ? <HiXMark /> : <AiOutlineMinus />}
                  </button>
                  <p className="text-xl">1</p>
                  <button onClick={() => handleQuantity(product)}>
                    <AiOutlinePlus />
                  </button>
                </div>
                <div className="flex items-center text-xl font-medium font-oswald">
                  <TbCurrencyTaka />
                  <p>{product.price * product.quantity}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

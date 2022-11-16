import React, { useContext } from "react";
import { BsHandbag } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import StoreContext from "../context/StoreContext";
import CartProduct2 from "./CartProduct2";
const Cart = () => {
  const { cart, showCart, handleShowCart } = useContext(StoreContext);

  return (
    <div
      className={`h-screen ${
        showCart ? "w-[420px] border-l" : " w-0"
      } bg-white/30 backdrop-blur-xl absolute top-0 right-0 z-50 duration-500 transition-all overflow-y-scroll`}
    >
      <div className={`${showCart ? "block" : "hidden"} px-4 font-openSans`}>
        <div className=" h-20 w-full flex justify-between items-center text-2xl text-white mb-5 sticky top-0">
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
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <div key={index}>
              {/* <CartProduct product={product} /> */}
              <CartProduct2 product={product} />
            </div>
          ))
        ) : (
          <div className="h-screen w-full flex justify-center items-center">
            <p className="mb-32">You don't add any product in cart</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

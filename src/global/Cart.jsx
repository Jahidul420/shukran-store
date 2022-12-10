import React, { useContext } from "react";
import { BsHandbag } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import StoreContext from "../context/StoreContext";
import CartProduct2 from "./CartProduct2";
const Cart = () => {
  const { cart, showCart } = useContext(StoreContext);
  return (
    <div
      className={`h-screen ${
        showCart ? " translate-x-0" : " translate-x-full"
      } bg-black/30 backdrop-blur-2xl z-50 duration-500 transition-all flex flex-col justify-between w-[420px] border-l fixed top-0 right-0`}
    >
      <NavTopIcon />
      <div className="px-4 font-roboto overflow-y-scroll h-full">
        {cart?.map((product, index) => (
          <div key={index}>
            <CartProduct2 product={product} />
          </div>
        ))}
      </div>
      <div className="w-full h-20 text-center flex justify-center items-center">
        <Link
          to={cart.length > 0 ? "/checkout" : "/"}
          className="py-3 text-center bg-transparent border-2 border-white text-white backdrop-blur-3xl px-[170px] rounded-md"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;

const NavTopIcon = () => {
  const { handleShowCart, cart } = useContext(StoreContext);
  return (
    <div className="h-20 w-full flex justify-between items-center text-2xl text-white px-5">
      <button onClick={handleShowCart} className=" text-4xl">
        <HiXMark />
      </button>
      <button onClick={handleShowCart} className="p-2 mr-3 relative">
        <BsHandbag />
        <div
          className={`bg-transparent border-white border h-5 w-5 rounded-full absolute -top-1 -right-2 flex justify-center items-center text-xs duration-300 transition-all`}
        >
          <p>
            {cart.reduce((qrevious, current) => qrevious + current.quantity, 0)}
          </p>
        </div>
      </button>
    </div>
  );
};

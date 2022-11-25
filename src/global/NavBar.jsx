import React, { useContext } from "react";
import { BsHandbag, BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import StoreContext from "../context/StoreContext";
import Cart from "./Cart";
function NavBar() {
 
  const { cart, wish, handleShowCart, handleMode, } =
    useContext(StoreContext);

  return (
    <div className={` bg-transparent sticky top-0 z-50 duration-300 mix-blend-difference `}>
      <div
        className={`flex justify-between items-end h-16 w-full font-oswald px-10  duration-300  `}
      >
        <Cart />
        <div className="flex items-center gap-5 text-white">
          <button onClick={handleMode}>Mode</button>

          <Link to="/" className="text-white">Home</Link>
          <Link to="/" className="text-white">Products</Link>
          <Link to="/" className="text-white">Find Store</Link>
          <Link
            to="/"
            className="p-2  hover:bg-black duration-300  hover:text-white rounded-full border border-white relative"
          >
            <BsSuitHeart />

            <div
              className={` ${
                wish.length > 0 ? "opacity-100" : "opacity-0"
              } bg-white h-5 w-5 rounded-full absolute -top-2 -right-2 text-black flex justify-center items-center text-xs duration-300 transition-all`}
            >
              <p>{wish.length}</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/">Blog</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>
          <button
            onClick={handleShowCart}
            className="p-2  hover:bg-black  hover:text-white rounded-full duration-300 border border-white relative"
          >
            <BsHandbag />

            <div
              className={` ${
                cart.length > 0 ? "opacity-100" : "opacity-0"
              } bg-white h-5 w-5 rounded-full absolute -top-2 -right-2 text-black flex justify-center items-center text-xs duration-300 transition-all`}
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
      </div>
    </div>
  );
}

export default NavBar;

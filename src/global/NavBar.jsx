import React, { useContext, useState } from "react";
import { BsHandbag, BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import StoreContext from "../context/StoreContext";
import Cart from "./Cart";
function NavBar() {
  const { cart, wish, handleShowCart } = useContext(StoreContext);
  const [wscroll, setScroll] = useState(window.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     return setScroll(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  // }, [wscroll]);
  return (
    <div className={`sticky top-0 z-50 duration-300`}>
      <div
        className={`flex justify-between items-end h-16 w-full font-oswald px-10
          text-white
        } duration-300`}
      >
        <Cart />
        <div className="flex items-center gap-5">
          <a href="#hello">hello</a>
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">Find Store</Link>
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

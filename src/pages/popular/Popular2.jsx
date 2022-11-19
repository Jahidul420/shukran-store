import React, { useContext } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import { MdOutlineShoppingCart } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import StoreContext from "../../context/StoreContext";
const Popular2 = () => {
  const { products } = useContext(StoreContext);

  // bg-[#570A57]
  return (
    <div className=" px-40 py-20 bg-gray-50 ">
      <div className=" text-center text-black font-zen text-5xl my-20">
        <h2 className="w-[60%] m-auto">OUR POPULARS PRODUCTS</h2>
        <p className="text-lg mt-5">
          100% Recomended and plepoles love it somuch
        </p>
        <div className="flex items-center justify-center gap-x-2 py-2 text-xl">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-14">
        <PopularCart product={products[0]} />
        <PopularCart product={products[1]} />
        <PopularCart product={products[2]} />
      </div>
    </div>
  );
};

export default Popular2;

const PopularCart = ({ product }) => {
  const { handleWishList, addToCart } = useContext(StoreContext);
  return (
    <div className="bg-white w-full h-[550px] rounded-xl drop-shadow-lg">
      <div className="w-full h-[75%]">
        <img
          src={product.image}
          alt=""
          className=" h-full w-full object-scale-down group-hover:rotate-6 duration-300"
        />
      </div>

      <div className="text-left text-black h-[25%] w-full px-4 relative space-y-3">
        <h2 className="text-lg font-austin m-auto">
          {product.name}
        </h2>
        <div className="flex items-center text-2xl font-oswald">
          <TbCurrencyTaka />
          <p className="w-20">
            {product.priceAndKgs.map((item) =>
              item.active ? item.price : null
            )}
          </p>
          <KgsButton product={product} />
        </div>
        <div className="flex justify-between items-end absolute bottom-4 left-0 w-full px-4">
          <button className="h-[43px] w-[80%] bg-black rounded-md border-2 text-white font-oswald hover:scale-105 duration-300 text-sm flex justify-center items-center gap-2" onClick={()=>addToCart(product)}>
            <MdOutlineShoppingCart />
            ADD TO CART
          </button>
          <button className="h-[40px] w-[15%] bg-gray-100 rounded-md border-2 font-oswald  duration-300 text-black text-xl flex justify-center items-center">
            {product.wish ? (
              <BsSuitHeartFill
                className=" text-rose-500 duration-300"
                onClick={() => handleWishList(product, false)}
              />
            ) : (
              <BsSuitHeart onClick={() => handleWishList(product, true)} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const KgsButton = ({ product }) => {
  const { handleKgAndPrice } = useContext(StoreContext);
  return (
    <div className="text-sm font-normal font-roboto flex justify-between items-center w-full">
      {product.priceAndKgs.map((item, index) => (
        <button
          className={`py-[2px] px-2 border rounded-full ${
            item.active ? "bg-black text-white" : " bg-gray-50"
          } duration-500`}
          key={index}
          onClick={() => handleKgAndPrice(product, item)}
        >
          {item.kg} kg
        </button>
      ))}
    </div>
  );
};

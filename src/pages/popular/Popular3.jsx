import React, { useContext } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import { MdOutlineShoppingCart } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import StoreContext from "../../context/StoreContext";
const Popular3 = () => {
  const { products } = useContext(StoreContext);

  // bg-[#570A57]
  return (
    <div className=" px-40 py-20 bg-gray-50 ">
      <div className=" text-center text-black font-austin text-5xl my-20">
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
      <div className="flex items-center justify-between relative">
        <PopularCart product={products[0]} />
        <PopularCart product={products[1]} />
        <PopularCart product={products[2]} />
      </div>
    </div>
  );
};

export default Popular3;

const PopularCart = ({ product }) => {
  const { addToCart } = useContext(StoreContext);
  return (
    <div className=" w-full rounded-xl  bg-transparent relative group">
      <div className="bg-gray-700 h-[460px] w-[450px] absolute -top-8 -left-6 rounded-full opacity-0 group-hover:opacity-100 duration-200 group-hover:scale-110"></div>
      <div className="relative">
        <div className="w-full h-[400px]">
          <img
            src={product.image}
            alt=""
            className=" h-full w-full object-scale-down group-hover:rotate-6 duration-500 group-hover:scale-105"
          />
        </div>

        <div className="text-center px-2 text-black w-full space-y-2">
          <h2 className="text-2xl font-austin font-medium ">{product.name}</h2>
          <ProductPrice product={product} />
          <p className="text-just w-[80%] m-auto text-sm font-medium text-gray-600">
            Add a touch of royalty to any dish, with this versatile powder, made
            from nothing but
          </p>
          <div className="flex justify-center items-center w-full px-4">
            <button
              className="px-5 py-3 bg-black rounded-full border-2 text-white font-oswald hover:scale-105 duration-300 text-sm flex justify-center items-center gap-2"
              onClick={() => addToCart(product)}
            >
              <MdOutlineShoppingCart />
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductPrice = ({ product }) => {
  const { handleWishList } = useContext(StoreContext);
  return (
    <div className="flex items-center justify-center font-roboto">
      <p className="flex justify-center items-center text-2xl font-oswald">
        <TbCurrencyTaka />
        {product.priceAndKgs.map((item) => (item.active ? item.price : null))}
      </p>
      <p className=" text-xs font-medium font-roboto mx-1">(Uinte Price) </p>
      <button>
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

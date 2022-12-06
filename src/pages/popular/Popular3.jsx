import React, { useContext } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import Title from "../../component/Title";
import StoreContext from "../../context/StoreContext";
import ThemeContext from "../../context/ThemeContext";
const Popular3 = () => {
  const { products } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  // bg-[#570A57]
  return (
    <div className={` px-40 py-32 ${theme.background} `}>
      <div className={` text-center ${theme.text} font-austin text-5xl`}>
        <Title
          title="OUR POPULARS POPULAR PRODUCTS"
          subTitle="100% Recomended and plepoles love it somuch"
        />
        <div className="flex items-center justify-center gap-x-2 py-2 text-lg">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className="flex items-center justify-between relative mt-20">
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
  const { theme } = useContext(ThemeContext);
  return (
    <div className=" w-full rounded-xl  bg-transparent relative group">
      <div
        className={`${theme.popularBg} h-[460px] w-[450px] absolute -top-8 -left-6 rounded-full opacity-0 group-hover:opacity-100 duration-200 group-hover:scale-110`}
      ></div>
      <div className="relative">
        <div className="w-full h-[400px]">
          <img
            src={product.image}
            alt=""
            className=" h-full w-full object-scale-down group-hover:rotate-6 duration-500 group-hover:scale-105"
          />
        </div>

        <div className={`text-center px-2 ${theme.text} w-full space-y-4`}>
          <h2 className="text-2xl font-austin ">{product.name}</h2>
          <ProductPrice product={product} />
          <p className="w-[80%] m-auto text-md font-light">
            Add a touch of royalty to any dish, with this versatile powder, made
            from nothing but
          </p>
          <div className="flex justify-center items-center w-full px-4">
            <button
              className={`px-5 py-3 ${theme.button1} rounded-full border-2 font-oswald hover:scale-105 duration-300 text-sm flex justify-center items-center gap-2`}
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
      <p className="flex justify-center items-center text-xl font-oswald">
        <TbCurrencyTaka />
        {product.priceAndKgs.map((item) => (item.active ? item.price : null))}
      </p>
      <p className=" text-xs font-roboto mx-1">(Uinte Price) </p>
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

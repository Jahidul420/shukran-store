import React, { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
  BsFillShareFill,
  BsFillSuitHeartFill,
  BsSuitHeartFill
} from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import StoreContext from "../../context/StoreContext";
import Nav from "../../global/Nav";
import Footer from "../footer/Footer";
const AllProducts = () => {
  const { products } = useContext(StoreContext);

  return (
    <div className={`bg-gray-100 h-full w-full`}>
      <Nav />
      <div className=" grid grid-cols-4 gap-10 gap-y-20 p-10 ">
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;

const ProductCard = ({ product }) => {
  const { handleWishList, handleKgAndPrice, addToCart } =
    useContext(StoreContext);
  const [toggleKG, setToggleKG] = useState(false);
  const handleKG = () => {
    setToggleKG(!toggleKG);
  };
  return (
    <div className="h-[450px] w-full rounded-md overflow-hidden relative bg-white drop-shadow-lg">
      <div className=" relative h-[77%] bg-white">
        <Link to="/">
          <img
            src={product.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </Link>
        <div className=" w-full absolute top-5 px-3 left-0 flex justify-between text-xl text-gray-300">
          <button className=" hover:text-sky-500 duration-300">
            <BsFillShareFill />
          </button>
          <button>
            {product.wish ? (
              <BsSuitHeartFill
                className=" text-rose-500 duration-300"
                onClick={() => handleWishList(product, false)}
              />
            ) : (
              <BsFillSuitHeartFill
                onClick={() => handleWishList(product, true)}
              />
            )}
          </button>
        </div>
      </div>

      <div className="text-center h-[23%] relative ">
        <h2 className="h-auto w-full text-md px-4 py-1 font-semibold ">{product.name}</h2>
        <div className="flex justify-between items-start absolute bottom-0 left-0 w-full">
          <div className="flex justify-start items-center text-lg font-semibold pl-3 w-auto">
            <TbCurrencyTaka />
            <p>
              {product.priceAndKgs.map((item) =>
                item.active ? item.price : null
              )}
              0
            </p>
          </div>

          <div
            className={`flex justify-around items-center border-gray-700 rounded-full border transition-all ${
              toggleKG ? " w-auto duration-500 " : "w-auto duration-500"
            } duration-500 mr-4`}
          >
            {product.priceAndKgs.map((item, index) =>
              toggleKG ? (
                <button
                  className={`py-[2px]  duration-300 font-medium font-oswald w-10`}
                  key={index}
                  onMouseDown={() => handleKgAndPrice(product, item)}
                  onClick={handleKG}
                >
                  {item.kg} <span className="text-xs text-gray-800">KG</span>
                </button>
              ) : (
                <button
                  className={`py-[2px] duration-300 font-medium font-oswald w-16 ${
                    item.active ? "black" : "hidden"
                  }
                  `}
                  key={index}
                  onClick={handleKG}
                >
                  {item.kg}
                  <span className="text-xs pl-1 text-gray-800">KG</span>
                </button>
              )
            )}
          </div>
          <div className="w-auto">
            <button
              className="flex items-center justify-center h-10 w-12 bg-black rounded-tl-2xl  text-white text-2xl ml-auto"
              onClick={() => addToCart(product)}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

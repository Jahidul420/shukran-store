import React, { useContext } from "react";
import {
  BsFillShareFill,
  BsFillSuitHeartFill,
  BsSuitHeartFill
} from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import Title from "../../component/Title";
import StoreContext from "../../context/StoreContext";
import Nav from "../../global/Nav";
import Footer from "../footer/Footer";
const Products = () => {
  const { products } = useContext(StoreContext);

  return (
    <div className={`bg-white h-full w-full`}>
      <Nav />
      <Title
        title="MEET THE SHUKRAN ALL GREAT PRODUCTS."
        subTitle="100% Australian. 100% natural. The Shukran Garnet plum has been lovingly
          cultivated to be ‘the queen of antioxidants’. The perfect sweet union
          of taste and wellbeing, it’s cherished by nutritionists and worshipped
          by foodies."
      />

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

export default Products;

const ProductCard = ({ product }) => {
  const { handleWishList, handleKgAndPrice, addToCart } =
    useContext(StoreContext);
  return (
    <div className="h-[500px] w-full overflow-hidden relative">
      <div className=" relative h-[70%] bg-[#fafafa] rounded-md">
        <Link to="/">
          <img
            src={product.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </Link>
        <div className=" w-full absolute bottom-2 px-3 left-0 flex justify-between text-xl text-gray-300">
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

      <div className="text-left h-[30%] flex flex-col justify-between relative">
        <h2 className="h-auto w-full text-base mt-2 font-roboto font-normal">
          {product.name}
        </h2>

        <div className="flex justify-start items-center text-base font-semibold  w-auto absolute top-2 right-0">
          <TbCurrencyTaka />
          <p>
            {product.priceAndKgs.map((item) =>
              item.active ? item.price : null
            )}
            0
          </p>
        </div>

        <div className="flex justify-around items-center w-full">
          {product.priceAndKgs.map((item) => (
            <button
              onClick={() => handleKgAndPrice(product, item)}
              className={`py-[2px] w-12 text-sm  rounded-md duration-500 ${
                item.active ? "bg-black text-white" : "bg-[#fafafa]"
              }`}
              key={item.kg}
            >
              {item.kg} <span className="text-xs">KG</span>
            </button>
          ))}
        </div>
        <div>
          <button onClick={()=>addToCart(product)} className=" w-full h-10 bg-gray-100 rounded-md font-roboto font-base">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};


// hello social
import React, { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";
import { TbCurrencyTaka } from "react-icons/tb";
import StoreContext from "../context/StoreContext";
const CartProduct2 = ({ product }) => {
  const { handleQuantity, removeToCart } = useContext(StoreContext);
  return (
    <div className="h-28 mb-8 w-full flex justify-between items-center overflow-hidden rounded-md text-black bg-white drop-shadow-md">
      <ProductImge image={product.image} />

      <div className="flex flex-col h-full w-[70%] p-2 justify-between items-start">
        <p className=" text-base font-semibold">
          {product.name} - {product.kg}kg
        </p>
        <ProductUnitePrice price={product.price} />
        <div className="flex justify-between items-center w-full"></div>
        <ProductPrice price={product.price * product.quantity} />
      </div>

      <div className="flex flex-col justify-between items-center font-oswald h-full w-[12%] text-lg bg-black text-white">
        <button
          className="px-2 py-2"
          onClick={
            product.quantity <= 1
              ? () => removeToCart(product)
              : () => handleQuantity(product, -1)
          }
        >
          {product.quantity < 2 ? <HiXMark /> : <AiOutlineMinus />}
        </button>
        <p className="text-xl">{product.quantity}</p>
        <button
          className="px-2 py-2"
          onClick={() => handleQuantity(product, 1)}
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default CartProduct2;

const ProductImge = ({ image }) => {
  return (
    <div className="h-full w-[28%]">
      <img src={image} alt="" className="m-auto object-cover h-full w-auto" />
    </div>
  );
};

const ProductUnitePrice = ({ price }) => {
  return (
    <div className="flex items-center w-full text-xs font-semibold text-gray-800">
      <p>Unite Price - </p>
      <TbCurrencyTaka />
      <p>{price}</p>
    </div>
  );
};

const ProductPrice = ({ price }) => {
  return (
    <div className="flex items-center text-xl font-medium font-oswald">
      <TbCurrencyTaka />
      <p>{price}</p>
    </div>
  );
};

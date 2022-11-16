import React, { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";
import { TbCurrencyTaka } from "react-icons/tb";
import StoreContext from "../context/StoreContext";
const CartProduct = ({ product }) => {
  const { handleQuantity, removeToCart } = useContext(StoreContext);
  return (
    <div className="h-28 mb-8 w-full flex overflow-hidden rounded-md text-black border bg-white drop-shadow-md">
      <div className="h-full w-38">
        <img
          src={product.image}
          alt=""
          className=" object-cover h-full w-full"
        />
      </div>

      <div className="flex flex-col justify-between px-3 py-2 items-start w-full">
        <p className=" text-base font-semibold">
          {product.name} - {product.kg}kg
        </p>

        <div className="flex items-center w-full text-sm font-semibold text-gray-800">
          <p>Unite Price - </p>
          <TbCurrencyTaka />
          <p>{product.price}</p>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4 items-center font-oswald w-20 text-lg">
            <button
              onClick={
                product.quantity <= 1
                  ? () => removeToCart(product)
                  : () => handleQuantity(product, -1)
              }
            >
              {product.quantity < 2 ? <HiXMark /> : <AiOutlineMinus />}
            </button>
            <p className="text-xl">{product.quantity}</p>
            <button onClick={() => handleQuantity(product, 1)}>
              <AiOutlinePlus />
            </button>
          </div>
          <div className="flex items-center text-xl font-medium font-oswald">
            <TbCurrencyTaka />
            <p>{product.price * product.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

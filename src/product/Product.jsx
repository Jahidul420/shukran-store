import React, { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import pattern from "../assets/pattern.png";
import rice1 from "../assets/rice1-min.jpg";
import rice2 from "../assets/rice2-min.jpg";
import rice3 from "../assets/rice3-min.jpg";
import rice4 from "../assets/rice4-min.jpg";
import StoreContext from "../context/StoreContext";
import Nav from "../global/Nav";
const Product = () => {
  const { product, handleKgAndPrice, addToCart, handleQuantity, removeToCart } =
    useContext(StoreContext);

  return (
    <div>
      <Nav />
      <div className="flex justify-between w-screen -mt-16 sticky scroll-smooth">
        <div className=" w-[60%] h-auto">
          <BgImage img={product.image} />
          <BgImage img={rice1} />
          <BgImage img={rice4} />
          <BgImage img={rice2} />
          <BgImage img={rice3} />
        </div>

        <div className="w-[40%] h-screen relative">
          <div className=" h-screen px-20 py-32 text-white bg-black overflow-y-scroll fixed scroll-smooth font-roboto">
            <img
              src={pattern}
              alt=""
              className=" h-full w-full object-cover absolute top-0 left-0 opacity-5 -z-10"
            />
            <div className="text-left space-y-4">
              <h2 className="text-4xl font-lora ">{product.name}</h2>
              <p className="text-xl">FOR YOUR JOY</p>
              <p className=" font-roboto text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="flex items-center text-4xl font-oswald mt-14">
              <TbCurrencyTaka />
              <p className="w-20">
                {product.priceAndKgs.map((item) =>
                  item.active ? item.price : null
                )}
              </p>
              <div className="text-sm space-x-5 ml-10 font-normal font-roboto">
                {product.priceAndKgs.map((item, index) => (
                  <button
                    className={`py-[2px] px-2 border rounded-full ${
                      item.active ? "bg-white text-black" : ""
                    } duration-500`}
                    key={index}
                    onClick={() => handleKgAndPrice(product, item)}
                  >
                    {item.kg} kg
                  </button>
                ))}
              </div>
            </div>
            <div className=" py-5 text-xs font-roboto">
              <Link to="/product">
                Pay in 3 interest-free payments on purchases of 5% to 20% off
                with BKASH<p className=" underline">LEARN MORE</p>
              </Link>
            </div>
            <p className=" py-2 text-xs font-roboto">
              Free Delevary in Dhaka on orders over 1000 tk
              <Link to="/product" className=" underline ml-2">
                DELIVERY INFO
              </Link>
            </p>
            <div className="flex justify-between items-center font-zen mt-10">
              <p className="text-xl">Quantity</p>
              <button
                onClick={
                  product.quantity <= 1
                    ? () => removeToCart(product)
                    : () => handleQuantity(product, -1)
                }
              >
                {product.quantity < 2 ? <HiXMark /> : <FaMinus />}
              </button>
              <p className="h-9 w-10 border flex justify-center items-center text-xl">
                {product.quantity}
              </p>
              <button onClick={() => handleQuantity(product, 1)}>
                <FaPlus />
              </button>
              <button
                className="w-[50%] py-3 rounded-full bg-white text-black font-oswald"
                onClick={() => addToCart(product)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full sticky bg-[#5f0b5f] border-t">
        <h2>Hello world i amd from another worl</h2>
      </div>
    </div>
  );
};

export default Product;

const BgImage = ({ img }) => {
  return (
    <div className="h-[100vh] w-full">
      <img src={img} alt="" className=" h-full w-full object-cover" />
    </div>
  );
};

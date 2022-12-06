import React, { useContext } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { HiOutlineShare } from "react-icons/hi";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import Title from "../../component/Title";
import StoreContext from "../../context/StoreContext";
import ThemeContext from "../../context/ThemeContext";
const HomeProducts = () => {
  const { products, addToCart, viewProduct } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme.text + " " + theme.background
      } px-14 py-32 h-auto w-full`}
    >
      <Title
        title="MEET THE SHUKRAN GREAT PRODUCTS."
        subTitle="100% Australian. 100% natural. The Queen Garnet plum has been lovingly
          cultivated to be ‘the queen of antioxidants’. The perfect sweet union
          of taste and wellbeing, it’s cherished by nutritionists and worshipped
          by foodies."
      />

      <div className=" relative h-auto w-full">
        {products.map((product, index) => (
          <div
            className={` flex ${
              index % 2 === 0 ? null : "flex-row-reverse ml-auto"
            } h-[700px] max-w-7xl items-center justify-between gap-20`}
            key={product.id}
          >
            <ProductImage image={product.image} />
            <div className="w-[40%] ">
              <div className="space-y-5 ">
                <div className="">
                  <Link
                    to="/product"
                    onClick={() => viewProduct(product)}
                    className="text-5xl font-medium font-lora"
                  >
                    {product.name}
                    <p className="text-lg mt-2 font-medium font-austin">
                      {product.tagLing}
                    </p>
                  </Link>
                </div>
                <PriceAndKgsDiv product={product} />
                <p className="text-md pb-2 mr-5 text-justify font-roboto">
                  {product.discription}
                </p>
                <WishAndShare product={product} />
                <div className="flex items-center gap-5 font-oswald text-sm">
                  <button
                    className={`border-2 ${theme.button1} rounded-full px-8 py-[10px] hover:scale-110 duration-300`}
                  >
                    BUY NOW
                  </button>
                  <button
                    className={` border-2 ${theme.button2} rounded-full px-8 py-[10px] hover:scale-110 duration-300 `}
                    onClick={() => addToCart(product)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;

const ProductImage = ({ image }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className=" w-[60%]">
      <div
        className={` p-5 h-[630px] w-[620px] ${theme.productBg} rounded-full  relative group mx-auto`}
      >
        <div
          className={`duration-300 group-hover:scale-105 h-full w-full  rounded-full ${theme.productBg} absolute top-0 left-0 transition-all`}
        ></div>
        <img
          src={image}
          alt=""
          className="h-full w-full relative object-cover "
        />
      </div>
    </div>
  );
};

const WishAndShare = ({ product }) => {
  const { handleWishList } = useContext(StoreContext);
  return (
    <div className="flex items-center gap-5 text-xl">
      <Link to="/product" className="text-xs underline">
        LEARN MORE
      </Link>
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
      <button className=" hover:text-sky-500 focus:text-sky-500 duration-300">
        <HiOutlineShare />
      </button>
    </div>
  );
};

const PriceAndKgsDiv = ({ product }) => {
  const { handleKgAndPrice } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex items-center text-2xl font-oswald">
      <TbCurrencyTaka />
      <p className="w-20">
        {product.priceAndKgs.map((item) => (item.active ? item.price : null))}
      </p>
      <div className="text-sm space-x-5 ml-5 font-normal font-roboto">
        {product.priceAndKgs.map((item, index) => (
          <button
            className={`py-[2px] px-2 border rounded-full ${
              item.active ? theme.button1 : ""
            } duration-500`}
            key={index}
            onClick={() => handleKgAndPrice(product, item)}
          >
            {item.kg} kg
          </button>
        ))}
      </div>
    </div>
  );
};

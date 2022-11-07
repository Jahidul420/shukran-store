import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import dchg from "../../assets/png/dChinigura.png";
import katari from "../../assets/png/katari.png";
import miniket from "../../assets/png/miniket2.png";
import najirshail from "../../assets/png/najirshail.png";
const Products = () => {
  return (
    <div className=" bg-purple-800 text-white px-10 py-20">
      <div className="w-[60%] m-auto text-center text-5xl font-zen space-y-8 mb-20">
        <h2>MEET THE QUEEN OF ANTIOXIDANTS.</h2>
        <p className=" text-xl font-openSans">
          100% Australian. 100% natural. The Queen Garnet plum has been lovingly
          cultivated to be ‘the queen of antioxidants’. The perfect sweet union
          of taste and wellbeing, it’s cherished by nutritionists and worshipped
          by foodies.
        </p>
      </div>
      <div>
        <ProductCartd
          image={najirshail}
          name="Dinajpuri Classic Chinigura Rice"
          subTitle="AUSTRALIAN PLUM POWDER"
          price={199}
          discription="Add a touch of royalty to any dish, with this versatile powder, made
            from nothing but freeze dried Queen Garnet plums.eeze dried Queen Garnet end."
          dircktion={false}
        />
        <ProductCartd
          image={dchg}
          name="Dinajpuri Classic Chinigura Rice"
          subTitle="AUSTRALIAN PLUM POWDER"
          price={199}
          discription="Add a touch of royalty to any dish, with this versatile powder, made
            from nothing but freeze dried Queen Garnet plums.eeze dried Queen Garnet end."
          dircktion={true}
        />
        <ProductCartd
          image={katari}
          name="Dinajpuri Classic Chinigura Rice"
          subTitle="AUSTRALIAN PLUM POWDER"
          price={199}
          discription="Add a touch of royalty to any dish, with this versatile powder, made
            from nothing but freeze dried Queen Garnet plums.eeze dried Queen Garnet end."
          dircktion={false}
        />
        <ProductCartd
          image={miniket}
          name="Dinajpuri Classic Chinigura Rice"
          subTitle="AUSTRALIAN PLUM POWDER"
          price={199}
          discription="Add a touch of royalty to any dish, with this versatile powder, made
            from nothing but freeze dried Queen Garnet plums.eeze dried Queen Garnet end."
          dircktion={true}
        />
        <ProductCartd
          image={najirshail}
          name="Dinajpuri Classic Chinigura Rice"
          subTitle="AUSTRALIAN PLUM POWDER"
          price={199}
          discription="Add a touch of royalty to any dish, with this versatile powder, made
            from nothing but freeze dried Queen Garnet plums.eeze dried Queen Garnet end."
          dircktion={false}
        />
      </div>
    </div>
  );
};

export default Products;

const ProductCartd = ({
  image,
  name,
  subTitle,
  price,
  discription,
  dircktion,
}) => {
  return (
    <div
      className={` flex ${
        dircktion ? "flex-row-reverse" : null
      } justify-between items-center h-[90vh] m-auto my-10`}
    >
      <div className=" w-[50%]">
        <div className=" p-10 h-[610px] w-[600px] bg-purple-900 rounded-full  relative group">
          <div className="duration-300 group-hover:scale-105 h-full w-full  rounded-full bg-purple-900 absolute top-0 left-0 transition-all"></div>
          <img
            src={image}
            alt=""
            className="h-full w-full relative object-cover "
          />
        </div>
      </div>

      <div className="w-[50%] ml-20">
        <div className="space-y-7">
          <div className="w-[70%]">
            <a href="#" className="text-4xl font-medium font-zen">
              {name}
              <p className="text-lg mt-2">{subTitle}</p>
            </a>
          </div>

          <div className="flex items-center text-2xl font-zen">
            <TbCurrencyTaka />
            <p className="">{price}</p>
            <div className="text-sm space-x-5 ml-10 font-normal font-openSans">
              <button className="py-[2px] px-2 border rounded-full focus:bg-white focus:text-purple-500 duration-300 ">
                1 kgs
              </button>
              <button className="py-[2px] px-2 border rounded-full focus:bg-white focus:text-purple-500 duration-300 ">
                5 kgs
              </button>
              <button className="py-[2px] px-2 border rounded-full focus:bg-white focus:text-purple-500 duration-300 ">
                10 kgs
              </button>
              <button className="py-[2px] px-2 border rounded-full focus:bg-white focus:text-purple-500 duration-300 ">
                25 kgs
              </button>
            </div>
          </div>

          <h2 className="text-xl w-[70%] text-left pb-2 font-zen">
            {discription}
          </h2>
          <a href="#" className="text-xs border-b-2 ">
            LEARN MORE
          </a>
          <div className="flex items-center gap-5 font-openSans text-sm">
            <button className=" border-2 border-white bg-white rounded-full px-8 py-[10px] text-purple-500">
              BUY NOW
            </button>
            <button className=" border-2 border-white text-white rounded-full px-8 py-[10px]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

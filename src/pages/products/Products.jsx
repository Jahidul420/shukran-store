import React, { useContext } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { HiOutlineShare } from "react-icons/hi";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import StoreContext from "../../context/StoreContext";
const Products = () => {
  const { products, addToCart, handleWishList, handleKgAndPrice } = useContext(StoreContext);
  // const [newProduct, setNewProduct] = useState({image: "", name: "", tagLine: "", });
  // const {}
  // const xyz = (product)=>{
    
  // }
  return (
    <div className="  text-white px-10 py-20 bg-[#570A57]">
      <div className="w-[60%] m-auto text-center text-5xl font-zen space-y-8 mb-20">
        <h2>MEET THE QUEEN OF ANTIOXIDANTS.</h2>
        <p className=" text-xl font-openSans">
          100% Australian. 100% natural. The Queen Garnet plum has been lovingly
          cultivated to be ‘the queen of antioxidants’. The perfect sweet union
          of taste and wellbeing, it’s cherished by nutritionists and worshipped
          by foodies.
        </p>
      </div>
      <div className=" relative">
        {products.map((product, index) => (
          <div
            className={` flex ${
              index % 2 === 0 ? null : "flex-row-reverse"
            } justify-between items-center h-[90vh] m-auto my-10`}
            key={product.id}
          >
            <div className=" w-[50%]">
              <div className=" p-10 h-[610px] w-[600px] bg-[#4a094a] rounded-full  relative group">
                <div className="duration-300 group-hover:scale-105 h-full w-full  rounded-full bg-[#4a094a] absolute top-0 left-0 transition-all"></div>
                <img
                  src={product.image}
                  alt=""
                  className="h-full w-full relative object-cover "
                />
              </div>
            </div>

            <div className="w-[50%] ml-20">
              <div className="space-y-7">
                <div className="w-[70%]">
                  <Link to="/product" className="text-4xl font-medium font-zen">
                    {product.name}
                    <p className="text-lg mt-2">{product.tagLine}</p>
                  </Link>
                </div>

                <div className="flex items-center text-2xl font-zen">
                  <TbCurrencyTaka />
                  <p className="w-20">
                    {product.priceAndKgs.map((item) =>
                      item.active ? item.price : null
                    )}
                  </p>
                  <div className="text-sm space-x-5 ml-5 font-normal font-openSans">
                    {product.priceAndKgs.map((item, index) => (
                      <button
                        className={`py-[2px] px-2 border rounded-full ${
                          item.active ? "bg-white text-purple-500 " : ""
                        } duration-500`}
                        key={index}
                        onClick={()=>handleKgAndPrice(product, item)}
                      >
                        {item.kg} kg
                      </button>
                    ))}
                  </div>
                </div>

                <h2 className="text-xl w-[70%] text-left pb-2 font-zen">
                  {product.discription}
                </h2>
                <div className="flex items-center gap-5 text-xl">
                  <Link to="/product" className="text-xs border-b-2 ">
                    LEARN MORE
                  </Link>
                  <button>
                    {product.wish ? (
                      <BsSuitHeartFill
                        className=" text-rose-500 duration-300"
                        onClick={() => handleWishList(product, false)}
                      />
                    ) : (
                      <BsSuitHeart
                        onClick={() => handleWishList(product, true)}
                      />
                    )}
                  </button>
                  <button className=" hover:text-sky-500 focus:text-sky-500 duration-300">
                    <HiOutlineShare />
                  </button>
                </div>

                <div className="flex items-center gap-5 font-oswald text-sm">
                  <button className=" border-2 border-white bg-white rounded-full px-8 py-[10px] text-purple-500 hover:scale-110 duration-300">
                    BUY NOW
                  </button>
                  <button
                    className=" border-2 border-white text-white rounded-full px-8 py-[10px] hover:scale-110 duration-300"
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

export default Products;

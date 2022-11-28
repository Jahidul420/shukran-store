import { createContext, useContext, useState } from "react";
import chg from "../assets/png/dChinigura.png";
import ktr from "../assets/png/katari.png";
import min from "../assets/png/miniket.png";
import njh from "../assets/png/najirshail.png";
import recepi1 from "../assets/recipe/recipy (1).jfif";
import recepi2 from "../assets/recipe/recipy (1).png";
import recepi3 from "../assets/recipe/recipy (2).jfif";
import recepi4 from "../assets/recipe/recipy (3).jfif";
import recepi5 from "../assets/recipe/recipy (4).jfif";
import recepi6 from "../assets/recipe/recipy (5).jfif";
const StoreContext = createContext();
const ThemContext = createContext();
export function useThem() {
  return useContext(ThemContext);
}
// const p = JSON.stringify(newProduct);
// return setCart((prevState) => [JSON.parse(p), ...prevState]);
export function StoreContextProvider({ children }) {
  const productsArr = [
    {
      id: 100,
      name: "Dinajpuri Classic Nahirshil Rice",
      tagLing: "DINAJPUR PLUM POWDER",
      quantity: 1,
      image: njh,
      priceAndKgs: [
        { active: true, kg: 1, price: 200 },
        { active: false, kg: 5, price: 1000 },
        { active: false, kg: 10, price: 2000 },
        { active: false, kg: 25, price: 5000 },
      ],
      wish: false,
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 101,
      name: "Dinajpuri Classic Chinigura Rice",
      tagLing: "DINAJPUR PLUM POWDER",
      quantity: 1,
      image: chg,
      priceAndKgs: [
        { active: true, kg: 1, price: 200 },
        { active: false, kg: 5, price: 1000 },
        { active: false, kg: 10, price: 2000 },
        { active: false, kg: 25, price: 5000 },
      ],
      wish: false,
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 102,
      name: "Dinajpuri Classic katari Rice",
      tagLing: "DINAJPUR PLUM POWDER",
      quantity: 1,
      image: ktr,
      priceAndKgs: [
        { active: true, kg: 1, price: 200 },
        { active: false, kg: 5, price: 1000 },
        { active: false, kg: 10, price: 2000 },
        { active: false, kg: 25, price: 5000 },
      ],
      wish: false,
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 103,
      name: "Dinajpuri Classic Miniket Rice",
      tagLing: "DINAJPUR PLUM POWDER",
      quantity: 1,
      image: min,
      priceAndKgs: [
        { active: true, kg: 1, price: 200 },
        { active: false, kg: 5, price: 1000 },
        { active: false, kg: 10, price: 2000 },
        { active: false, kg: 25, price: 5000 },
      ],
      wish: false,
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const recipeArr = [
    {
      image: recepi1,
      name: "Kacchi Breyany",
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy",
    },
    {
      image: recepi2,
      name: "Kacchi Breyany",
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy",
    },
    {
      image: recepi3,
      name: "Kacchi Breyany",
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy",
    },
    {
      image: recepi4,
      name: "Kacchi Breyany",
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy",
    },
    {
      image: recepi5,
      name: "Kacchi Breyany",
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy",
    },
    {
      image: recepi6,
      name: "Kacchi Breyany",
      discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy",
    },
  ];
  const [products, setproducts] = useState(productsArr);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState(
    products.filter((product) => product.wish === true)
  );

  const indexFinder = (mainArr, product) => {
    for (let i = 0; i < mainArr.length; i++) {
      if (mainArr[i].id === product.id) {
        return i;
      }
    }
  };

  // THIS FUNCTION ADD A PRODUCT TO CART
  const addToCart = (product) => {
    let productPrice = 0;
    let productKg = 0;
    product.priceAndKgs.map((item) =>
      item.active ? ((productPrice = item.price), (productKg = item.kg)) : null
    );
    const newProduct = {
      id: product.id,
      name: product.name,
      image: product.image,
      tagLing: product.tagLing,
      quantity: product.quantity,
      wish: product.wish,
      price: productPrice,
      kg: productKg,
      discription: product.discription,
    };
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === newProduct.id && cart[i].kg === newProduct.kg) {
        cart[i].quantity += 1;
        return setCart((prevState) => [...prevState]);
      }
    }
    return setCart((prevState) => [newProduct, ...prevState]);
  };
  // THIS FUNCTION ADD A PRODUCT TO WISHLIST
  const handleWishList = (product, action) => {
    const index = indexFinder(products, product);
    if (index >= 0 && products[index].id === product.id) {
      products[index].wish = action;
      setproducts((prevState) => [...prevState]);
      const trueWish = products.filter((product) => product.wish === true);
      return setWish([...trueWish]);
    }
  };

  // THIS FUNCTION HANDLING CART PRODUCTS QUANTITY INCREMENT AND DECREMENT
  const handleQuantity = (product, action) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id && cart[i].kg === product.kg) {
        cart[i].quantity += action;
        return setproducts((prevState) => [...prevState]);
      }
    }
  };

  // THIS FUNCTION HANDLE PRODUCT KG AND PRice
  const handleKgAndPrice = (product, kg) => {
    const index = indexFinder(products, product);
    if (index >= 0 && products[index].id === product.id) {
      for (let x = 0; x < products[index].priceAndKgs.length; x++) {
        if (products[index].priceAndKgs[x].kg === kg.kg) {
          products[index].priceAndKgs[x].active = true;
        } else {
          products[index].priceAndKgs[x].active = false;
        }
      }
    }
    return setproducts((prevState) => [...prevState]);
  };

  // THIS FUNCTION REMOvE A PRODUCT TO THE CART
  const removeToCart = (product) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id && cart[i].kg === product.kg) {
        cart.splice(i, 1);
        return setCart((prevState) => [...prevState]);
      }
    }
  };

  const [product, setproduct] = useState();
  const viewProduct = (product) => {
    setproduct(product);
  };
  // THIS FUNCTION TOGGLE CART
  const [showCart, setShowCart] = useState();
  const handleShowCart = () => {
    return setShowCart(!showCart);
  };

  // SITE THEMING FUNCTIONILITY
  const [mode, setMode] = useState(false);
  const theme = mode
    ? {
        text: "text-black",
        background: "bg-white",
        productBg: "bg-black",
        popularBg: "bg-black/50",
        button1: "bg-black text-white border-black",
        button2: "bg-transprent text-black border-black",
      }
    : {
        text: "text-white",
        background: "bg-[#43283A]",
        productBg: "bg-[#381F30]",
        popularBg: "bg-[#381F30]",
        button1: "bg-white text-black border-white",
        button2: "bg-transprent text-white border-white",
      };

  const handleMode = () => {
    setMode((prevState) => !prevState);
  };

  return (
    <StoreContext.Provider
      value={{
        theme,
        showCart,
        products,
        wish,
        cart,
        recipeArr,
        product,
        viewProduct,
        addToCart,
        removeToCart,
        handleWishList,
        handleQuantity,
        handleKgAndPrice,
        handleShowCart,
        handleMode,
      }}
    >
      <ThemContext.Provider value={{}}>{children}</ThemContext.Provider>
    </StoreContext.Provider>
  );
}

export default StoreContext;

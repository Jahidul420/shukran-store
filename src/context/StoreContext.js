import { createContext, useState } from "react";
import chg from "../assets/png/dChinigura.png";
import ktr from "../assets/png/katari.png";
import min from "../assets/png/miniket.png";
import njh from "../assets/png/najirshail.png";
const StoreContext = createContext();
// const p = JSON.stringify(newProduct);
// return setCart((prevState) => [JSON.parse(p), ...prevState]);
export function StoreContextProvider({ children }) {
  const productsArr = [
    {
      id: 100,
      name: "Dinajpuri Classic Nahirshil Nahirshil",
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
        "Add a touch of royalty to any dish, with this versatile powder, made from nothing but freeze dried Queen Garnet plums.eeze dried Queen Garnet end.",
    },
    {
      id: 101,
      name: "Dinajpuri Classic Chinigura",
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
        "Add a touch of royalty to any dish, with this versatile powder, made from nothing but freeze dried Queen Garnet plums.eeze dried Queen Garnet end.",
    },
    {
      id: 102,
      name: "Dinajpuri Classic katari",
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
        "Add a touch of royalty to any dish, with this versatile powder, made from nothing but freeze dried Queen Garnet plums.eeze dried Queen Garnet end.",
    },
    {
      id: 103,
      name: "Dinajpuri Classic Miniket",
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
        "Add a touch of royalty to any dish, with this versatile powder, made from nothing but freeze dried Queen Garnet plums.eeze dried Queen Garnet end.",
    },
  ];
  const [products, setproducts] = useState(productsArr);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState(
    products.filter((product) => product.wish === true)
  );

  // THIS FUNCTION ADD A PRODUCT TO CART
  const addToCart = (product) => {
    let productPrice = 0;
    let productKg = 0;
    product.priceAndKgs.map((item) =>
      item.active ? ((productPrice = item.price), (productKg = item.kg)) : null
    );
    // CREATE A NEW PRODUCT OBJECT AND SET IN CART
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
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        products[i].wish = action;
        setproducts((prevState) => [...prevState]);
        const trueWish = products.filter((product) => product.wish === true);
        return setWish([...trueWish]);
      }
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

  // THIS FUNCTION HANDLE PRODUCT KG AND PRICE
  const handleKgAndPrice = (product, kg) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        for (let x = 0; x < products[i].priceAndKgs.length; x++) {
          if (products[i].priceAndKgs[x].kg === kg.kg) {
            products[i].priceAndKgs[x].active = true;
          } else {
            products[i].priceAndKgs[x].active = false;
          }
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

  // THIS FUNCTION TOGGLE CART
  const [showCart, setShowCart] = useState();
  const handleShowCart = () => {
    return setShowCart(!showCart);
  };
  return (
    <StoreContext.Provider
      value={{
        showCart,
        products,
        wish,
        cart,
        addToCart,
        removeToCart,
        handleWishList,
        handleQuantity,
        handleKgAndPrice,
        handleShowCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContext;

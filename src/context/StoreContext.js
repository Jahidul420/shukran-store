import { createContext, useState } from "react";
import productsArr from "../data/ProductsData";
import recipeArr from "../data/RecipeData";
const StoreContext = createContext();

// const p = JSON.stringify(newProduct);
// return setCart((prevState) => [JSON.parse(p), ...prevState]);
export function StoreContextProvider({ children }) {
  const [products, setproducts] = useState(productsArr);
  const recepes = recipeArr;
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


  return (
    <StoreContext.Provider
      value={{
        showCart,
        products,
        wish,
        cart,
        recepes,
        product,
        viewProduct,
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

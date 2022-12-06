import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import LoginSignup from "./pages/loginSignup/LoginSignup";
import Products from "./pages/products/Products";
import Profile from "./pages/profile/Profile";
import Product from "./product/Product";

function App() {
  const Warper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <Warper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Warper>
  );
}

export default App;

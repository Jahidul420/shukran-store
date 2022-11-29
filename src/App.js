import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import ViewRecipe from "./pages/recipe/ViewRecipe";
import Product from "./product/Product";
import Scroll from "./product/Scroll";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/scroll" element={<Scroll />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/recipe" element={<ViewRecipe />} />
    </Routes>
  );
}

export default App;

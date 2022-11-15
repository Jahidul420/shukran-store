import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Product from "./product/Product";
import Scroll from "./product/Scroll";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/scroll" element={<Scroll />} />
        </Routes>
    </div>
  );
}

export default App;

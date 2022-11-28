import React from "react";
import NavBar from "../../global/NavBar";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import MapBanner from "../mapbanner/MapBanner";
import PartnarShip from "../partnarship/PartnarShip";
import Popular3 from "../popular/Popular3";
import Products from "../products/Products";
import Question from "../question/Question";
import Recipe from "../recipe/Recipe";

const Home = () => {

  return (
    <div className="scroll-smooth">
      <NavBar />
      <Banner />
      <Popular3 />
      <Products />
      <MapBanner />
      <Question />
      <Recipe />
      <PartnarShip />
      <Footer />
    </div>
  );
};

export default Home;

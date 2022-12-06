import React from "react";
import Nav from "../../global/Nav";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import MapBanner from "../mapbanner/MapBanner";
import PartnarShip from "../partnarship/PartnarShip";
import Popular3 from "../popular/Popular3";
import HomeProducts from "../products/HomeProducts";
import Question from "../question/Question";
import Recipe from "../recipe/Recipe";
const Home = () => {
  return (
    <div className="scroll-smooth">
      <Nav />
      <Banner />
      <Popular3 />
      <HomeProducts />
      <MapBanner />
      <Question />
      <Recipe />
      <PartnarShip />
      <Footer />
    </div>
  );
};

export default Home;

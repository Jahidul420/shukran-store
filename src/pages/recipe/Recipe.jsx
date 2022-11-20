import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../../context/StoreContext";
const Recipe = () => {
  const { recipeArr } = useContext(StoreContext);
  return (
    <div className="h-auto w-screen py-32 text-center" >
      <h2 className=" text-5xl w-4/6 font-austin mx-auto leading-none mb-20">SHUKRAN ROYAL RECIPES</h2>
      <Splide
        options={{
          drag: "free",
          arrows: false,
          perPage: 4,
          gap: "30rem",
          pagination: false,
          padding: 50,
        }}
      >
        {recipeArr.map((recipe, index) => (
          <SplideSlide key={index}>
            <Link to="/" >
              <RecipeCard recipe={recipe} />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Recipe;

const RecipeCard = ({ recipe }) => {
  return (
    <div className="w-[400px]">
      <div className="h-[450px] w-full overflow-hidden group">
        <img
          src={recipe.image}
          alt=""
          className="h-full w-full object-cover group-hover:scale-110 duration-300"
        />
      </div>

      <div className=" text-center w-4/6 mx-auto font-austin space-y-3">
        <button className="text-xs font-roboto mt-4">READ MORE</button>
        <h2 className="text-3xl">{recipe.name}</h2>
        <p className="">{recipe.discription}</p>
      </div>
    </div>
  );
};

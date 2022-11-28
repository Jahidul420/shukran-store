import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Title from "../../component/Title";
import StoreContext from "../../context/StoreContext";

const Recipe = () => {

  const { recipeArr } = useContext(StoreContext);
  return (
    <div className="h-auto w-screen py-32 text-center bg-white">
      <Title
        title="THE ROYAL RECIPYS"
        subTitle="There are many recipys and items that you can enjoy with SHUKRAN Rice"
      />
      <div className="mt-20">
        <Splide
          options={{
            drag: "free",
            arrows: false,
            perPage: 4,
            pagination: false,
            marginRight: 200,
            type: "loop",
            gap: "30rem",
          }}
        >
          {recipeArr.map((recipe, index) => (
            <SplideSlide key={index}>
              <Link to="/">
                <RecipeCard recipe={recipe} />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
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

      <div className=" text-center w-5/6 mx-auto font-austin space-y-3">
        <button className="text-xs font-roboto mt-4">READ MORE</button>
        <h2 className="text-3xl">{recipe.name}</h2>
        <p className="">{recipe.discription}</p>
      </div>
    </div>
  );
};

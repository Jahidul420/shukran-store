import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import Cook from "../../assets/coodk.png";
import StoreContext from "../../context/StoreContext";
import ThemeContext from "../../context/ThemeContext";
const ViewRecipe = () => {
  const { recepe } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);
  const [ingrediant, setIngrediant] = useState(false);
  const handleIngrediant = () => {
    setIngrediant(!ingrediant);
  };
  return (
    <div className={`${theme.background} h-screen w-screen`}>
      <div className="flex justify-between items-center text-4xl h-20 max-w-7xl mx-auto">
        <Link
          to="/"
          className="lg:bg-transparent text-white px-3 py-2 rounded-xl flex items-center"
        >
          <GiKnifeFork />
        </Link>
        {ingrediant ? (
          <button
            className="w-40 h-12 flex justify-center items-center rounded-lg border-2 border-white bg-white/30 backdrop-blur-2xl text-white text-lg"
            onClick={handleIngrediant}
          >
            <img src={Cook} alt="" className="h-full object-cover" />
            Ingrediant
          </button>
        ) : (
          <button
            className="w-40 h-12 flex justify-center items-center rounded-lg border-2 border-white bg-white/30 backdrop-blur-2xl text-white text-lg"
            onClick={handleIngrediant}
          >
            <img src={Cook} alt="" className="h-full object-cover" />
            Instructions
          </button>
        )}
      </div>

      <div className="max-w-7xl bg-white p-10 mx-auto flex h-[85%] justify-between rounded-md">
        <div className=" w-3/6 flex items-center rounded-md overflow-hidden bg-green-200">
          <img
            src={recepe.image}
            alt=""
            className=" h-full w-full object-cover "
          />
        </div>

        <div className=" w-3/6">
          <div className="h-full pl-14 overflow-hidden overflow-y-scroll">
            <h1 className=" text-3xl font-austin mb-5">
              Shukran Chinigura Rice Kacchi Breyany
            </h1>
            {ingrediant ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className=" text-justify text-base">{recepe.discription}</p>
              </motion.div>
            ) : (
              <motion.ul
                className=" list-disc space-y-2 ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {recepe.ingrediant.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </motion.ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipe;

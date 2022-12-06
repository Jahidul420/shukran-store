
import chg from "../assets/png/dChinigura.png";
import ktr from "../assets/png/katari.png";
import min from "../assets/png/miniket.png";
import njh from "../assets/png/najirshail.png";



const productsArr = [
  {
    id: 100,
    name: "Nahirshil Rice",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 101,
    name: "Chinigura Rice",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 102,
    name: "katari Rice",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 103,
    name: "Miniket Rice",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  
];
export default productsArr;
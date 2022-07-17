import { neog, friends } from "../assets";
import axios from "axios"

export const categories = [
  {
    categoryName: "NeoG",
    description: "Take this Quiz to test your knowledge about Neog Camp",
    image: neog,
  },
  {
    categoryName: "F.R.I.E.N.D.S",
    description:
      "Think you're an expert on all things Central Perk? Take this Friends quiz to prove whether or not you're a true fan.",
    image: friends,
  },
];

const getData = async () => {
    const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=29`)
    console.log(response);
}

getData()
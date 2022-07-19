import "./quiz-card.css";
import "../../Utils/styles.css";
import { useQuiz } from "../context/quiz-context";
import { Link } from "react-router-dom";

export const CategoryCard = ({ categoryItem }) => {
  const { categoryName, image, description, categoryNumber } = categoryItem;
  const {  quizDispatch } = useQuiz();
  return (
    <Link to="/rules">
      <div
        onClick={() => {
          quizDispatch({ type: "SELECT_CATEGORY", payload: categoryNumber });
        }}
        className="categoryCard flex_c cursor-pointer"
      >
        <img src={image} alt="" />
        <h1>{categoryName}</h1>
        <p className="text-description">{description}</p>
      </div>
    </Link>
  );
};

import "./nav.css";
import "../../Utils/styles.css";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/quiz-context";

export default function Nav() {
  const navigate = useNavigate();
  const { quizDispatch } = useQuiz();
  return (
    <nav className="nav-bar">
      <h1
        onClick={() => {
          navigate("/");
          quizDispatch({ type: "CLEAR_CATEGORY" });
        }}
        className="nav-title cursor-pointer"
      >
        QuizUp
      </h1>
    </nav>
  );
}

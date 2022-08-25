import { Nav } from "../../components";
import "./results-page.css";
import "../../Utils/styles.css";
import { useQuiz } from "../../components/context/quiz-context";
import { useNavigate } from "react-router-dom";
import { quizData } from "../../data/quizData";

export default function ResultsPage() {
  const { quizState, quizDispatch } = useQuiz();
  const navigate = useNavigate();
  const { questionData, score, categoryValue } = quizState;
  console.log(questionData);

  return (
    <div className="resultspage-wrapper flex_c">
      <Nav />
      <h1 className="final-score">Final Score : {score} / {quizData.categories[categoryValue].questions.length} </h1>
      <div className="results-container flex_c">
        {questionData.length !== 0 ?  questionData.map((data) => {
          return (
            <>
              <div className="question-box">{data.newQuestion}</div>
              {data.newOptions.map((item) =>
                item.map((options) => {
                  const isCorrect = data.correctAnswer === options;
                  const isSelected = data.selectedAnswer === options;
                  return (
                    <button
                      className={`options cursor-pointer
                      ${isCorrect ? "green" : isSelected ? "red" : ""}
                      
                      `}
                    >
                      {options}
                    </button>
                  );
                })
              )}
            </>
          );
        }) : (
          <><h1 className="no-answerSelected-msg">You Did Not Select Any Answer 😔</h1></>
        )}
      </div>
      <button
        onClick={() => {
          navigate("/");
          quizDispatch({ type: "CLEAR_CATEGORY" });
        }}
        className="btn-returnToHome cursor-pointer"
      >
        Return to Home Page
      </button>
    </div>
  );
}

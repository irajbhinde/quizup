import { Nav } from "../../components";
import "./question-page.css";
import "../../Utils/styles.css";
import { useEffect, useState } from "react";
import { useQuiz } from "../../components/context/quiz-context";
import { quizData } from "../../data/quizData";
import { useNavigate } from "react-router-dom";

export default function QuestionPage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState();
  const { quizState, quizDispatch } = useQuiz();
  const { categoryValue, score } = quizState;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentOptions, setCurrentOptions] = useState([]);

  useEffect(() => {
    setSelectedOption();
    const options = [
      ...quizData.categories[categoryValue].questions[currentQuestion]
        .incorrectOptions,
      quizData.categories[categoryValue].questions[currentQuestion].answer,
    ];

    shuffleOptions(options);
    setCurrentOptions(options);
  }, [currentQuestion]);

  const shuffleOptions = (opts) => {
    opts.sort(() => Math.random() - 0.5);
  };

  const handleBoxColors = (names) => {
    if (
      selectedOption === names &&
      selectedOption ===
        quizData.categories[categoryValue].questions[currentQuestion].answer
    ) {
      return "correct";
    } else if (
      selectedOption === names &&
      selectedOption !==
        quizData.categories[categoryValue].questions[currentQuestion].answer
    ) {
      return "incorrect";
    } else if (
      names ===
      quizData.categories[categoryValue].questions[currentQuestion].answer
    ) {
      return "correct";
    }
  };

  const handleSelect = (names) => {
    setSelectedOption(names);
    if (
      names ===
      quizData.categories[categoryValue].questions[currentQuestion].answer
    ) {
      quizDispatch({ type: "SCORE_INCREMENT" });
    }
    const resultPageData = {
      newQuestion:
        quizData.categories[categoryValue].questions[currentQuestion].question,
      newOptions: [currentOptions],
    };
    quizDispatch({ type: "RESULTS_DATA", payload: resultPageData });
    const selectedOption = names;
    quizDispatch({ type: "SET_SELECTED_OPTION", payload: selectedOption });
  };

  const listItems = currentOptions.map((names) => {
    return (
      <button
        className={`options cursor-pointer ${
          selectedOption && handleBoxColors(names)
        }`}
        onClick={() => {
          handleSelect(names);
        }}
        disabled={selectedOption}
      >
        {names}
      </button>
    );
  });
  return (
    <div className="questionpage-wrapper">
      <Nav />
      <div className="questions-container flex_c">
        <div className="container-header flex_r">
          <p>
            Question : {currentQuestion + 1}/
            {quizData.categories[categoryValue].questions.length}
          </p>
          <p>Score : {score}</p>
        </div>
        <div className="question-box">
          <p>
            {
              quizData.categories[categoryValue].questions[currentQuestion]
                .question
            }
          </p>
        </div>
        {listItems}
        {currentQuestion === 4 ? (
          <button
            onClick={() => {
              navigate("/results");
            }}
            className="btn-nextQuestion"
          >
            Submit & Go to Results Page
          </button>
        ) : (
          <button
            onClick={() => {
              setCurrentQuestion(currentQuestion + 1);
            }}
            className="btn-nextQuestion"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}

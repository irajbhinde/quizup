import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducer/quiz-reducer";

const QuizContext = createContext(null);
const useQuiz = () => useContext(QuizContext);
const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, {
    quizQuestions: [],
    categoryValue: null,
    currentQuestion: 0,
    score: 0,
    questionData: [],
    selectedOption: [],
  });

  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export { useQuiz, QuizProvider };

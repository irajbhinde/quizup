export const quizReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SELECT_CATEGORY":
      return {
        ...state,
        categoryValue: payload,
      };
    case "SCORE_INCREMENT":
      return {
        ...state,
        score: state.score + 1,
      };
    case "RESULTS_DATA":
      return {
        ...state,
        questionData: [...state.questionData, payload],
      };
    case "CLEAR_CATEGORY":
      return {
        ...state,
        quizQuestions: [],
        categoryValue: null,
        currentQuestion: 0,
        score: 0,
        questionData: [],
      };
    default:
      return state;
  }
};

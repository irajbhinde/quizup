export const quizReducer = (state, action) => {
  console.log("triggered", action);
  const { type, payload } = action;
  switch (type) {
    case "CURRENT_QUESTIONS":
      return {
        ...state,
        quizQuestions: payload,
      };
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
    case "SET_SELECTED_OPTION":
      return {
        ...state,
        selectedOption: [...state.selectedOption, payload],
      };
    default:
      break;
  }
};

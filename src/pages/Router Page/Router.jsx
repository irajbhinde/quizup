import { Routes, Route } from "react-router-dom";
import { HomePage, RulesPage, QuestionPage, ResultsPage } from "../index";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/quiz" element={<QuestionPage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
}

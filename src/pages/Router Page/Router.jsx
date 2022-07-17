import { Routes, Route } from "react-router-dom";
import { HomePage, RulesPage } from "../index";
import QuestionPage from "../Question Page/QuestionPage";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/quiz" element={<QuestionPage />} />
    </Routes>
  );
}

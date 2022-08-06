import MockmanEs from "mockman-js";
import { Routes, Route } from "react-router-dom";
import RequiresAuth from "../../Utils/RequiresAuth";
import {
  HomePage,
  RulesPage,
  QuestionPage,
  ResultsPage,
  Loginpage,
  SignupPage,
} from "../index";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/rules"
        element={
          <RequiresAuth>
            <RulesPage />
          </RequiresAuth>
        }
      />
      <Route
        path="/quiz"
        element={
          <RequiresAuth>
            <QuestionPage />
          </RequiresAuth>
        }
      />
      <Route
        path="/results"
        element={
          <RequiresAuth>
            <ResultsPage />
          </RequiresAuth>
        }
      />
      <Route path="/mockman" element={<MockmanEs />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

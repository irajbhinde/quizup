import "./nav.css";
import "../../Utils/styles.css";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/quiz-context";
import { useAuth } from "../context/auth-context";

export default function Nav() {
  const { auth, setAuth } = useAuth();
  const { authStatus } = auth;
  const navigate = useNavigate();
  const { quizDispatch } = useQuiz();
  const signoutHandler = () => {
    localStorage.clear();
    setAuth({
      authToken: null,
      authStatus: false,
    });
    navigate("/");
  };
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
      {authStatus ? (
        <div>
          <p
            onClick={() => signoutHandler()}
            style={{ color: "var(--red)" }}
            className="logout-header cursor-pointer"
          >
            Logout
          </p>
        </div>
      ) : (
        <div className="login-signup-header flex_r">
          <p
            onClick={() => {
              navigate("/login");
            }}
            style={{ color: "#00cc00" }}
            className="cursor-pointer"
          >
            Login
          </p>
          <p
            onClick={() => {
              navigate("/signup");
            }}
            className="cursor-pointer"
          >
            Signup
          </p>
        </div>
      )}
    </nav>
  );
}

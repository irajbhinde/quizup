import "./nav.css";
import "../../Utils/styles.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h1 className="nav-title">QuizUp</h1>
      </Link>
    </nav>
  );
}

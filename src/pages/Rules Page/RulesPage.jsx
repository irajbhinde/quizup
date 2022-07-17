import { Nav } from "../../components";
import "./rules-page.css";
import "../../Utils/styles.css";

export default function RulesPage() {
  return (
    <div className="rulespage-wrapper  flex_c">
      <Nav />
      <div className="rules-container">
        <h1 className="text-rule">Rules</h1>
        <div className="rules-content flex_c">
          <p>1. Play the quiz with full honesty</p>
          <p> 2. Do not google for answers</p>
          <p>
            {" "}
            3. There's no negative marking, so if you don't know the answers
            then let your luck answer it
          </p>
          <p> 4. Each correct answer is awarded with 1 point</p>
        </div>
      </div>
      <footer className="rulespage-footer">
        <button className="btn-letsgo cursor-pointer">
            Lets Go! 
        </button>
      </footer>
    </div>
  );
}

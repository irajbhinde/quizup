import "./home-page.css";
import { CategoryCard, Nav } from "../../components";
import "../../Utils/styles.css";
import { categories } from "../../data/data";

export default function HomePage() {
  return (
    <div className="homepage-wrapper">
      <Nav />
      <div className="category-container flex_c">
        <h1 className="text-category">Categories</h1>
        <div className="category-cards-container flex_r align-center">
          {categories.map((card) => (
            <CategoryCard categories={card} key={card.categoryName} />
          ))}
        </div>
      </div>
    </div>
  );
}

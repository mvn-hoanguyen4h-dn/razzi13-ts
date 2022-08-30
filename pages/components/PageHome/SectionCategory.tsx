import { useState } from "react";
import { categoryForBoy, categoryForGirl } from "../../data";
import CategorySlider from "../CategorySlider";

function SectionCategory() {
  const [forGirl, setForGirl] = useState(true);
  const [forBoy, setForBoy] = useState(false);

  return (
    <section className="category">
      <div className="container">
        <div className="category-wrapper">
          <h3 className="heading-title">Shop by Category</h3>
          <ul className="category-list">
            <li className="category-item">
              <button
                className={"btn btn-category" + (forGirl ? " active" : "")}
                onClick={() => {
                  setForGirl(true);
                  setForBoy(false);
                }}
              >
                Girls
              </button>
            </li>
            <li className="category-item">
              <button
                className={"btn btn-category" + (forBoy ? " active" : "")}
                onClick={() => {
                  setForGirl(false);
                  setForBoy(true);
                }}
              >
                Boys
              </button>
            </li>
          </ul>
          <div className="category-all">
            <CategorySlider
              category={categoryForGirl}
              className={"category-girl" + (forGirl ? " active" : "")}
            />
            <CategorySlider
              category={categoryForBoy}
              className={"category-boy" + (forBoy ? " active" : "")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionCategory;

import { useState } from "react";
import data from "./data";

import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = data[index];

  const increaseReviewHandler = () => {
    if (index == data.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const decreaseReviewHandler = () => {
    if (index == 0) {
      setIndex(data.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  const randomClickHandler = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      increaseReviewHandler(randomNumber);
      return;
    }
    setIndex(randomNumber);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button
            type="button"
            className="prev-btn"
            onClick={decreaseReviewHandler}
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className="next-btn"
            onClick={increaseReviewHandler}
          >
            <FaChevronRight />
          </button>
        </div>

        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomClickHandler}
        >
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;

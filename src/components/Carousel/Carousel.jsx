import React, { useState } from "react";
import "./Carousel.scss";

function Carousel({ images }) {
  const [hat, setHat] = useState(0);

  const nextSlide = () => {
    setHat((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setHat((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={prevSlide}>
        {"<"}
      </button>
      <img src={images[hat]} alt="Carousel Slide" />
      <button className="next-button" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
}

export default Carousel;

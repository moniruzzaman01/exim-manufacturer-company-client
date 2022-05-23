import React from "react";

const Carousel = () => {
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <div className="carousel w-full">
      {images.map((image, key) => (
        <div key={key} id="slide1" className="carousel-item relative w-full">
          <img src="" className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;

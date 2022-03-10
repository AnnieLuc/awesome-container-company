import React from 'react';
import CarouselSlide from './CarouselSlide';
import features from '../utils/features';

function Carousel() {
  const renderSlide = () => {
    return (
      features.map((slide, index) => {
        if (index === 0) {
          return (
            <div key={slide.id} className="carousel-item active relative float-left w-full">
              <CarouselSlide slide={slide} />
            </div>
          );
        }
        return (
          <div key={slide.id} className="carousel-item relative float-left w-full">
            <CarouselSlide slide={slide} />
          </div>
        );
      })
    );
  }
  return (
    <div id="carouselExampleControls" className="max-w-[1212px] mx-auto carousel slide relative shadow rounded-3" data-bs-ride="carousel">
      <div className="carousel-inner relative w-full overflow-hidden">
        {renderSlide(features)}
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-back-icon inline-block relative right-[130px]" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-forward-icon inline-block relative left-[130px]" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
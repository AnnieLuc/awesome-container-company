import React          from 'react';
import PropTypes  		from 'prop-types';
import './Carousel.css';

/**
 * The **Carousel** component makes use of 'Tailwind Elements' library to make a gallery.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Carousel({features}) {
  const renderListItems = (list) => (
    list.map((item, index) => (
      <li key={index} className="flex items-center gap-x-[10px]">
        <div className="list-icon"></div>
        <p className="text-sm font-normal leading-8 text-primary sm:leading-6">
          {item}
        </p>
      </li>
    ))
  );

  const renderCarouselSlide = (slide) => {
    const { image, features, sizing } = slide;
    return (
      <article className="w-full w-max-[1212px] min-h-[600px] pt-[45px] pb-[35px] bg-secondary-100 
      flex rounded-[3px] md:flex-col md:items-center md:max-w-[555px] md:min-h-[910px] sm:max-w-[355px] sm:max-h-[891px]">
        <div className="w-full max-w-[520px] flex justify-center items-center md:max-w-[339px]">
          <img src={image} alt="container" className="w-full object-contain object-center" />
        </div>
        <div className="box-border pl-[79px] w-full sm:px-[16px]">
          <h3 className="mb-[16px] text-base font-bold leading-6 text-primary">Features</h3>
          <ul className="list-none">
            {renderListItems(features)}
          </ul>
          <h3 className="mt-[40px] mb-[16px] text-base font-bold leading-6 text-primary">Sizing</h3>
          <ul className="list-none">
            {renderListItems(sizing)}
          </ul>
        </div>

      </article>
    );

  }

  const renderSlides = () => (
      features.map((slide, index) => {
        // Return visible slide
        if (index === 0) {
          return (
            <div key={slide.id} className="carousel-item active float-left w-full">
              {renderCarouselSlide(slide)}
              <p className="hidden sm:block text-primary text-sm leading-[20px] absolute bottom-[-55px] left-[45%]">
                {`${index + 1}/${features.length}`}
              </p>
            </div>
          );
        }

        // Return hidden slides
        return (
          <div key={slide.id} className="carousel-item float-left w-full">
            {renderCarouselSlide(slide)}
            <p className="hidden sm:block text-primary text-sm leading-[20px] absolute bottom-[-55px] left-[45%]">
              {`${index + 1}/${features.length}`}
            </p>
          </div>
        );
      })
    );

  return (
    <div id="carouselExampleControls" className="max-w-[1212px] mx-auto carousel slide relative shadow 
    rounded-[3px] lg:max-w-[928px] md:max-w-[555px] sm:max-w-[355px]" data-bs-ride="carousel">
      <div className="carousel-inner w-full overflow-hidden">
        {renderSlides(features)}
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center 
        p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-back-icon inline-block relative right-[130px] lg:right-[90px] 
          md:right-[-50%] md:top-[55%]" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center 
        p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-forward-icon inline-block relative left-[130px] lg:left-[90px] 
          md:left-[-50%] md:top-[55%]" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

Carousel.propTypes = {
  features:    PropTypes.array.isRequired,
};

export default Carousel;
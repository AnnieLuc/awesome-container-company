import React from 'react';

function CarouselSlide({slide}) {
  const { image, features, sizing } = slide;

  const renderListItems = (list) => {
    return list.map((item, index) => {
      return (
        <li key={index} className="text-sm font-normal leading-8 text-primary flex items-center">
          <div className="list-icon"></div>
          {item}
        </li>
      );
    });
  }

  return (
    <article className="block w-full w-max-[1212px] pt-[45px] pb-[35px] bg-secondary-100 flex">
      <div className="w-full max-w-[520px]">
        <img src={image} alt="container" className="w-full object-contain object-center" />
      </div>
      <div className="ml-[79px] w-full">
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

export default CarouselSlide;

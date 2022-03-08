import React from 'react';
import SectionHeading from './SectionHeading';
import ImageCompareSlider from './ImageCompareSlider';
import Chat from './Chat';

function HeroSection() {
  return (
    <section>
      <div className="mx-auto px-[40px] pt-[74px] pb-[40px] max-w-[1440px] flex flex-col">
        <div className="max-w-[859px]">
          <SectionHeading align="left" color="primary">
            Help our environment by eliminating single-use plastics from your delivery with <span className="text-highlight-100">Awesome Container Company</span>
          </SectionHeading>
        </div>
        <div className="mt-[85px] w-full flex justify-between">
          <div className="max-w-[626px] w-full rounded-[20px] object-cover">
            <ImageCompareSlider />
          </div>
          <div className="max-w-[491px] w-full border border-black">
            <Chat />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

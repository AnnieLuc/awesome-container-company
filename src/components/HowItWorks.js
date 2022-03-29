import React          from 'react';
import SectionHeading from './section-heading/SectionHeading';
import Button         from './button/Button';
import HowItWorksImg1 from '../images/how-it-works-1.svg';
import HowItWorksImg2 from '../images/how-it-works-2.svg';
import HowItWorksImg3 from '../images/how-it-works-3.svg';
import HowItWorksImg4 from '../images/how-it-works-4.svg';

function HowItWorks({onButtonClick}){
  return (
    <section id="how-it-works">
      <div className="mx-auto px-[80px] pt-[80px] pb-[100px] max-w-[1440px] base:px-[20px] sm:px-[16px] sm:py-[60px]">
        <SectionHeading align="left" color="primary">
          <span className="base:block base:text-center">
            How it works?
          </span>
        </SectionHeading>
        <div className="mt-[40px] mb-[80px] grid grid-cols-5 gap-px base:my-[60px] base:grid-cols-1 base:gap-[40px]">
          <div className="col-start-2 bg-[url('./images/how-it-works-arrow-41.svg')] bg-no-repeat 
            bg-[center_bottom_80px] bg-[length:56px_56px] base:row-start-8 base:col-start-1 base:row-span-1 
            base:bg-[url('./images/how-it-works-circular-arrow.svg')] base:bg-center base:bg-contain base:h-[85px]">
          </div>
          <div className="col-start-3 base:row-start-1 base:col-start-1 base:row-span-1">
            <figure className="flex flex-col items-center justify-center gap-y-[18px]">
              <img className="w-full max-w-[121px]" src={HowItWorksImg1} alt="" />
              <figcaption className="text-primary text-lg leading-7 text-center">
                01.<br/>Restaurants request reusable containers via app
              </figcaption>
            </figure>
          </div>
          <div className="col-start-4 bg-[url('./images/how-it-works-arrow-12.svg')] bg-no-repeat 
            bg-[center_bottom_80px] bg-[length:56px_56px] base:row-start-2 base:col-start-1 base:row-span-1 
            base:bg-[url('./images/how-it-works-down-arrow.svg')] base:bg-center base:bg-contain base:h-[33px]">
          </div>
          <div className="row-start-2 col-start-1 base:row-start-7 base:col-start-1 base:row-span-1">
            <figure className="flex flex-col items-center justify-center gap-y-[18px]">
              <img className="w-full max-w-[114px]" src={HowItWorksImg4} alt="" />
              <figcaption className="text-primary text-lg leading-7 text-center">
                04.<br/>Wash containers at commercial facility
              </figcaption>
            </figure>
          </div>
          <div className="row-start-2 col-start-3 text-center flex justify-center items-center text-base 
            text-highlight-100 base:row-start-9 base:col-start-1 base:row-span-1">
            Circular ecosystem
          </div>
          <div className="row-start-2 col-start-5 base:row-start-3 base:col-start-1 base:row-span-1">
            <figure className="flex flex-col items-center justify-center gap-y-[18px]">
              <img className="w-full max-w-[123.5px]" src={HowItWorksImg2} alt="" />
              <figcaption className="text-primary text-lg leading-7 text-center">
                02.<br/>Deliver containers to restaurants
              </figcaption>
            </figure>
          </div>
          <div className="row-start-3 col-start-2 bg-[url('./images/how-it-works-arrow-34.svg')] bg-no-repeat 
            bg-[center_top_80px] bg-[length:56px_56px] base:row-start-4 base:col-start-1 base:row-span-1 
            base:bg-[url('./images/how-it-works-down-arrow.svg')] base:bg-center base:bg-contain base:h-[33px]">
          </div>
          <div className="row-start-3 col-start-3 base:row-start-5 base:col-start-1 base:row-span-1">
            <figure className="flex flex-col items-center justify-center gap-y-[18px]">
              <img className="w-full max-w-[123.5px]" src={HowItWorksImg3} alt="" />
              <figcaption className="text-primary text-lg leading-7 text-center">
                03.<br/>Pick up used containers from users via app
              </figcaption>
            </figure>
          </div>
          <div className="row-start-3 col-start-4 bg-[url('./images/how-it-works-arrow-23.svg')] bg-no-repeat 
            bg-[center_top_80px] bg-[length:56px_56px] base:row-start-6 base:col-start-1 base:row-span-1 
            base:bg-[url('./images/how-it-works-down-arrow.svg')] base:bg-center base:bg-contain base:h-[33px]">
          </div>
        </div>
        <div className="flex justify-center">
          <Button isHeader="false" onButtonClick={onButtonClick}>Work with us</Button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

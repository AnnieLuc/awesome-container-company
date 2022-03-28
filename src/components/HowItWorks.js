import React          from 'react';
import SectionHeading from './section-heading/SectionHeading';
import Button         from './button/Button';

function HowItWorks({onButtonClick}){
  return (
    <section
      id="how-it-works">
      <div className="mx-auto px-[80px] pt-[80px] pb-[100px] max-w-[1440px]">
        <SectionHeading align="left" color="primary">
          How it works?
        </SectionHeading>
        <div className="mt-[40px] mb-[80px] border border-black min-h-[200px]">

        </div>
        <div className="flex justify-center">
          <Button isHeader="false" onButtonClick={onButtonClick}>Work with us</Button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

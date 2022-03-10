import React            from 'react';
import SectionHeading   from './SectionHeading';
import SectionPara      from './SectionPara';
import PricingCard      from './PricingCard';
import Button           from './Button';
import pricing          from '../utils/pricing';

function PricingSection(){

  return (
    <section>
      <div className="mx-auto px-[82px] max-w-[1440px] flex flex-col items-center">
        <SectionHeading align="center" color="primary">Our pricing</SectionHeading>
        <div className="mt-[60px] mb-[80px] grid grid-cols-4 gap-[40px]">
          {pricing.map((price, index) => <PricingCard key={index} {...price} />)}
        </div>
        <Button isHeader="false">Work with us</Button>
        <div className="mt-[32px] max-w-[618px]">
          <SectionPara align="center" color="primary" lineHeight="5">
            Leave your contacts and request, and our manager will reach out to you to establish our further partnership!
          </SectionPara>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;

import React            from 'react';
import SectionHeading   from './SectionHeading';
import PricingCard      from './PricingCard';
import pricing          from '../utils/pricing';

function PricingSection(){

  return (
    <section>
      <div className="mx-auto px-[82px] max-w-[1440px]">
        <SectionHeading align="center" color="primary">Our pricing</SectionHeading>
        <div className=" mt-[60px] mb-[80px] grid grid-cols-4 gap-[40px]">
          {pricing.map(price => <PricingCard {...price} />)}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;

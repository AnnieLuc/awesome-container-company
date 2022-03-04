import React            from 'react';
import SectionHeading   from './SectionHeading';
import PricingCard      from './PricingCard';


function PricingSection(){
  return (
    <section>
      <SectionHeading align="center" color="primary">Our pricing</SectionHeading>
      <PricingCard />
    </section>
  );
}

export default PricingSection;

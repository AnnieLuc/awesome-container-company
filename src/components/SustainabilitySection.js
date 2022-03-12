import React            from 'react';
import SectionHeading   from './SectionHeading';
import SectionPara      from './SectionPara';
import esgCareImg       from '../images/esg-care.svg';

/**
 * The **SustainabilitySection** component highlights the company to be an ESG company.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function SustainabilitySection() {

  return (
    <section id="sustainability">
      <div className="mx-auto px-[100px] max-w-[1440px] pt-[64.54px] pb-[180px] flex">
        <div className="max-w-[780px]">
          <div className="mt-[187.46px]">
            <SectionHeading align="left" color="primary">
              We are an ESG company:<br/> we care for social and environmental sustainability
            </SectionHeading>
          </div>
          <div className="mt-[40px]">
            <SectionPara align="left" color="primary" lineHeight="5">
              In 2020 Singapore’s government took on <span className="text-highlight-100">the Green Plan</span>: a whole-of-nation movement 
              to advance Singapore’s national agenda on sustainable development. Our company is 
              a part of its solution to cultivating a Sustainable Living — 1 of the 5 key programmes 
              of SG Green Plan.
            </SectionPara>
          </div>
        </div>
        <div className="max-w-[305.84px]">
          <img src={esgCareImg} alt="a sapling coming out of a container" className="object-contain" />
        </div>
      </div>
    </section>
  );
}

export default SustainabilitySection;

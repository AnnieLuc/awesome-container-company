import React                from 'react';
import ImpactCard           from './ImpactCard';
import SectionHeading       from './SectionHeading';
import impacts              from '../utils/impacts';
import Ovals                from '../images/ovals-impact.svg';
import Rectangles           from '../images/rectangles-impact.svg';

/**
 * The **ImpactSection** component highlights the impacts for businesses and users.
 *
 * @version 1.0.0
 * @author [Ekaterina Cratcha](https://github.com/cratcha)
 */
function ImpactSection() {
  return (
    <section id="impact">
      <div className=" bg-secondary-200 pt-[120px] mx-auto flex flex-col items-center">
        <SectionHeading align="center" color="primary">
          Impact
        </SectionHeading>

        <div className="grid grid-cols-2 gap-[440px] place-items-center translate-y-[100px] z-10">
          <img src={Rectangles} alt="" />
          <img src={Ovals} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-[40px] justify-items-center mx-auto">
          {impacts.map((arrItem, index) => {
            return <ImpactCard cardData={arrItem} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;

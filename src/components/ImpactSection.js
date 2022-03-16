import React                from 'react';
import SectionHeading       from './SectionHeading';
import impacts              from '../constants/impacts';
import Ovals                from '../images/ovals-impact.svg';
import Rectangles           from '../images/rectangles-impact.svg';

/**
 * The **ImpactSection** component highlights the impacts for businesses and users.
 *
 * @version 1.0.0
 * @author [Ekaterina Cratcha](https://github.com/cratcha)
 */
function ImpactSection() {
  const renderCards = () => (
    impacts.map((cardData) => (
        <article className="mt-[60px] flex flex-col items-center
        text-center max-w-[660px] shadow-sm bg-secondary-100 z-20">
          <div className="mb-[60px] pr-[32px] pl-[32px]">
            {/* Card Header */}
            <h2 className="text-lg pt-10 text-highlight-100">
              {cardData.cardHeader}
            </h2>
            {/* Card Content */}
            {cardData.cardContent.map((arrItem, index) => (
              <div key={index}>
                <div className="pt-5 pb-5 bg-[url('./images/bullet-points.svg')] bg-no-repeat bg-center"></div>
                <p>{arrItem}</p>
              </div>
            ))}
          </div>
        </article>
      )));

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
          {renderCards()}
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;

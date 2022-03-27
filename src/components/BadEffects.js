import React                from 'react';
import PropTypes  			    from 'prop-types';
import { motion }           from 'framer-motion';
import SectionHeading       from './section-heading/SectionHeading';
import SectionPara          from './section-para/SectionPara';
import { sectionVariants }  from '../utils/animationVariants';
import chart                from '../images/single-use-plastics-chart.png';

/**
 * The **BadEffects** component highlights the bad effects of single-use packaging.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function BadEffects({plasticsBadEffects}) {
  // Classes for JSX Elements
  const BadEffectsContainerClass = `mx-auto px-[140px] py-[120px] max-w-[1440px] flex flex-col 
    items-center lg:px-[20px] md:py-[80px] sm:px-[16px] sm:pt-[40px]`;

  // Function to render the images
  const renderImages = () => {
    return (
      plasticsBadEffects.map(({caption, image}, index) => {
        return (
          <figure className="max-w-[346.47px] lg:max-w-[314px] md:max-w-[229px]" key={index}>
            <img src={image} alt={image} className="object-cover rounded-[3px]" />
            <figcaption className="pt-[20px] text-sm text-secondary-100 leading-4 text-center">
              {caption}
            </figcaption>
          </figure>
        );
      })
    );
  }

  return (
    <motion.section
      id="bad-effects"
      className="bg-primary"
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4}}>
      <div className={BadEffectsContainerClass}>
        <div className="w-full flex gap-x-[73px] md:flex-col-reverse md:gap-y-[40px]">
          <div className="max-w-[347px] rounded-[3px] md:self-center md:max-w-[229px]">
            <img className="object-cover" src={chart} alt="donut chart to show single-use plastics wastage" />
          </div>
          <div className="mt-[56px] md:mt-[0px] md:flex md:flex-col md:items-center">
            <div className="max-w-[708px] md:max-w-[647px]">
              <SectionHeading align="left" color="secondary">
                <span className="md:inline-block md:text-center">
                  Single-use packaging: <span className="block md:inline">bad for the planet, bad for business</span>
                </span>
              </SectionHeading>
            </div>
            <div className="pt-[40px] max-w-[627px] md:max-w-[616px] sm:pt-[32px]">
              <SectionPara align="left" color="secondary" lineHeight="6">
                <span className="md:inline-block md:text-center">
                  Millions of tons of single-use packaging <span className="text-highlight-100">end up in landfills and oceans</span> while only
                  <span className="text-highlight-100"> 9% of single-use waste gets recycled</span>. Meanwhile, single-use containers are expensive
                  and restaurants need to track inventory / restock weekly.
                </span>
              </SectionPara>
            </div>
          </div>
        </div>
        <div className="mt-[80px] w-full flex justify-between md:mt-[40px] sm:flex-col sm:items-center sm:gap-y-[40px]">
          {renderImages()}
        </div>
      </div>
    </motion.section>
  );
}

BadEffects.propTypes = {
  plasticsBadEffects:    PropTypes.array.isRequired,
};

export default BadEffects;

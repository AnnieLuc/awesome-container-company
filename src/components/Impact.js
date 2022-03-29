import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading/SectionHeading";
import { sectionVariants } from "../utils/animationVariants";
import Ovals from "../images/ovals-impact.svg";
import Rectangles from "../images/rectangles-impact.svg";

/**
 * The **Impact** component highlights the impacts for businesses and users.
 *
 * @version 1.0.0
 * @author [Ekaterina Cratcha](https://github.com/cratcha)
 */
function Impact({ impacts }) {
  const renderCards = () =>
    impacts.map((cardData) => (
      <div key={cardData.id}>
        {/* <div
          key={cardData.id}
          className="absolute sm:grid-cols-1 sm:gap-[520px] max-w-full sm:max-w-[160px] place-items-center translate-x-[200px] sm:translate-x-[90px] sm:translate-y-[30px] translate-y-[-40px]"
        >
          {cardData.image}
        </div> */}
        <article
          className="mt-[60px] sm:mx-[16px] sm:mt-[101px] flex flex-col items-center
        text-center max-w-[660px] h-full sm:h-fit shadow-sm bg-secondary-100 z-[1]"
        >
          <div
            className=" relative sm:mb-[40px] pr-[32px] pl-[32px]
          before:absolute before:top-[-100px] before:left-[210px] before:bg-rectangles-image before:-z-[1] before:w-[241px] before:h-[143px] "
          >
            {/* Card Header */}
            <h2 className="text-lg pt-10 sm:pt-[30px] text-highlight-100">
              {cardData.cardHeader}
            </h2>
            {/* Card Content */}
            {cardData.cardContent.map((arrItem) => (
              <div key={arrItem.toString()}>
                <div className="pt-5 pb-5 bg-[url('./images/bullet-points.svg')] bg-no-repeat bg-center"></div>
                <p>{arrItem}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    ));

  return (
    <motion.section
      id="impact"
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className=" bg-secondary-200 pt-[120px] mx-auto flex flex-col items-center">
        <SectionHeading align="center" color="primary">
          Impact
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-1 gap-[40px] z-[0] sm:gap-[16px] justify-items-center  mx-auto">
          {renderCards()}
        </div>
      </div>
    </motion.section>
  );
}

Impact.propTypes = {
  impacts: PropTypes.array.isRequired,
};

export default Impact;

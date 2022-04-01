import React                        from 'react';
import PropTypes  					        from 'prop-types';
import { motion }                   from 'framer-motion';
import accLogo                      from '../images/logo.svg';
import {
  pageLoadContainerVariants,
  pageLoadLogoVariants,
  textVariants }                    from '../utils/animationVariants';

function PageLoad({data}){
  const { companyName } = data;

  return (
      <motion.div
        variants={pageLoadContainerVariants}
        initial="offscreen"
        animate="onscreen"
        exit="exit"
        className="w-[100vw] h-[100vh] p-[20px] bg-secondary-100 flex flex-col justify-center items-center">
        <motion.img
          variants={pageLoadLogoVariants}
          initial="offscreen"
          animate="onscreen"
          exit="exit"
          src={accLogo}
          alt="awesome container company logo"
          className="w-full object-contain max-w-[152px] min-h-[112px] sm:max-w-[132px] sm:min-h-[92px]" />
        <motion.h1
          variants={textVariants}
          initial="offscreen"
          animate="onscreen"
          exit={{x: "-10%", opacity: 0, transition: { duration: 0.8 }}}
          className="text-xl font-normal leading-9 text-highlight-100 text-center
          md:text-[42px] md:leading-[48px] sm:text-[28px] sm:leading-[34px] ">
            {companyName}
        </motion.h1>
    </motion.div>
  );
}

PageLoad.propTypes = {
  data:  PropTypes.object.isRequired,
};

export default PageLoad;

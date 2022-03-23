import React                from 'react';
import { motion }           from 'framer-motion'
import ImageCompareSlider   from './ImageCompareSlider';
import Chat                 from './chat/Chat';
import { sectionVariants }  from '../utils/animationVariants';

/**
 * The **Hero** component represents the main section of the page where the motto of the company is displayed.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Hero({chatMessages}) {
  return (
    <motion.header
      id="hero"
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3}}>
      <div className="mx-auto px-[40px] pt-[144px] pb-[40px] max-w-[1440px] flex flex-col">
        <div className="max-w-[859px] text-[44px]">
          <h1 className="sec-heading sec-text-left sec-text-primary">
            Help our environment by eliminating single-use plastics from your delivery with <span className="text-highlight-100">Awesome Container Company</span>
          </h1>
        </div>
        <div className="mt-[85px] w-full flex justify-between">
          <div className="max-w-[626px] w-full rounded-[20px] object-cover">
            <ImageCompareSlider />
            <div className="mt-[13px] w-full flex justify-between text-sm font-normal leading-4">
                <p>Now</p>
                <p>With Awesome Containers</p>
            </div>
          </div>
          <div className="max-w-[491px] w-full flex flex-col justify-end">
            <div className="px-[50px] flex flex-col gap-[16px]">
              <Chat chatMessages={chatMessages} />
              <div className="w-[38px] h-[38px] bg-[url('./images/chat-admin.svg')]
              bg-no-repeat bg-center bg-contain self-end relative -right-[40px] bottom-[20px]"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Hero;

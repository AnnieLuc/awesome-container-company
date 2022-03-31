import React                from 'react';
import { motion }           from 'framer-motion';
import SectionHeading       from '../section-heading/SectionHeading';
import CompetitionTable     from '../competition-table/CompetitionTable';
import { sectionVariants }  from '../../utils/animationVariants';
import './Competition.css';

/**
 * The **Competition** component represents the competition details of the company.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Competition() {
  return (
    <motion.section
      id="competition"
      className=" bg-secondary-200"
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2}}>
      <div className="mx-auto px-[100px] py-[120px] max-w-[1440px] flex flex-col items-center 
        lg:px-[20px] sm:pt-[80px] sm:pb-[100px] sm:px-[16px]">
        <SectionHeading align="center" color="primary">The competition is no match</SectionHeading>
        <div className="competition competition-wrapper">
          <CompetitionTable />
        </div>
      </div>
    </motion.section>
  );
}

export default Competition;

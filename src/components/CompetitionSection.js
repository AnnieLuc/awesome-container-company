import React              from 'react';
import SectionHeading     from './SectionHeading';
import CompetitionTable   from './CompetitionTable';

/**
 * The **CompetitionSection** component represents the competition details of the company.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function CompetitionSection() {
  return (
    <section id="competition" className=" bg-secondary-200">
      <div className="mx-auto px-[100px] py-[120px] max-w-[1440px] flex flex-col items-center">
        <SectionHeading align="center" color="primary">The competition is no match</SectionHeading>
        <div className="pt-[60px]">
          <CompetitionTable />
        </div>
      </div>
    </section>
  );
}

export default CompetitionSection;

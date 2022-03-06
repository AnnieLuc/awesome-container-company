import React              from 'react';
import SectionHeading     from './SectionHeading';
import CompetitionTable   from './CompetitionTable';

function CompetitionSection() {
  return (
    <section className="py-[120px] bg-secondary-200">
        <SectionHeading align="center" color="primary">The competition is no match</SectionHeading>
      <div className="pt-[60px]">
        <CompetitionTable />
      </div>
    </section>
  );
}

export default CompetitionSection;

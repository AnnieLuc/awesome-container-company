import React from 'react';
import SectionHeading from './SectionHeading';
import CompetitionTable from './CompetitionTable';

function CompetitionSection() {
  return (
    <section className=" bg-secondary-200">
      <div className="mx-auto py-[120px] max-w-[1440px] flex flex-col items-center">
        <SectionHeading align="center" color="primary">The competition is no match</SectionHeading>
        <div className="pt-[60px]">
          <CompetitionTable />
        </div>
      </div>
    </section>
  );
}

export default CompetitionSection;

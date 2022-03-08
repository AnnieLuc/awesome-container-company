import React from 'react';
import competition from '../utils/competition';

function CompetitionSection(){
  const renderTableCells = () => {
    return competition.map((row, rowIndex) => (
      Object.entries(row).map((cell, colIndex) => {
        if (rowIndex === 0) {
          return (
            <div className="px-[15px] flex justify-center items-center bg-secondary-100 text-primary text-base font-normal leading-5 text-center">
              {cell[1]}
            </div>
          );
        }
        if (cell[0] === 'col1') {
          return (
            <div className="p-[20px] bg-secondary-100 text-primary text-base font-normal leading-5 text-left">
              {cell[1]}
            </div>
          );
        }
        return (
          <div className="bg-secondary-100">
            cell
          </div>
        );
      })
    ));
  }

  return (
    <section className="bg-secondary-200">
      <div className="mx-auto px-[100px] max-w-[1440px] border border-black">
        <article className="w-full min-h-[656px] bg-gridLine shadow rounded-[20px] grid grid-cols-6 auto-rows-fr gap-px">
          {renderTableCells()}
        </article>
      </div>
    </section>
  );
}

export default CompetitionSection;

import React  from 'react';
import Logo   from './Logo';

function CompetitionTable() {
  return (
    <div className="mx-auto px-[100px] max-w-[1440px]">
      <article className="table">
        {/* Row # 1 */}
        <div className="table-top-header rounded-tl-[20px]">
          <Logo />
        </div>
        <div className="table-top-header">
          <p>Awesome Container Company</p>
        </div>
        <div className="table-top-header">
          <p>Deliver Zero</p>
        </div>
        <div className="table-top-header">
          <p>Logistics Company</p>
        </div>
        <div className="table-top-header">
          <p>Washing Facility</p>
        </div>
        <div className="table-top-header rounded-tr-[20px]">
          <p>Single-use plastics</p>
        </div>
        {/* Row # 2 */}
        <div className="table-left-header">
          <p>Save over 50% on supply costs</p>
        </div>
        <div className="table-cell">
          <div className="bullet-highlight"></div>
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
        </div>
        {/* Row # 3 */}
        <div className="table-left-header">
          <p>Save real estate storage costs</p>
        </div>
        <div className="table-cell">
          <div className="bullet-highlight"></div>
        </div>
        <div className="table-cell">
          <div className="bullet"></div>
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
        </div>
        {/* Row # 4 */}
        <div className="table-left-header">
          <p>Inventory management</p>
        </div>
        <div className="table-cell">
          <div className="bullet-highlight"></div>
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
        </div>
        {/* Row # 5 */}
        <div className="table-left-header">
          <p>Never reorder supplies</p>
        </div>
        <div className="table-cell">
          <div className="bullet-highlight"></div>
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
        </div>
        {/* Row # 6 */}
        <div className="table-left-header">
          <p>Easy pickup and delivery</p>
        </div>
        <div className="table-cell">
          <div className="bullet-highlight"></div>
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
          <div className="bullet"></div>
        </div>
        <div className="table-cell">
          <div className="bullet"></div>
        </div>
        <div className="table-cell">
          <div className="bullet"></div>
        </div>
        {/* Row # 7 */}
        <div className="table-left-header">
          <p>Sustainable products</p>
        </div>
        <div className="table-cell">
          <div className="bullet-highlight"></div>
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
          <div className="bullet"></div>
        </div>
        <div className="table-cell">
        </div>
        {/* Row # 8 */}
        <div className="table-left-header rounded-bl-[20px]">
          <p>App for tracking and reporting</p>
        </div>
        <div className="table-cell">
          <div className="bullet-highlight"></div>
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell">
          <div className="bullet"></div>
        </div>
        <div className="table-cell">
        </div>
        <div className="table-cell rounded-br-[20px]">
        </div>
      </article>
    </div>
  );
}

export default CompetitionTable;

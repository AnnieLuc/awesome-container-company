import React  from 'react';
import Logo   from '../Logo';
import './CompetitionTable.css';

/**
 * The **CompetitionTable** component lays out the comparison between the company and its competitors.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function CompetitionTable() {
  return (
    <article className="table">
      {/* Row # 1 */}
      <div className="table-top-header rounded-tl-[3px]">
        <Logo isHeader={false} />
      </div>
      <div className="table-top-header">
        <p className="text-highlight-100">Awesome Container Company</p>
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
      <div className="table-top-header rounded-tr-[3px]">
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
      <div className="table-left-header rounded-bl-[3px]">
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
      <div className="table-cell rounded-br-[3px]">
      </div>
    </article>
  );
}

export default CompetitionTable;

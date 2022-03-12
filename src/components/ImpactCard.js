import React from 'react';

/**
 * The **ImpactCard** component representing the cards to be used in the ImpactSection.
 *
 * @version 1.0.0
 * @author [Ekaterina Cratcha](https://github.com/cratcha)
 */
function ImpactCard({ cardData }) {
  return (
    <article className="mt-[60px] flex flex-col items-center
    text-center max-w-[660px] shadow-sm bg-secondary-100 z-20">
      <div className="mb-[60px] pr-[32px] pl-[32px]">
        <h2 className="text-lg pt-10 text-highlight-100">
          {cardData.cardHeader}
        </h2>

        {cardData.cardContent.map((arrItem, index) => (
          <div key={index}>
            <div className="pt-5 pb-5 bg-[url('./images/bullet-points.svg')] bg-no-repeat bg-center"></div>
            <p>{arrItem}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default ImpactCard;

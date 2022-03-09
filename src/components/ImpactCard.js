import React from "react";

function ImpactCard({ cardData }) {
  return (
    <article className=" mt-[60px] impact-card">
      <div className="mb-[60px] pr-[32px] pl-[32px]">
        <h2 className="text-lg pt-10">{cardData.cardHeader}</h2>
        {cardData.cardContent.map((arrItem, index) => (
          <div key={index}>
            <div className="impact-card-bullet"></div>
            <p>{arrItem}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default ImpactCard;

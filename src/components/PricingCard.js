import React from 'react';

function PricingCard({noOfOrders, approxCost}){
  return (
    <article className="price-card">
      <p className="text-center">{noOfOrders} orders / day</p>
      <div className="price-card-down-arrow"></div>
      <p className="text-center">{approxCost} / month</p>
    </article>
  );
}

export default PricingCard;
import React                from 'react';
import PropTypes            from 'prop-types';

function PricingCard({noOfOrders, approxCost}){
  return (
    <article className="price-card">
      <p className="text-center">{noOfOrders} orders / day</p>
      <div className="price-card-down-arrow"></div>
      <p className="text-center">{approxCost} / month</p>
    </article>
  );
}

PricingCard.propTypes = {
  noOfOrders: PropTypes.string.isRequired,
  approxCost: PropTypes.string.isRequired,
};

export default PricingCard;
import React                from 'react';
import PropTypes            from 'prop-types';
import classnames           from "classnames";

function SectionHeading(props){
  const { children, align, color }  = props;
  const textAlignClass              = `text-${align}`;
  const textColorClass              = `text-${color}`;

  return (
    <h2 className={classnames("sec-heading", textAlignClass, textColorClass)}>
      {children}
    </h2>
  );
}

SectionHeading.propTypes = {
  children: PropTypes.any.isRequired,
  align:    PropTypes.oneOf(['center', 'left', 'right']),
  color:    PropTypes.oneOf(['primary', 'secondary-100']),
};

export default SectionHeading;

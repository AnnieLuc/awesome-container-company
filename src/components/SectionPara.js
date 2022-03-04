import React                from 'react';
import PropTypes            from 'prop-types';
import classnames           from "classnames";

function SectionPara(props){
  const { children, align, color } = props;
  const textAlignClass = `text-${align}`;
  const textColorClass = `text-${color}`;

  return (
    <p className={classnames("sec-para", textAlignClass, textColorClass)}>
      {children}
    </p>
  );
}

SectionPara.propTypes = {
  children:   PropTypes.any.isRequired,
  align:      PropTypes.oneOf(['center', 'left', 'right']),
  color:      PropTypes.oneOf(['primary', 'secondary-100']),
};

export default SectionPara;

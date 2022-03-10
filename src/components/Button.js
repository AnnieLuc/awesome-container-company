import React from 'react';

function Button({children, isHeader}){
  const buttonClass = (isHeader === 'true') ? 'button-header' : 'button';
  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
}

export default Button;

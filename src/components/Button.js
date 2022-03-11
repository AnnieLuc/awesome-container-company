import React from 'react';

/**
 * The **Button** component renders any button on the page.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Button({children, isHeader}){
  const buttonClass = (isHeader === 'true') ? 'button-header' : 'button';
  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
}

export default Button;

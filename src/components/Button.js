import React        from 'react';
import PropTypes  	from 'prop-types';

/**
 * The **Button** component renders any button on the page.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */

function Button({children, isHeader, onButtonClick}) {
  const buttonClass = (isHeader === 'true') ? 'button-header' : 'button';
  return (
    <button className={buttonClass} onClick={onButtonClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children:       PropTypes.any.isRequired,
  isHeader:       PropTypes.string.isRequired,
  onButtonClick:  PropTypes.func.isRequired,
};

export default Button;

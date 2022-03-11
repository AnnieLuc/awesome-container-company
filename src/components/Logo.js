import React   from 'react';
import accLogo from '../images/logo.svg';

/**
 * The **Logo** component represents the logo of the page.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Logo(){
  return (
    <div className="max-w-[92px]">
      <img src={accLogo} alt="awesome container company logo" className="object-contain" />
    </div>
  );
}

export default Logo;

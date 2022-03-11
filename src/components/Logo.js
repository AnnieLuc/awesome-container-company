import React   from 'react';
import accLogo from '../images/logo.svg';

function Logo(){
  return (
    <div className="max-w-[92px]">
      <img src={accLogo} alt="awesome container company logo" className="object-contain" />
    </div>
  );
}

export default Logo;

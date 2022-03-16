import React          from 'react';
import accLogo        from '../images/logo.svg';
import accLogoTilted  from '../images/logoTilted.svg';

/**
 * The **Logo** component represents the logo of the page.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Logo({isHeader}){
  const [logoImage, setLogoImage] = React.useState(accLogo);

  const handleMouseEnter = () => {
    if(isHeader){
      setLogoImage(accLogoTilted);
    }
  }

  const handleMouseLeave = () => {
    if(isHeader){
      setLogoImage(accLogo);
    }
  }

  return (
    <div className="max-w-[92px]">
      <img
        src={logoImage}
        alt="awesome container company logo"
        className="object-contain"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} />
    </div>
  );
}

export default Logo;

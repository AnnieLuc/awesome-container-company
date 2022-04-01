import React          from 'react';
import accLogo        from '../images/logo.svg';
import accLogoTilted  from '../images/logoTilted.svg';

/**
 * The **Logo** component represents the logo of the page.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Logo(){
  const [logoImage, setLogoImage] = React.useState(accLogo);

  const handleMouseEnter = () => setLogoImage(accLogoTilted);
  const handleMouseLeave = () => setLogoImage(accLogo);

  return (
    <div className="max-w-[92px] sm:max-w-[60px]">
      <img
        src={logoImage}
        alt="awesome container company logo"
        className="object-contain w-[92px] sm:w-[60px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} />
    </div>
  );
}

export default Logo;

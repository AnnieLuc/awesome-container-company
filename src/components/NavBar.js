import React                   from 'react';
import PropTypes              from 'prop-types';
import { motion }             from 'framer-motion';
import { Link }               from 'react-scroll';
import Logo                   from './Logo';
import Button                 from './button/Button';
import { navBarVariants }     from  '../utils/animationVariants'

/**
 * The **NavBar** component represents the main menu of the page.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function NavBar(props) {
  const {
    onButtonClick,
    isNavbarOpen,
    setIsNavbarOpen,
    screenWidth } = props;

  // Classes for JSX Elements
  const navSectionClass          = `box-border py-[5px] bg-secondary-100 flex flex-wrap items-center 
    justify-between mb-3 fixed top-0 right-0 left-0 z-50 ${(isNavbarOpen) && `base:shadow-sm`}`;
  const navSectionContainerClass = `w-full max-w-[1440px] pl-[24px] pr-[40px] mx-auto flex flex-wrap 
    items-center justify-between lg:px-[20px] base:flex-col base:items-stretch sm:px-[16px]`;
  const logoLinkContainerClass   = `flex items-center text-sm font-bold leading-4 text-primary mr-4 py-2 
    whitespace-nowrap hover:cursor-pointer sm:text-xs sm:leading-3`;
  const navLinkClass             = `flex items-center text-sm font-normal leading-4 text-primary 
    hover:opacity-75 hover:cursor-pointer base:p-[8px] base:m-[-8px] base:text-[20px] base:leading-[23.7px]`;
  const hamburgerButtonClass     = `w-[44px] h-[44px] 
    ${(isNavbarOpen) ? `bg-[url('./images/hamburger-close.svg')]` : `bg-[url('./images/hamburger-bars.svg')]`}
    bg-no-repeat bg-center bg-contain border-none hidden base:block`;

  const handleHamburgerClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  const handleLinkClick = () => {
    if(screenWidth <= 930){
      setIsNavbarOpen(false);
    }
  }

  return (
    <nav className={navSectionClass}>
      <div className={navSectionContainerClass}>
        <div className="w-auto relative flex justify-start base:justify-between base:items-center">
          <Link className={logoLinkContainerClass} onClick={handleLinkClick} to="hero" spy={true} smooth={true} offset={-70} duration={500}>
            <Logo />
            <p className="ml-[5px] sm:ml-[8px]">Awesome Container Company</p>
          </Link>
          <div className="flex gap-x-[30px]">
            <button className={hamburgerButtonClass} type="button" onClick={handleHamburgerClick} />
            <div className="hidden base:block sm:hidden">
              <Button isHeader="true" onButtonClick={onButtonClick}>
                Work with us
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`max-w-[721px] flex flex-grow items-center lg:max-w-[651px] base:max-w-[100%] ${isNavbarOpen ? ` flex` : ` hidden`}`}
          id="example-navbar-danger">
          <motion.ul
            animate={(isNavbarOpen) ? "onscreen" : "offscreen"}
            variants={navBarVariants}
            className="ml-auto flex justify-between flex-grow list-none base:flex-col base:items-center base:pt-[111px] base:pb-[60px]">
            <li className="flex items-center base:py-[12px]">
              <Link className={navLinkClass} onClick={handleLinkClick} to="bad-effects" spy={true} smooth={true} offset={-70} duration={500}>
                The Problem
              </Link>
            </li>
            <li className="flex items-center base:py-[12px]">
              <Link className={navLinkClass} onClick={handleLinkClick} to="sustainability-delivered" spy={true} smooth={true} duration={500}>
                Sustainable Solution
              </Link>
            </li>
            <li className="flex items-center base:py-[12px]">
              <Link className={navLinkClass} onClick={handleLinkClick} to="impact" spy={true} smooth={true} offset={-30} duration={500}>
                Impact
              </Link>
            </li>
            <li className="flex items-center base:py-[12px]">
              <Link className={navLinkClass} onClick={handleLinkClick} to="pricing" spy={true} smooth={true} offset={-130} duration={500}>
                Pricing
              </Link>
            </li>
            <li className="flex items-center base:py-[12px]">
              <Link className={navLinkClass} onClick={handleLinkClick} to="awesome-team" spy={true} smooth={true} offset={-30} duration={500}>
                Team
              </Link>
            </li>
            <li className="flex items-center base:py-[12px]">
              <Link className={navLinkClass} onClick={handleLinkClick} to="footer" spy={true} smooth={true} duration={500}>
                Contacts
              </Link>
            </li>
            <li className="flex items-center ml-[40px] lg:ml-[20px] base:hidden sm:block sm:ml-[0px] sm:pt-[111px]">
              <Button isHeader={`${(screenWidth <= 560) ? `false` : `true`}`} onButtonClick={onButtonClick}>
                Work with us
              </Button>
            </li>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  onButtonClick:    PropTypes.func.isRequired,
  isNavbarOpen:     PropTypes.bool.isRequired,
  setIsNavbarOpen:  PropTypes.func.isRequired,
  screenWidth:      PropTypes.number.isRequired,
};

export default NavBar;
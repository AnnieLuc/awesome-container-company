import React      from 'react';
import PropTypes  from 'prop-types';
import { Link }   from 'react-scroll';
import Logo       from './Logo';
import Button     from './button/Button';

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
    screenWidth} = props;

  const handleHamburgerClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  }

  return (
    <nav className={`box-border py-[5px] bg-secondary-100 flex flex-wrap items-center justify-between mb-3 
    fixed top-0 right-0 left-0 z-50 ${(isNavbarOpen) && `base:shadow-sm`}`}>
      <div className="w-full max-w-[1440px] pl-[24px] pr-[40px] mx-auto flex flex-wrap items-center justify-between 
        lg:px-[20px] base:flex-col base:items-stretch sm:px-[16px]">
        <div className="w-auto relative flex justify-start base:justify-between base:items-center">
          <Link
            className="flex items-center text-sm font-bold leading-4 text-primary mr-4 py-2 
            whitespace-nowrap hover:cursor-pointer sm:text-xs sm:leading-3"
            onClick={handleLinkClick}
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
              <Logo isHeader={true} />
              <p className="ml-[5px] sm:ml-[8px]">Awesome Container Company</p>
          </Link>
          <button
            className={`w-[44px] h-[44px] ${(isNavbarOpen) ? `bg-[url('./images/hamburger-close.svg')]` : `bg-[url('./images/hamburger-bars.svg')]`}
            bg-no-repeat bg-center bg-contain border-none hidden base:block`}
            type="button"
            onClick={handleHamburgerClick}>
          </button>
        </div>
        <div
          className={`max-w-[721px] flex flex-grow items-center lg:max-w-[651px] base:max-w-[100%] ${isNavbarOpen ? ` flex` : ` hidden`}`}
          id="example-navbar-danger">
          <ul className="ml-auto flex justify-between flex-grow list-none base:flex-col base:items-center base:pt-[111px]">
            <li className="flex items-center base:py-[12px]">
              <Link
                className="flex items-center text-sm font-normal leading-4 text-primary 
                hover:opacity-75 hover:cursor-pointer base:p-[8px] base:m-[-8px] sm:text-[20px] sm:leading-[23.7px]"
                onClick={handleLinkClick}
                to="bad-effects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                  The Problem
              </Link>
            </li>
            <li className="flex items-center base:py-[12px]">
              <Link
                className="flex items-center text-sm font-normal leading-4 text-primary 
                hover:opacity-75 hover:cursor-pointer base:p-[8px] base:m-[-8px] sm:text-[20px] sm:leading-[23.7px]"
                onClick={handleLinkClick}
                to="sustainability-delivered"
                spy={true}
                smooth={true}
                duration={500}>
              Sustainable Solution
              </Link>
            </li>
            <li className="flex items-center base:py-[12px]">
              <Link
                className="flex items-center text-sm font-normal leading-4 text-primary 
                hover:opacity-75 hover:cursor-pointer base:p-[8px] base:m-[-8px] sm:text-[20px] sm:leading-[23.7px]"
                onClick={handleLinkClick}
                to="impact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                >
                  Impact
              </Link>
            </li>
            <li className="flex items-center base:py-[12px]">
              <Link
                className="flex items-center text-sm font-normal leading-4 text-primary 
                hover:opacity-75 hover:cursor-pointer base:p-[8px] base:m-[-8px] sm:text-[20px] sm:leading-[23.7px]"
                onClick={handleLinkClick}
                to="pricing"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}>
                  Pricing
              </Link>
            </li>
            <li className="flex items-center base:py-[12px]">
              <Link
                className="flex items-center text-sm font-normal leading-4 text-primary 
                hover:opacity-75 hover:cursor-pointer base:p-[8px] base:m-[-8px] sm:text-[20px] sm:leading-[23.7px]"
                onClick={handleLinkClick}
                to="awesome-team"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}>
                  Team
              </Link>
            </li>
            <li className="flex items-center base:py-[12px]">
              <Link
                className="flex items-center text-sm font-normal leading-4 text-primary 
                hover:opacity-75 hover:cursor-pointer base:p-[8px] base:m-[-8px] sm:text-[20px] sm:leading-[23.7px]"
                onClick={handleLinkClick}
                to="footer"
                spy={true}
                smooth={true}
                duration={500}>
                  Contacts
              </Link>
            </li>
            <li className="flex items-center ml-[40px] lg:ml-[20px] base:ml-[0px] base:pt-[111px] base:pb-[60px]">
              <Button
                isHeader={`${(screenWidth <= 768) ? `false` : `true`}`}
                onButtonClick={onButtonClick}>
                  Work with us
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  onButtonClick:  PropTypes.func.isRequired,
};

export default NavBar;

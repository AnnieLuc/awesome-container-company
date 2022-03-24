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
function NavBar({onButtonClick}) {

  return (
    <nav className="pt-[10px] pb-[10px] bg-secondary-100 flex flex-wrap items-center justify-between mb-3 fixed top-0 right-0 left-0 z-50">
      <div className="w-full max-w-[1440px] pl-[24px] pr-[40px] mx-auto flex flex-wrap items-center justify-between lg:px-[20px]">
        <div className="w-auto relative flex justify-start">
          <Link
            className="flex items-center text-sm font-bold leading-4 text-primary inline-block mr-4 py-2 whitespace-nowrap hover:cursor-pointer"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
              <Logo isHeader={true} />
              <p className="ml-[5px]">Awesome Container Company</p>
          </Link>
        </div>
        <div
          className="max-w-[721px] flex flex-grow items-center lg:max-w-[651px]"
          id="example-navbar-danger">
          <ul className="ml-auto flex justify-between flex-grow list-none">
            <li className="flex items-center">
              <Link
                className="flex items-center text-sm font-normal leading-4 text-primary hover:opacity-75 hover:cursor-pointer"
                to="bad-effects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                  The Problem
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className="flex items-center text-sm font-normal leading-4 text-primary hover:opacity-75 hover:cursor-pointer"
                to="sustainability-delivered"
                spy={true}
                smooth={true}
                duration={500}>
              Sustainable Solution
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className="flex items-center text-sm font-normal leading-4 text-primary hover:opacity-75 hover:cursor-pointer"
                to="impact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                >
                  Impact
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className="flex items-center text-sm font-normal leading-4 text-primary hover:opacity-75 hover:cursor-pointer"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}>
                  Pricing
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className="flex items-center text-sm font-normal leading-4 text-primary hover:opacity-75 hover:cursor-pointer"
                to="awesome-team"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}>
                  Team
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className="flex items-center text-sm font-normal leading-4 text-primary hover:opacity-75 hover:cursor-pointer"
                to="footer"
                spy={true}
                smooth={true}
                duration={500}>
                  Contacts
              </Link>
            </li>
            <li className="flex items-center ml-[40px] lg:ml-[20px]">
              <Button isHeader="true" onButtonClick={onButtonClick}>Work with us</Button>
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

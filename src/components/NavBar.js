import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from './Logo';
import { navBarVariants } from '../utils/animationVariants'
import pdflink from '../files/Awesome-Container-Company-Blockchain.pdf';
import Button from './button/Button';
/**
 * The **NavBar** component represents the main menu of the page.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function NavBar(props) {
  const {
    isNavbarOpen,
    setIsNavbarOpen,
    screenWidth } = props;

  // Classes for JSX Elements
  const navSectionClass = `box-border py-[5px] bg-secondary-100 flex flex-wrap items-center 
    justify-between mb-3 fixed top-0 right-0 left-0 z-50 ${(isNavbarOpen) && `base:shadow-sm`}`;
  const navSectionContainerClass = `w-full max-w-[1440px] pl-[24px] pr-[40px] mx-auto flex flex-wrap 
    items-center justify-between lg:px-[20px] base:flex-col base:items-stretch sm:px-[16px]`;
  const logoLinkContainerClass = `flex items-center text-sm font-bold leading-4 text-primary mr-4 py-2 
    whitespace-nowrap hover:cursor-pointer sm:text-xs sm:leading-3`;
  const navLinkClass = `flex items-center text-sm font-normal leading-4 text-primary 
    hover:opacity-75 hover:cursor-pointer base:p-[8px] base:m-[-8px] base:text-[20px] base:leading-[23.7px]`;
  const hamburgerButtonClass = `w-[44px] h-[44px] 
    ${(isNavbarOpen) ? `bg-[url('./images/hamburger-close.svg')]` : `bg-[url('./images/hamburger-bars.svg')]`}
    bg-no-repeat bg-center bg-contain border-none hidden base:block`;

  const handleHamburgerClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  const handleLinkClick = () => {
    if (screenWidth <= 1000) {
      setIsNavbarOpen(false);
    }
  }

  return (
    <nav className={navSectionClass}>
      <div className={navSectionContainerClass}>
        <div className="w-auto relative flex justify-start base:justify-between base:items-center">
          <AnchorLink className={logoLinkContainerClass} onClick={handleLinkClick} href="#hero" aria-label="navigate to hero section">
            <Logo />
            <p className="ml-[5px] sm:ml-[8px]">Awesome Container Company</p>
          </AnchorLink>
          <div className="flex gap-x-[30px]">
            <button className={hamburgerButtonClass} type="button" onClick={handleHamburgerClick} aria-label="hamburger menu" />
            <div className="hidden base:block sm:hidden">
              <a href="https://community.awesomecontainer.com/public" isheader={`${(screenWidth <= 500) ? `false` : `true`}`} className="button">
                Invest
              </a>
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
              <AnchorLink className={navLinkClass} onClick={handleLinkClick} href="#bad-effects" aria-label="navigate to problem section">
                The Problem
              </AnchorLink>
            </li>
            <li className="flex items-center base:py-[12px]">
              <AnchorLink className={navLinkClass} onClick={handleLinkClick} href="#sustainability-delivered" aria-label="navigate to solution section">
                Sustainable Solution
              </AnchorLink>
            </li>
            <li className="flex items-center base:py-[12px]">
              <AnchorLink className={navLinkClass} onClick={handleLinkClick} href="#impact" aria-label="navigate to impact section">
                Impact
              </AnchorLink>
            </li>
            <li className="flex items-center base:py-[12px]">
              <AnchorLink className={navLinkClass} onClick={handleLinkClick} href="#pricing" aria-label="navigate to pricing section">
                Pricing
              </AnchorLink>
            </li>
            <li className="flex items-center base:py-[12px]">
              <AnchorLink className={navLinkClass} onClick={handleLinkClick} href="#awesome-team" aria-label="navigate to team section">
                Team
              </AnchorLink>
            </li>
            <li className="flex items-center base:py-[12px]">
              <AnchorLink className={navLinkClass} onClick={handleLinkClick} href="#footer" aria-label="navigate to footer contacts section">
                Contacts
              </AnchorLink>
            </li>
            <li className="flex items-center base:py-[12px]">
               <a href={pdflink} className={navLinkClass} target="_blank" rel="noreferrer">White Paper</a>
            </li>
            <li className="flex items-center ml-[40px] lg:ml-[20px] base:hidden sm:block sm:ml-[0px] sm:pt-[111px]">
              <a href="https://community.awesomecontainer.com/public" isheader={`${(screenWidth <= 500) ? `false` : `true`}`} className="button">
                Invest
              </a>

            </li>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  isNavbarOpen: PropTypes.bool.isRequired,
  setIsNavbarOpen: PropTypes.func.isRequired,
  screenWidth: PropTypes.number.isRequired,
};

export default NavBar;
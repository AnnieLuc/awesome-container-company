import React  from 'react';
import Logo   from './Logo';
import Button from './Button';

/**
 * The **NavBar** component represents the main menu of the page.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function NavBar() {

  return (
    <nav className="pt-[10px] pb-[10px] bg-secondary-100 flex flex-wrap items-center justify-between mb-3 fixed top-0 right-0 left-0 z-50">
      <div className="w-full max-w-[1440px] pl-[24px] pr-[40px] mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between w-auto static block justify-start">
          <a
            className="flex items-center text-sm font-bold leading-4 text-primary inline-block mr-4 py-2 whitespace-nowrap"
            href="#">
            <Logo />
            <p className="ml-[5px]">Awesome Container Company</p>
          </a>
        </div>
        <div
          className="flex flex-grow items-center"
          id="example-navbar-danger">
          <ul className="flex flex-row list-none ml-auto">
            <li className="flex items-center">
              <a className="px-3 py-2 flex items-center text-sm font-normal leading-4 text-primary hover:opacity-75" href="#">The Problem</a>
            </li>
            <li className="flex items-center">
              <a className="px-3 py-2 flex items-center text-sm font-normal leading-4 text-primary hover:opacity-75" href="#">Sustainable Solution</a>
            </li>
            <li className="flex items-center">
              <a className="px-3 py-2 flex items-center text-sm font-normal leading-4 text-primary hover:opacity-75" href="#">Impact</a>
            </li>
            <li className="flex items-center">
              <a className="px-3 py-2 flex items-center text-sm font-normal leading-4 text-primary hover:opacity-75" href="#">Pricing</a>
            </li>
            <li className="flex items-center">
              <a className="px-3 py-2 flex items-center text-sm font-normal leading-4 text-primary hover:opacity-75" href="#">Team</a>
            </li>
            <li className="flex items-center">
              <a className="px-3 py-2 flex items-center text-sm font-normal leading-4 text-primary hover:opacity-75" href="#">Contacts</a>
            </li>
            <li className="flex items-center ml-[20px]">
              <Button isHeader="true">Work with us</Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

import React, { useState } from "react";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import pinwheel from "../assets/pinwheel.svg";
import styles from "../styles";
import { navLinks } from "./constants";
import music from "../assets/music.svg";

const Navbar = ({ onSectionChange }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-white text-[38px] sm:text-[32px] font-bold cursor-pointer flex items-center">
          Yi{" "}
          <img
            src={pinwheel}
            alt="pinwheel"
            className="w-10 h-10 mt-1 object-contain sm:w-6 sm:h-6 sm:mt-1.5"
          />
          &apos;s&nbsp;
          <div className="block">Crafted UI</div>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 grey-gradient absolute top-20 right-0 my-1.5 min-w-[100%] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-black"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <NavLink
                    to={`/${nav.id}`}
                    onClick={() => onSectionChange(nav.id)}
                  >
                    {nav.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

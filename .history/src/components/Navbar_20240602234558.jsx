import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import pinwheel from "../assets/pinwheel.svg";
import styles from "../styles.js";
import { navLinks } from "./constants/index.js";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <p className="text-white text-[48px] sm:text-[32px] font-bold cursor-pointer flex items-center">
            Yi{" "}
            <img
              src={pinwheel}
              alt="pinwheel"
              className="w-10 h-10 mt-1 object-contain sm:w-6 sm:h-6 sm:mt-1.5"
            />
            &apos;s&nbsp;
            <span className="block"> Crafted UI </span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

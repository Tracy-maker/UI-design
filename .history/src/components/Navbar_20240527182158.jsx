import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import styles from "../styles.js";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-secondary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Yix&apos;s&nbsp;
            <span className="sm:block hidden"> | CraftedUI </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li className={`nav-item ${active === "home" ? "active" : ""}`}>
            <Link to="/" onClick={() => setActive("home")}>
              Home
            </Link>
          </li>
          <li className={`nav-item ${active === "about" ? "active" : ""}`}>
            <Link to="/about" onClick={() => setActive("about")}>
              Summary
            </Link>
          </li>
          <li className={`nav-item ${active === "contact" ? "active" : ""}`}>
            <Link to="/contact" onClick={() => setActive("contact")}>
              Prototyping
            </Link>
          </li>
          <li className={`nav-item ${active === "contact" ? "active" : ""}`}>
            <Link to="/contact" onClick={() => setActive("contact")}>
              Prototyping
            </Link>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {toggle && (
            <div className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                <li className={`nav-item ${active === "home" ? "active" : ""}`}>
                  <Link
                    to="/"
                    onClick={() => {
                      setActive("home");
                      setToggle(false);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`nav-item ${active === "about" ? "active" : ""}`}
                >
                  <Link
                    to="/about"
                    onClick={() => {
                      setActive("about");
                      setToggle(false);
                    }}
                  >
                    About
                  </Link>
                </li>
                <li
                  className={`nav-item ${active === "contact" ? "active" : ""}`}
                >
                  <Link
                    to="/contact"
                    onClick={() => {
                      setActive("contact");
                      setToggle(false);
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

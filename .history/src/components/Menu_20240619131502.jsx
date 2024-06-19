import React from "react";
import Button from "./models/Button";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import music from "../assets/music.svg";
import musicOpen from "../assets/musicOpen.svg";

const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;
  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 p-3 bg-white w-11 h-11 rounded-md"
      >
        {menuOpened ? (
          <img
            src={close}
            alt="Close menu"
            className="w-full h-full "
          />
        ) : (
          <img
            src={menu}
            alt="menu"
            className="w-full h-full"
          />
        )}
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-gray-300 transition-all overflow-hidden flex flex-col ${
          menuOpened ? "w-80" : "w-0"
        }`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <Button label="About" onClick={() => onSectionChange(0)} />
          <Button label="Skills" onClick={() => onSectionChange(1)} />
          <Button label="Projects" onClick={() => onSectionChange(2)} />
          <Button label="Contact" onClick={() => onSectionChange(3)} />
        </div>
      </div>
    </>
  );
};

export default Menu;

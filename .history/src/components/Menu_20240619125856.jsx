import React from "react";
import Button from "./models/Button";

const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45 translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 transition-all overflow-hidden flex flex-col ${
          menuOpened ? "w-80" : "w-0"
        } bg-macaron-gray`}
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

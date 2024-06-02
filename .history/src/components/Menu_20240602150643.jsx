import React from "react";

const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;
  return (
    <div>
      <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

      ;
    </div>
  );
};

export default Menu;

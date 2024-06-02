import React from "react";

const Menu = (props) => {
  const [toggle, setToggle] = useState(false);
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

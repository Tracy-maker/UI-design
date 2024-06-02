import React from "react";

const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;
  return (
    <>
      <button onClick={() => setMenuOpened(!menuOpened)} className="z-20 fixed top-12 right-12"></button>;
    </>
  );
};

export default Menu;

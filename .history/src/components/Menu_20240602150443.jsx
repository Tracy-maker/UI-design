import React from "react";

const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;
  return (
    <>
      <button onClick={()=> setMenuOpened(!menuOpened)}></button>;
    </>
  );
};

export default Menu;

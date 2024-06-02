import React from "react";

const Menu = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${
        !toggle ? "hidden" : "flex"
      } p-6 grey-gradient absolute top-20 right-0 mx-0.5 my-1 min-w-[140px] z-10 rounded-xl`}
    >
      <ul className="list-none flex justify-start items-start flex-1 flex-col gap-4">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`font-medium cursor-pointer text-[16px] ${
              active === link.title ? "text-white" : "text-rainbow"
            }`}
            onClick={() => {
              setToggle(!toggle);
              setActive(link.title);
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

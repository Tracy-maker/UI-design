import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./models/Button";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import music from "../assets/music.svg";
import musicOpen from "../assets/musicOpen.svg";
import pinwheel from "../assets/pinwheel.svg";
import { navLinks } from "./constants";

const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;
  const [musicPlaying, setMusicPlaying] = useState(false);

  return (
    <>
      <div className="z-20 fixed top-12 right-12 flex items-center gap-3">
        <motion.button
          onClick={() => setMenuOpened(!menuOpened)}
          className="p-3 bg-white w-11 h-11 rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpened ? (
            <img src={close} alt="Close menu" className="w-full h-full" />
          ) : (
            <img src={menu} alt="Open menu" className="w-full h-full" />
          )}
        </motion.button>
        <motion.button
          onClick={() => setMusicPlaying(!musicPlaying)}
          className="p-3 bg-white w-11 h-11 rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {musicPlaying ? (
            <img src={musicOpen} alt="Stop music" className="w-full h-full" />
          ) : (
            <img src={music} alt="Play music" className="w-full h-full" />
          )}
        </motion.button>
      </div>
      <motion.div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-gray-300 overflow-hidden flex flex-col ${
          menuOpened ? "w-80" : "w-0"
        }`}
        initial={{ width: 0 }}
        animate={{ width: menuOpened ? "19rem" : "0rem" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <div className="text-black text-[48px] sm:text-[40px] font-bold cursor-pointer flex items-center mb-8">
            Yi{" "}
            <img
              src={pinwheel}
              alt="pinwheel"
              className="w-12 h-12 mt-1 object-contain sm:w-8 sm:h-8 sm:mt-1.5"
            />
            &apos;s&nbsp;
            <div className="block">Crafted UI </div>
          </div>

          {navLinks.map((link, index) => {
            <Button
              key={link.id}
              label={link.title}
              onClick={() => onSectionChange(index)}
            />;
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Menu;

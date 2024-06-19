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
  const audioRef = React.useRef(null);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className="z-20 fixed top-12 right-12 flex items-center gap-3">
        <motion.button
          onClick={() => setMenuOpened(!menuOpened)}
          className="p-3 bg-white w-11 h-11 rounded-full shadow-lg"
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
          onClick={toggleMusic}
          className="p-3 bg-white w-11 h-11 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {musicPlaying ? (
            <img src={musicOpen} alt="Stop music" className="w-full h-full" />
          ) : (
            <img src={music} alt="Play music" className="w-full h-full" />
          )}
        </motion.button>
        <audio ref={audioRef} src="https://www.free-stock-music.com/music/keys-of-moon-spring-flowers.mp3" loop />
      </div>
      <motion.div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-gray-900 bg-opacity-95 overflow-hidden flex flex-col transform ${
          menuOpened ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: '100%' }}
        animate={{ x: menuOpened ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-6 p-8">
          <div className="text-white text-4xl sm:text-3xl font-bold cursor-pointer flex items-center mb-8">
            Yi{" "}
            <img
              src={pinwheel}
              alt="pinwheel"
              className="w-10 h-10 ml-2 sm:w-8 sm:h-8"
            />
            &apos;s&nbsp;
            <div className="block">Crafted UI</div>
          </div>
          <div className="flex flex-col space-y-6 w-full">
            {navLinks.map((link, index) => (
              <Button
                key={link.id}
                label={link.title}
                onClick={() => {
                  onSectionChange(index);
                  setMenuOpened(false);
                }}
                className="text-xl text-white hover:text-indigo-400 transition-colors w-full text-center py-3"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;

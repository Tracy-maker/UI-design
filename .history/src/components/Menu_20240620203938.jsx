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
      <div className="z-20 fixed top-4 right-4 sm:top-12 sm:right-12 flex items-center gap-3">
        <motion.button
          onClick={() => setMenuOpened(!menuOpened)}
          className="p-2 sm:p-3 bg-white w-10 h-10 sm:w-11 sm:h-11 rounded-full shadow-lg"
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
          className="p-2 sm:p-3 bg-white w-10 h-10 sm:w-11 sm:h-11 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {musicPlaying ? (
            <img src={musicOpen} alt="Stop music" className="w-full h-full" />
          ) : (
            <img src={music} alt="Play music" className="w-full h-full" />
          )}
        </motion.button>
        <audio ref={audioRef} src="https://www.bensound.com/bensound-music/bensound-sunny.mp3" loop />
      </div>
      <motion.div
        className={`z-10 fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-gray-500 bg-opacity-95 overflow-hidden flex flex-col transform ${
          menuOpened ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: '100%' }}
        animate={{ x: menuOpened ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-6 p-4 sm:p-8">
          <div className="text-white text-3xl sm:text-4xl font-bold cursor-pointer flex items-center mb-4 sm:mb-8">
            Yi
            <img
              src={pinwheel}
              alt="pinwheel"
              className="w-8 h-8 sm:w-10 sm:h-10 ml-2"
            />
            &apos;s&nbsp;
            <div className="block">Inspire Craft</div>
          </div>
          <div className="flex flex-col space-y-4 sm:space-y-6 w-full">
            {navLinks.map((link, index) => (
              <Button
                key={link.id}
                label={link.title}
                onClick={() => {
                  onSectionChange(index);
                  setMenuOpened(false);
                }}
                className="text-lg sm:text-xl text-white hover:text-indigo-400 transition-colors w-full text-center py-2 sm:py-3"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;

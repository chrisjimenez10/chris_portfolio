//Imports
import { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";

const ToggleThemeButton = () => {

  //State
  const [icon, setIcon] = useState("sun");

  //Functions
  const handleIconToggle = () => {
    setIcon(icon === "sun" ? "moon" : "sun");
  };

  //Animation
  const transitionVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  }

  return (
    <div className={`${icon === "sun" ? "bg-white" : "bg-black"} rounded-full w-10 h-10 cursor-pointer`} onClick={handleIconToggle}>       
          <motion.div
            variants={transitionVariants}
            initial="initial"
            animate={icon === "sun" ? "animate" : "initial"}
            transition={{duration: 0.5, ease: "easeInOut"}}
            className="relative top-[.34rem] left-[.38rem]"
          >
            <IoIosSunny size={28} color="black" className="animate-spin" style={{animationDuration: "15s"}}/>
          </motion.div> 
        
          <motion.div
          variants={transitionVariants}
          initial="initial"
          animate={icon === "sun" ? "initial" : "animate"}
          transition={{duration: 0.5, ease: "easeInOut"}}
          className="relative bottom-5 left-[.45rem]"
          >
            <BsMoonStarsFill size={24} color="white" className="animate-pulse" style={{animationDuration: "5s"}}/>
          </motion.div>
    </div>

  )
}

export default ToggleThemeButton;

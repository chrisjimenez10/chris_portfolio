//Imports
import { useState, useEffect, useContext} from "react";
import { ThemeContext } from "../../App";
import { IoIosSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";


const ToggleThemeButton = ({classNames}) => {

  //Context (Global State - Theme)
  const {theme, setTheme} = useContext(ThemeContext);

  //State
  const [icon, setIcon] = useState("sun");
  
  //Animation
  const transitionVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  };

  //useEffect() Hook to keep track and udpate class
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  },[theme]);

    //Functions
    const handleIconToggle = () => {
      setIcon(icon === "sun" ? "moon" : "sun");
      setTheme(theme === "dark" ? "light" : "dark");
    };


  return (
    <div className={`${icon === "sun" ? "bg-black" : "bg-white"} ${classNames || ""} rounded-full w-8 h-8 cursor-pointer`} onClick={handleIconToggle}>       
          <motion.div
            variants={transitionVariants}
            initial="initial"
            animate={icon === "sun" ? "initial" : "animate"}
            transition={{duration: 0.5, ease: "easeInOut"}}
            className="relative top-[.25rem] left-[.25rem]"
          >
            <IoIosSunny size={24} color="black" className="animate-spin" style={{animationDuration: "15s"}}/>
          </motion.div> 
        
          <motion.div
          variants={transitionVariants}
          initial="initial"
          animate={icon === "sun" ? "animate" : "initial"}
          transition={{duration: 0.5, ease: "easeInOut"}}
          className="relative bottom-[1rem] left-[.35rem]"
          >
            <BsMoonStarsFill size={20} color="white" className="animate-pulse" style={{animationDuration: "5s"}}/>
          </motion.div>
    </div>

  )
}

export default ToggleThemeButton;

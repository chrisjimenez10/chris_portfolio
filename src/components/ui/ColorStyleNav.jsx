//Imports
import { motion } from "framer-motion";
import { useState } from "react";

const ColorStyleNav = () => {

    //State
    const [isOpen, setIsOpen] = useState(false);

    //Animation Variants
    const revealVariants = {
        open: {
            opacity: 1,
            x: 0,
        },
        closed: {
            opacity: 0,
            x: "-100%",
        },
    };

  return (
    <>
        <button onClick={()=> setIsOpen(isOpen ? false : true)}>
           COLOR
        </button>
        <motion.nav
        variants={revealVariants}
        animate={isOpen ? "open" : "closed"}
        className="fixed left-0 top-[10rem]"
        >
            <div className="h-[20rem] w-[20rem] bg-contrastBg"></div>
        </motion.nav>
    </>
    
  )
}

export default ColorStyleNav;

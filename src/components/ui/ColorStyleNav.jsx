//Imports
import { motion } from "framer-motion";
import { useState } from "react";
//Design
import ChangeStyle from "../design/ChangeStyle";



const ColorStyleNav = () => {

    

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

        

        <motion.nav
        variants={revealVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{duration: 0.3, ease: "easeInOut"}}
        className="fixed left-0 top-0 h-full w-[20rem] bg-contrastBg z-50"
        >
          <ChangeStyle />
        </motion.nav>
    </>
    
  )
}

export default ColorStyleNav;

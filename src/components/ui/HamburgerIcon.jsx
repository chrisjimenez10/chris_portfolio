//Imports
import { useState } from "react";
import { motion } from "framer-motion";

//Path Component --> NOTE: This is the component that will compose each SVG and allow for transformation of SVG Shape
const Path = (props) => (
    <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
    />
);

const HamburgerIcon = ({classNames}) => {

    //State
    const [isOpen, setIsOpen] = useState(false);

    // Animation Variants
    const topVariants = {
        // This is the TOP line in the Hamburger SVG --> During the "X", it changes its path with smooth transition (Slope is top/right -> bot/left)
        closed: {
            d: "M 2 2.5 L 20 2.5",
        },
        open: {
            d: "M 3 16.5 L 17 2.5",
        }
    };

    const middleVariants = {
        // This is the MIDDLE line in the Hamburger SVG --> During the "X", its opacity transitions to 0 - Therefore, it is not visible
        closed: {
            opacity: 1,
        },
        open: {
            opacity: 0,
        }
    };

    const bottomVariants = {
        // This is the BOTTOM line in the Hamburger SVG --> During the "X", it changes its path with smooth transition (Slope is bot/right -> top/left)
        closed: {
            d: "M 2 16.346 L 20 16.346",
        },
        open: {
            d: "M 3 2.5 L 17 16.346",
        }
    };

  return (
    <div onClick={()=> setIsOpen(isOpen ? false : true)} className={`${classNames || ""} cursor-pointer`}>
        <svg width="23" height="23" viewBox="0 0 23 23" >
            <Path               
            variants={topVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
            stroke="#ffffff" //Dynamic change with switch statement         
            />
            <Path
            variants={middleVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.1 }}
            d="M 2 9.423 L 20 9.423"
            stroke="#ffffff"               

            />
            <Path
            variants={bottomVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
            stroke="#ffffff"               

            />
        </svg>
    </div>
  )
}

export default HamburgerIcon;

//Imports
import { motion } from "framer-motion";
//Design
import ChangeStyle from "../design/ChangeStyle";


const HamburgerMenu = ({isOpen, style, classNames}) => {

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

  let singleBorder = "";
  switch(style){
    case "primary":
      singleBorder = "border-primary/55";
      break;
    case "red":
      singleBorder = "border-red/55";
      break;
    case "green":
      singleBorder = "border-green/55";
      break;
    default:
      singleBorder = "border-contrastBg/55";
  };

  return (
    <motion.nav
    variants={revealVariants}
    animate={isOpen ? "open" : "closed"}
    transition={{duration: 0.3, ease: "easeInOut"}}
    className={`z-40 fixed left-0 ${classNames || "top-5"} h-[40rem] w-[20rem] rounded-e-xl bg-background border-e border-b border-t ${singleBorder} flex flex-col items-center justify-center`}
    >
      <ChangeStyle />
    </motion.nav>
  )
}

export default HamburgerMenu;

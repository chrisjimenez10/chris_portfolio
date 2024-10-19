//Imports
import { motion } from "framer-motion";
//Design
import ChangeStyle from "../design/ChangeStyle";


const HamburgerMenu = ({isOpen, style, classNames, navIcons}) => {

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
    className={`z-40 fixed left-0 ${classNames || "top-5"} h-[40rem] w-[20rem] rounded-e-xl bg-background border-e border-b border-t ${singleBorder} flex flex-col items-start justify-around`}
    >
      <ChangeStyle />
      <div className="flex flex-col gap-y-5">
        <h1 className="border-b">Socials</h1>
        <div className="flex gap-5">
          {navIcons.map(({id, image, title, url})=>(
            <div key={id} className="cursor-pointer transition-transform duration-200 hover:scale-110 bg-white rounded-full p-1 border-[2px] border-background">
              <a href={url} target={"_blank"}>
                <img src={image} alt={title} width={30} height={30} />
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </motion.nav>
  )
}

export default HamburgerMenu;

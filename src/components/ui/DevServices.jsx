//Imports
import { motion } from "framer-motion";
//UI
import QuiverWordEffect from "./QuiverWordEffect";

const DevServices = ({title, style, colorVariants, services}) => {

  //Animation Variants
  const slideCoverVariants = {
    initial: {
      // x: "-0%",
      y: "0%",
    },
    animate: {
      // x: "-100%",
      y: "-100%",
    }
  };
      
  let bgGradient = "";
  let singleBorder = "";
  switch(style){
    case "primary":
      bgGradient = "blueGradient";
      singleBorder = "border-primary/45";
      break;
    case "red":
      bgGradient = "redGradient";
      singleBorder = "border-red/45";
      break;
    case "green":
      bgGradient = "greenGradient";
      singleBorder = "border-green/45";
      break;
    case "purple":
      bgGradient = "purpleGradient";
      singleBorder = "border-purple/45";
      break;
    default:
      bgGradient = "defaultGradient";
      singleBorder = "border-defaultGradient/45";
  };


  return (
    // Flex-Row Services container for 2xl+ screen size - Carousel for screen sizes smaller than 2xl
    <div className="hidden 2xl:flex flex-col items-center justify-center gap-y-8">
      <h1 className="text-4xl text-textColor font-bold">
        <span className="font-normal">{title.substring(0, 2)}</span>
        <span className="font-bold">{title.substring(2, 11)}</span>
        <span className={`${colorVariants[style].text} font-bold`}>.</span>
      </h1>

      <div className={`relative [&>div]:rounded-xl flex items-center justify-center gap-x-8 h-[25rem]`}>
        {services.map(({id, topTitle, botTitle})=>(
          // {/* Hover reveal effect card container */}
          <motion.div
          key={id} 
          className={`relative bg-background/85 h-full w-[28rem] flex flex-col items-center justify-center cursor-pointer overflow-hidden border ${singleBorder}`}         
          initial="initial"
          whileHover="animate"
          transition={{delayChildren: 0, staggerChildren: .02}}
          >
            {/* Card TOP */}
            <motion.div 
            className={`absolute inset-0 flex flex-col items-center justify-center ${bgGradient} overflow-hidden rounded-xl z-10`}
            variants={slideCoverVariants}
            transition={{duration: 0.7}}
            >
              <h1 className="text-textColor text-2xl font-semibold">{topTitle}</h1>
            </motion.div>
            {/* Card BOTTOM --> Card is actually the parent container card */}
            <h1 className="2xl:text-3xl font-semibold text-textColor">
              <QuiverWordEffect phrase={botTitle} classNames="z-0" style={style} colorVariants={colorVariants}/>
            </h1>
          </motion.div>
        ))}        
      </div>

    </div>
  )
}

export default DevServices;


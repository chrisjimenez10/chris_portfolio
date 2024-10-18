//Imports
import { motion } from "framer-motion";

const DevServices = ({title, style, colorVariants}) => {

  //Animation Variants
  const slideCoverVariants = {
    initial: {
      x: "-0%",
    },
    animate: {
      x: "-100%",
    }
  };

  return (
    // Flex-Row Services container for 2xl+ screen size - Carousel for screen sizes smaller than 2xl
    <div className="hidden 2xl:flex flex-col items-center justify-center gap-y-5 overflow-hidden">
      <h1 className="text-4xl">{title}</h1>

      <div className={`${colorVariants[style].bg} [&>div]:rounded-xl flex items-center justify-center gap-x-8 h-[25rem]`}>

        {/* Hover reveal effect card container */}
        <motion.div 
        className="relative bg-pink-300 h-full w-[28rem] flex flex-col items-center justify-center cursor-pointer"
        initial="initial"
        whileHover="animate"
        transition={{delayChildren: 0, staggerChildren: .02}}
        >
          {/* Card TOP */}
          <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center bg-emerald-200 overflow-hidden rounded-xl"
          variants={slideCoverVariants}
          transition={{duration: 0.7}}
          >
            <h1 className="text-background">Phase 1</h1>
          </motion.div>
          {/* Card BOTTOM */}
          <h1>HELLO</h1>
        </motion.div>


        <div className="bg-purple-400 h-full w-[28rem] flex flex-col items-center justify-center">Phase 2</div>
        <div className="bg-slate-400 h-full w-[28rem] flex flex-col items-center justify-center">Phase 3</div>
      </div>
    </div>
  )
}

export default DevServices;


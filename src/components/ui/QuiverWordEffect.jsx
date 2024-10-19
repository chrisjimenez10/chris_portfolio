//Imports
import { motion } from "framer-motion";


const QuiverWordEffect = ({phrase, classNames, style, colorVariants}) => {

    //Animation Variants
    const DURATION = 0.25;
    const STAGGER = 0.025;
    const INTERVAL = 2;

    const initiallyVisibleVariants = {
        initial: {
            y: "0%",           
        },
        animate: {
            y: "-100%",           
        }
    };

    const initiallyHiddenVariants = {
        initial: {
            y: "100%",
        },
        animate: {
            y: "0%",
        }
    };

  return (
    <motion.div
    initial="initial"
    whileInView="animate"
    className={`relative block overflow-hidden whitespace-nowrap ${classNames || ""}`}
    >
        {/* Initially VISIBLE */}
      <div>
        {phrase.split("").map((char, index)=>(
            <motion.span key={index}
            variants={initiallyVisibleVariants}
            transition={{
                delay: STAGGER * index,
                duration: DURATION,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: INTERVAL,
            }}
            className={`inline-block ${colorVariants[style].text}`}
            >
                {char}
            </motion.span>
        ))}
      </div>
      {/* Initially HIDDEN  */}
      <div className="absolute inset-0">
        {phrase.split("").map((char, index)=>(
            <motion.span key={index}
            variants={initiallyHiddenVariants}
            transition={{
                delay: STAGGER * index,
                duration: DURATION,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: INTERVAL,
            }}
            className="inline-block"
            >
                {char}
            </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default QuiverWordEffect;

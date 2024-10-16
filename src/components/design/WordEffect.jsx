//Imports
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const WordEffect = ({phrase, classNames, headingType}) => {

    //Context
    const {style, colorVariants} = useContext(ThemeContext);

    //Phrase Split
        //We want to create an array of the characters in the string, so we can animate each character to fade in and render an elegant individual character reveal
    let phraseArr = phrase.split("");

    //Animation Variants: Characters
    const charVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    };

    const MainHeading = () => {
        return (
            <motion.h1 className={`${classNames || ""}`}
            initial="initial"
            whileInView="animate"
            //Here, we are using the "delayChildren" porperty because our page transition takes some time to conclude and the component is mounted already, so the animation will be triggered at the same time as the page transition
            transition={{delayChildren: 0.8, staggerChildren: .02}}
            >
              {phraseArr.map((char, index)=>(
                <motion.span
                key={index}
                transition={{duration: 0.6}}
                variants={charVariants}
                className={`${index < 31 ? colorVariants[style].text : ""}`}
                >
                    {char}
                </motion.span>
              ))}
            </motion.h1>
          )
    }

     const SubHeading = () => {
        return (
            <motion.h2 className={`${classNames || ""}`}
            initial="initial"
            whileInView="animate"
            transition={{delayChildren: 0.8, staggerChildren: .01}}
            >
              {phraseArr.map((char, index)=>(
                <motion.span
                key={index}
                transition={{duration: 0.6}}
                variants={charVariants}
                >
                    {char}
                </motion.span>
              ))}
            </motion.h2>
          )
    }

    return headingType === "h1" ? MainHeading() : SubHeading();
  
}

export default WordEffect;



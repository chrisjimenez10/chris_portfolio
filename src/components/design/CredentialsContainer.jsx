//Imports
import { useState } from "react";
import { motion } from "framer-motion";
//Components
import Credentials from "./Credentials";
import Experience from "./Experience";
//UI
import Skills from "./Skills";

const CredentialsContainer = ({classNames, theme, style, colorVariants}) => {

    //State
    const [category, setCategory] = useState("skills");

    //Animation Variants
    const transitionVariants = {
        initial: {
            opacity: 0,
            y: "-20%",
        },
        animate: {
            opacity: 1,
            y: "0%",
        },
    };


  return (
    <div className={`flex flex-col gap-8 rounded-2xl ${classNames || ""} ${theme === "dark" ? "bg-hexBg/65 p-2" : "bg-background/75 p-2"}`}>
        <div className="flex gap-5 items-center justify-center ">
            <div className="">
                <h1 className={`text-xl xl:text-2xl font-semibold ${category === "skills" ? colorVariants[style].text : "text-textColor"} transition-colors hover:${colorVariants[style].text} hover:cursor-pointer`} onClick={()=> setCategory("skills")}>Skills</h1>
            </div>

            {/* Vertical Line */}
            <div className="h-5 w-[.15rem] xl:h-6 bg-contrastBg/65"/>

            <div className="">
                <h1 className={`text-xl xl:text-2xl font-semibold ${category === "experience" ? colorVariants[style].text : "text-textColor"} transition-colors hover:${colorVariants[style].text} hover:cursor-pointer`} onClick={()=> setCategory("experience")}>Experience</h1>
            </div>

            {/* Vertical Line */}
            <div className="h-5 w-[.15rem] xl:h-6 bg-contrastBg/65"/>

            <div className="">
                <h1 className={`text-xl xl:text-2xl font-semibold ${category === "credentials" ? colorVariants[style].text : "text-textColor"} transition-colors hover:${colorVariants[style].text} hover:cursor-pointer`} onClick={()=> setCategory("credentials")}>Credentials</h1>
            </div>
        </div>

        {category === "skills" && (
            <motion.div
            id="skills"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            transition={{delay: 0, duration: 1, ease: "easeInOut"}}
            >
                <Skills />
            </motion.div>
        )}
        {category === "experience" && (
            <motion.div
            id="experience"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            transition={{delay: 0, duration: 1, ease: "easeInOut"}}
            >
                <Experience />
            </motion.div>
        )}
        {category === "credentials" && (
            <motion.div
            id="credentials"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            transition={{delay: 0, duration: 1, ease: "easeInOut"}}
            >
                <Credentials />
            </motion.div>
        )}
    </div>
  )
}

export default CredentialsContainer;

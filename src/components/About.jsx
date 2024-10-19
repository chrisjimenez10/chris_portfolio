//Imports
import { aboutHeading, aboutDescription } from "../constants";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import { motion } from "framer-motion";
//UI
import Section from "./design/Section";
import CredentialsContainer from "./design/CredentialsContainer";
import DynamicStats from "./design/DynamicStats";
import HexagonParticlesContainer from "./design/HexagonParticlesContainer";

const About = () => {

  //Context
  const {theme, style, colorVariants} = useContext(ThemeContext);

  //Screen Size (xl = 1280px)
  const xl = 1280
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenSize(window.innerWidth);
  }
  useEffect(()=>{
    // NOTE: We are adding an event listener as means of updating screenSize state using the window object rather than updating state HERE and adding the state in the dependency array, so that we DON'T create an infinite loop of re-rendering and changing screen size infinitely
    window.addEventListener("resize", handleResize);
    return ()=> {window.removeEventListener("resize", handleResize)}; //Arrow function as a return statement to REMOVE event listener
  },[]);

  //Animation Variants
  const topVariants = {
    initial: {
      opacity: 0,
      x: "-100%"
    },
    animate: {
      opacity: 1,
      x: "0%"
    }
  };
  const topLargeVariants = {
    // Animation descending into view
    initial: {
      opacity: 0,
      y: "-100%"
    },
    animate: {
      opacity: 1,
      y: "0%"
    }
  };

  const bottomVariants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      opacity: 1,
      x: "0%",
    },
  };


  return (
    <Section id="about" classNames="mt-8 md:mt-[7.8rem] 2xl:mt-[12rem] overflow-hidden">
      <HexagonParticlesContainer classNames="z-0" theme={theme} style={style}/>
      <div className="flex flex-col items-center justify-center p-5 gap-5 xl:flex-row xl:justify-around">

        <motion.div
        id="top"
        variants={screenSize >= xl ? topLargeVariants : topVariants}
        whileInView="animate"
        initial="initial"
        animate="animate"
        transition={{delay: 0.2, duration: 2.5, ease: "easeInOut"}}
        className={`flex flex-col gap-4 items-center justify-center lg:w-[750px] xl:gap-8 lg:text-center xl:text-start xl:items-start xl:pl-10 z-10 ${theme === "dark" ? "bg-hexBg/65 rounded-2xl p-2" : "bg-background/75"}`}>
          <h1 className="text-textColor text-3xl lg:text-5xl font-bold">
            <span className={`${colorVariants[style].text}`}>{aboutHeading.substring(0, 27)}</span>
            <span>{aboutHeading.substring(27, 50)}</span>
          </h1>
          <h2 className="text-textColor text-base sm:text-lg lg:text-xl leading-relaxed md:leading-loose lg:leading-loose xl:leading-loose">
            <span>{aboutDescription.substring(0, 3)}</span>
            <span className={`${colorVariants[style].text} font-bold`}>{aboutDescription.substring(3, 23)}</span>
            <span>{aboutDescription.substring(23, 494)}</span>
          </h2>
          <DynamicStats classNames="flex mt-[2rem] sm:mt-10 xl:mt-0" style={style} colorVariants={colorVariants}/>
        </motion.div>

        <motion.div 
        id="bottom"
        variants={bottomVariants}
        whileInView="animate"
        initial="initial"
        animate="animate"
        transition={{delay: 0.2, duration: 2.5, ease: "easeInOut"}}
        className="z-10 ">
          <CredentialsContainer classNames="mt-[2rem] sm:mt-[3rem] xl:w-[650px] xl:h-[400px] z-10" theme={theme} style={style} colorVariants={colorVariants}/>
        </motion.div>
        {/* Expand BOTTOM for mobile device screen sizes, so that bottom nav bar DOES NOT cover content */}
        <div className="h-[100px] md:hidden"/>

      </div>
    </Section>
  )
}

export default About;
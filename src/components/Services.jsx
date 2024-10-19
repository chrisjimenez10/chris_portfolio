//Imports
import { useContext } from "react";
import { ThemeContext } from "../App";
import { projects, services } from "../constants";
import { motion } from "framer-motion";
//Design
import Section from "./design/Section";
//UI
import DevServices from "./ui/DevServices";
import Cards from "./ui/Cards";
import TriangleParticles from "./ui/TriangleParticles";

const Services = () => {

    //Context
    const {style, colorVariants, theme} = useContext(ThemeContext);

    //Props
    const CardsProps = {
      title: "Recent Projects",
      style,
      colorVariants,
      projects,
      margins: "",
    };

    const DevServicesProps = {
      title: "My Services",
      style,
      colorVariants,
      services,
    };

    const TriangleParticlesProps = {
      style,
      theme,
      classNames: "z-0",
    };

    //Animation Variants
    const DevServicesVariants = {
      initial: {
        y: "-20%",
        opacity: 0
      },
      animate: {
        y: "0%",
        opacity: 1
      }
    };

    const CardsVariants = {
      initial: {
        x: "-20%",
        opacity: 0,
      },
      animate: {
        x: "0%",
        opacity: 1,
      }
  };


  return (
    <Section id="projects" classNames="flex flex-col items-center justify-center gap-y-20" padding="px-5 py-2">
      
      <TriangleParticles {...TriangleParticlesProps}/>
      
      <motion.div className="z-10"
      id="DevServices"
      variants={DevServicesVariants}
      initial="initial"
      whileInView="animate"
      transition={{delay: 0.8, duration: 1, ease: "easeInOut"}}
      >
        <DevServices {...DevServicesProps}/>
      </motion.div>
      
      <motion.div className="z-10"
      id="Cards"
      variants={CardsVariants}
      initial="initial"
      whileInView="animate"
      transition={{delay: 0.5, duration: 1.5, ease: "easeInOut"}}
      >
        <Cards {...CardsProps}/>
      </motion.div>
      
      <div className="h-[100px] md:hidden"></div>
    </Section>
  )
}

export default Services;
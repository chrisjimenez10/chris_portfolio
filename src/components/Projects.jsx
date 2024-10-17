//Imports
import { useContext } from "react";
import { ThemeContext } from "../App";
//Design
import Section from "./design/Section";
//UI
import BentoGrid from "./ui/BentoGrid";
import DevServices from "./ui/DevServices";

const Projects = () => {

    //Context
    const {style, colorVariants} = useContext(ThemeContext);

    //Props
    const BentoProps = {
      title: "Projects",
      style,
      colorVariants,
    };


  return (
    <Section id="projects" classNames="flex flex-col items-center justify-center" padding="px-5 py-2">

      <DevServices />
    
      <BentoGrid {...BentoProps}/>

    </Section>
  )
}

export default Projects;
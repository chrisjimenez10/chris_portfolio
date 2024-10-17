//Imports
import { useContext } from "react";
import { ThemeContext } from "../App";
import { projects } from "../constants";
//Design
import Section from "./design/Section";
//UI
import BentoGrid from "./ui/BentoGrid";
import DevServices from "./ui/DevServices";
import Cards from "./ui/Cards";

const Projects = () => {

    //Context
    const {style, colorVariants} = useContext(ThemeContext);

    //Props
    const CardsProps = {
      title: "Projects",
      style,
      colorVariants,
      projects,

    };


  return (
    <Section id="projects" classNames="flex flex-col items-center justify-center" padding="px-5 py-2">

      <DevServices />

      <Cards {...CardsProps}/>

      {/* <BentoGrid {...BentoProps}/> */}

    </Section>
  )
}

export default Projects;
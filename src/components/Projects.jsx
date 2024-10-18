//Imports
import { useContext } from "react";
import { ThemeContext } from "../App";
import { projects } from "../constants";
//Design
import Section from "./design/Section";
//UI
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
      margins: "",
    };

    const DevServicesProps = {
      title: "Services",
      style,
      colorVariants,      
    };


  return (
    <Section id="projects" classNames="flex flex-col items-center justify-center gap-y-8" padding="px-5 py-2">

      <DevServices {...DevServicesProps}/>

      <Cards {...CardsProps}/>
      <div className="h-[100px] md:hidden"></div>

    </Section>
  )
}

export default Projects;
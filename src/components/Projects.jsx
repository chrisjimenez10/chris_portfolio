//Imports
import { useContext } from "react";
import { ThemeContext } from "../App";
import { projects, services } from "../constants";
//Design
import Section from "./design/Section";
//UI
import DevServices from "./ui/DevServices";
import Cards from "./ui/Cards";
import TriangleParticles from "./ui/TriangleParticles";

const Projects = () => {

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


  return (
    <Section id="projects" classNames="flex flex-col items-center justify-center gap-y-20" padding="px-5 py-2">
      <TriangleParticles {...TriangleParticlesProps}/>
      <DevServices {...DevServicesProps}/>
      <Cards {...CardsProps}/>
      <div className="h-[100px] md:hidden"></div>
    </Section>
  )
}

export default Projects;
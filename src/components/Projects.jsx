//Imports
import { useContext } from "react";
import { ThemeContext } from "../App";
//UI
import Section from "./design/Section";

const Projects = () => {

    //Context
    const {style, colorVariants} = useContext(ThemeContext);


  return (
    <Section id="projects" classNames="">
      <div className={`flex flex-col items-center justify-center`}>
        <h1 className="text-textColor text-2xl">Projects</h1>

      </div>
    </Section>
  )
}

export default Projects;
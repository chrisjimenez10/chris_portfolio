//Imports
import { useContext } from "react";
import { ThemeContext } from "../App";
//UI
import Section from "./ui/Section";
import ChangeStyle from "./ui/ChangeStyle";

const Projects = () => {

    //Context
    const {style, colorVariants} = useContext(ThemeContext);


  return (
    
    <Section>
    <div className={`flex flex-col items-center justify-center ${colorVariants[style].bg}`}>
      <h1 className="text-textColor text-2xl">Projects</h1>
      <ChangeStyle />
    </div>
    </Section>
    
  )
}

export default Projects;
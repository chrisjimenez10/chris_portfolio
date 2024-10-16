//Imports
import { useContext } from "react";
import { ThemeContext } from "../App";
//UI
import Section from "./design/Section";

const Projects = () => {

    //Context
    const {style, colorVariants} = useContext(ThemeContext);


  return (
    <Section id="projects" classNames="" padding="px-10">
      <main className="flex flex-col items-center justify-center w-full">
        <h1 className="">Projects</h1>
        <div className="w-[800px] h-[700px] grid grid-cols-4 grid-rows-6 gap-3 p-1 m-5">
          <div className="col-span-2 row-span-2 flex flex-col items-center justify-center bg-green rounded-2xl">1</div>
          <div className="col-span-2 row-span-4 flex flex-col items-center justify-center bg-red rounded-2xl">2</div>
          <div className="col-span-2 row-span-2 flex flex-col items-center justify-center bg-pink-400 rounded-2xl">3</div>
          <div className="col-span-4 row-span-2 flex flex-col items-center justify-center bg-textAccent rounded-2xl">4</div>
        </div>
      </main>
    </Section>
  )
}

export default Projects;
//Imports
import { IoReloadOutline } from "react-icons/io5";
import { useContext } from "react";
import { ThemeContext } from "../../App";
//UI
import Section from "./Section";

const Loader = () => {

  //Context
  const {style, colorVariants} = useContext(ThemeContext);

  //Props
  const SectionProps = {
    id: "",
    classNames: "",
    margins: "mt-[10rem]",
    padding: "py-5 px-5",
  };

  return (
    <Section {...SectionProps}>
      <div className="flex flex-col gap-5 items-center justify-center text-center">
        <h1 className="text-4xl text-textColor font-bold">Loading...</h1>
        <IoReloadOutline size={50} className={`animate-spin ${colorVariants[style].text}`}/>        
      </div>
    </Section>
  )
}

export default Loader;
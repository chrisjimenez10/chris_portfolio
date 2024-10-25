//Imports
import { useContext, useRef } from "react";
import { ThemeContext } from "../App";
import { robotVideo } from "../assets";
import { MdOutlineError } from "react-icons/md";
//UI
import Section from "./design/Section";

const Error = () => {

  //Context
  const {style, colorVariants} = useContext(ThemeContext);

  //DOM Reference
  const videoRef = useRef(null);

  //Props
  const SectionProps = {
    id: "",
    classNames: "",
    margins: "mt-[5rem] md:mt-[11rem] xl:mt-[15rem]",
    padding: "",
  };

  return (
    <Section {...SectionProps}>
      <div className="flex flex-col gap-10 items-center justify-center xl:flex-row xl:justify-around">

        <div className="flex flex-col gap-5">
          <div className="relative flex items-center justify-center gap-2">
            <MdOutlineError size={50} className={`${colorVariants[style].text}`}/>
            <h1 className="text-textColor text-6xl md:text-9xl uppercase font-bold">404</h1>
            <div className="absolute bottom-[-10px] h-[.15rem] w-[7rem] xl:w-[15rem] bg-contrastBg/35"/>
            <MdOutlineError size={50} className={`${colorVariants[style].text}`}/>
          </div>
          <h2 className="text-3xl md:text-5xl text-center text-textColor">Oops, <span className={`${colorVariants[style].text} font-semibold`}>Error!</span><br/>
            <span className="text-xl md:text-2xl">The page you are looking for doesn't exist</span>
          </h2>
        </div>
        
        <video className="w-[340px] md:w-[500px] xl:w-[600px] 2xl:w-[800px] rounded-md" ref={videoRef} src={robotVideo} typeof="video/mp4" autoPlay muted loop playsInline/>
      </div>
    </Section>
  )
}

export default Error;
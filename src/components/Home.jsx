//Imports
import { chrisPortrait } from "../assets";
import { homeHeading, homeDescription } from "../constants";
import { RiFileDownloadLine } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import { developerName } from "../constants";
import { useContext } from "react";
import { ThemeContext } from "../App";
//UI
import WordEffect from "./design/WordEffect";
import ParticlesContainer from "./design/ParticlesContainer";


const Home = () => {

  //Context
  const {style, colorVariants} = useContext(ThemeContext);

  return (

    <div className="flex flex-col space-y-7 sm:space-y-[3rem] items-center justify-center md:mt-[3.5rem] lg:mt-[9rem] lg:mx-5 lg:gap-7 lg:flex-row lg:justify-around">
      <ParticlesContainer classNames="z-0" style={style}/>

      <div className="z-10 flex flex-col items-center justify-center gap-5">
        <div className="bg-contrastBg p-[2px] rounded-2xl shadow-shadow">
          <div className="bg-surface p-7 rounded-2xl">
            <img src={chrisPortrait} alt="Chris Portrait" className="bg-black/75 rounded-2xl w-[200px] sm:w-[300px] lg:w-[400px] xl:w-[450px]" />
          </div>
        </div>
        <h1 className="hidden md:flex text-textColor text-2xl items-center justify-center">
          <span className="font-bold">{developerName.substring(0, 11)}</span>
          <span className="font-extralight"> {developerName.substring(12,20)}</span>
          <span className={`${colorVariants[style].text}`}>{"."}</span>
        </h1>
      </div>

      <div className="z-10 flex flex-col items-center justify-center px-[10px] space-y-2 md:space-y-5 lg:w-[800px]">
        <WordEffect phrase={homeHeading} classNames={`text-2xl xs:text-3xl sm:text-4xl sm:text-center lg:text-5xl xl:text-6xl lg:text-start font-bold text-textColor`} headingType="h1"/>       
        <WordEffect phrase={homeDescription} classNames={`text-sm xs:text-base sm:text-xl sm:text-center lg:text-start lg:text-2xl xl:text-3xl text-textColor font-semibold`} headingType="h2"/>
        
        <div className="flex space-x-5 translate-y-3">
          {/* We can use the browser's built-in functionality of downloading a PDF using anchor tag: 1.The href attribute is the path to the PDF document, 2.The download attribute is the name given to the file when downloaded by user and it also FORCES download rather than opening in browser --> NOTE: We have to place the PDF in the Public directory to use it this way */}
          <a href="/Christopher_Jimenez_Resume.pdf" download="Christopher_Jimenez_Resume.pdf">
            <div className="bg-contrastBg rounded-md p-2 transition-colors hover:bg-background border border-contrastBg group cursor-pointer">
              <div className="group-hover:animate-pulse flex items-center justify-center gap-2">
                <h1 className="text-sm md:text-xl font-semibold text-background group-hover:text-textColor">Resume</h1>
                <RiFileDownloadLine size={20} className="text-background group-hover:text-textColor group-hover:skew-y-[25deg]"/>  
              </div>                   
            </div>
          </a>
          <Link to="/contact">        
            <div className="bg-contrastBg p-2 rounded-md transition-colors hover:bg-background border border-contrastBg group cursor-pointer">
              <div className="group-hover:animate-pulse flex items-center justify-center gap-2">
                <h1 className="text-sm md:text-xl font-semibold text-background group-hover:text-textColor">
                  Contact
                </h1>
                <FaLocationArrow size={20} className="text-background group-hover:text-textColor transition-all duration-300 group-hover:rotate-45"/>
              </div>         
            </div>
          </Link> 
        </div>              
      </div>

    </div>

  )
}

export default Home;
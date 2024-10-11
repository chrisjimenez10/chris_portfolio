//Imports
import { chrisPortrait } from "../assets";
import { homeHeading, homeDescription } from "../constants";
import { RiFileDownloadLine } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import { developerName } from "../constants";
//UI
import WordEffect from "./ui/WordEffect";
import ParticlesContainer from "./ui/ParticlesContainer";


const Home = () => {


  return (

    <div className="flex flex-col space-y-10 lg:flex-row lg:gap-5 lg:justify-center lg:items-center items-center justify-around md:translate-y-10 mt-[3.5rem] bg-pink-300 h-full w-full">
      <ParticlesContainer classNames="z-0"/>

      <div className="z-10 bg-red-400 flex flex-col items-center justify-center gap-1">
        <div className="bg-contrastBg p-[2px] rounded-2xl shadow-shadow">
          <div className="bg-surface p-7 rounded-2xl">
            <img src={chrisPortrait} alt="Chris Portrait" className="bg-black/75 rounded-2xl w-[300px]" />
          </div>
        </div>
        <h1 className="hidden md:flex text-textColor items-center justify-center">
          <span className="font-bold">{developerName.substring(0, 11)}</span>
          <span className="font-extralight"> {developerName.substring(12,20)}</span>
          <span className="text-primary">{"."}</span>
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start space-y-5 bg-purple-400 z-20">
        <WordEffect phrase={homeHeading} classNames={`text-2xl font-bold text-textColor`} headingType="h1"/>       
        <WordEffect phrase={homeDescription} classNames={`text-sm text-textColor`} headingType="h2"/>
        
        <div className="flex space-x-5">
          {/* We can use the browser's built-in functionality of downloading a PDF using anchor tag: 1.The href attribute is the path to the PDF document, 2.The download attribute is the name given to the file when downloaded by user and it also FORCES download rather than opening in browser --> NOTE: We have to place the PDF in the Public directory to use it this way */}
          <a href="/Christopher_Jimenez_Resume.pdf" download="Christopher_Jimenez_Resume.pdf">
            <div className="flex items-center justify-center gap-2 bg-contrastBg rounded-md p-2 transition-colors hover:bg-background border border-contrastBg group cursor-pointer">
              <h1 className="text-sm md:text-xl font-semibold text-background group-hover:text-textColor">Resume</h1>
              <RiFileDownloadLine size={20} className="text-background group-hover:text-textColor group-hover:skew-y-[25deg]"/>        
            </div>
          </a>
          <Link to="/contact">        
            <div className="flex items-center justify-center gap-2 bg-contrastBg p-2 rounded-md transition-colors hover:bg-background border border-contrastBg group cursor-pointer">
              <h1 className="text-sm md:text-xl font-semibold text-background group-hover:text-textColor">
                Contact
              </h1>
              <FaLocationArrow size={20} className="text-background group-hover:text-textColor transition-all duration-300 group-hover:rotate-45"/>         
            </div>
          </Link> 
        </div>              
      </div>

    </div>

  )
}

export default Home;
//Imports
import { chrisPortrait } from "../assets";
import { homeHeading, homeDescription } from "../constants";
import { RiFileDownloadLine } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import { developerName } from "../constants";
//UI
import WordEffect from "./ui/WordEffect";


const Home = () => {


  return (

    <div className="flex flex-col space-y-10 translate-y-[1rem] lg:flex-row items-center justify-around md:translate-y-10 lg:translate-y-[9rem]">

      <div className="w-[300px] md:w-[350px] lg:w-1/3 2xl:-translate-y-10">
        <div className="bg-onBackground p-[2px] rounded-2xl shadow-shadow">
          <div className="bg-surface p-7 rounded-2xl">
            <img src={chrisPortrait} alt="Chris Portrait" className="bg-black/75 rounded-2xl" />
          </div>
        </div>
        <h1 className="hidden md:flex text-onBackground text-3xl lg:text-4xl 2xl:text-5xl items-center justify-center translate-y-5">
          <span className="font-bold">{developerName.substring(0, 11)}</span>
          <span className="font-extralight"> {developerName.substring(12,20)}</span>
          <span className="text-primary">{"."}</span>
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start px-10 md:translate-y-10 lg:w-1/2 space-y-5">
        <WordEffect phrase={homeHeading} classNames={`text-2xl sm:text-4xl md:text-6xl font-bold text-onBackground`} headingType="h1"/>       
        <WordEffect phrase={homeDescription} classNames={`text-sm sm:text-lg md:text-xl text-onSurface`} headingType="h2"/>
        
        <div className="flex space-x-5 translate-y-5">
          {/* We can use the browser's built-in functionality of downloading a PDF using anchor tag: 1.The href attribute is the path to the PDF document, 2.The download attribute is the name given to the file when downloaded by user and it also FORCES download rather than opening in browser --> NOTE: We have to place the PDF in the Public directory to use it this way */}
          <a href="/Christopher_Jimenez_Resume.pdf" download="Christopher_Jimenez_Resume.pdf">
            <div className="flex items-center justify-center gap-2 bg-onBackground rounded-md p-2 transition-colors hover:bg-background border border-onBackground group cursor-pointer">
              <h1 className="text-sm md:text-xl font-semibold text-background group-hover:text-onBackground">Resume</h1>
              <RiFileDownloadLine size={20} className="text-background group-hover:text-onBackground group-hover:skew-y-[25deg]"/>        
            </div>
          </a>
          <Link to="/contact">        
            <div className="flex items-center justify-center gap-2 bg-onBackground p-2 rounded-md transition-colors hover:bg-background border border-onBackground group cursor-pointer">
              <h1 className="text-sm md:text-xl font-semibold text-background group-hover:text-onBackground">
                Contact
              </h1>
              <FaLocationArrow size={20} className="text-background group-hover:text-onBackground transition-all duration-300 group-hover:rotate-45"/>         
            </div>
          </Link> 
        </div>              
      </div>

    </div>

  )
}

export default Home;
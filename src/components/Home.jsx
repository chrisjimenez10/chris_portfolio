//Imports
import { chrisPortrait } from "../assets";
import { homeHeading, homeDescription } from "../constants";
import { RiFileDownloadLine } from "react-icons/ri";

const Home = () => {
  return (

    <div className="flex flex-col space-y-5 translate-y-[1rem] lg:flex-row items-center justify-around md:translate-y-10 lg:translate-y-[9rem]">

      <div className="w-[300px] lg:w-1/3">
        <div className="bg-onBackground p-[2px] rounded-2xl shadow-shadow">
          <div className="bg-surface p-7 rounded-2xl">
            <img src={chrisPortrait} alt="Chris Portrait" className="bg-black rounded-2xl" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start px-10 md:translate-y-10 lg:w-1/2 space-y-5">
        <div className="">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-onBackground">
            {homeHeading}
          </h1>
        </div>
        <div className="">
          <h2 className="text-sm sm:text-lg md:text-xl text-onSurface">
            {homeDescription}
          </h2>
        </div>
        
        <div className="flex items-center justify-center gap-2 bg-onBackground rounded-md p-2 transition-colors hover:bg-background border border-onBackground group cursor-pointer">
          <h1 className="text-sm md:text-xl font-semibold text-background group-hover:text-onBackground">Resume</h1>
          <RiFileDownloadLine size={24} className="text-background group-hover:text-onBackground"/>
        </div>
        
      </div>

    </div>

  )
}

export default Home;
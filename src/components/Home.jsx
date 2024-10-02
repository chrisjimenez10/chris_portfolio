//Imports
import { chrisPortrait } from "../assets";
import { homeHeading, homeDescription } from "../constants";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around lg:translate-y-[9rem]">

      <div className="w-1/3">
        <img src={chrisPortrait} alt="Chris Portrait" className="" />
      </div>

      <div className="flex flex-col items-start justify-start w-1/2 ">
        <div className="">
          <h1 className="text-3xl md:text-6xl font-bold text-onBackground">
            {homeHeading}
          </h1>
        </div>
        <div className="">
          <h2 className="text-base md:text-xl text-onSurface">
            {homeDescription}
          </h2>
        </div>
      </div>

    </div>
  )
}

export default Home;
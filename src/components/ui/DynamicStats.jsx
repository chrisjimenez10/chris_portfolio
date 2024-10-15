//Imports
import CountUp from "react-countup";

const DynamicStats = ({classNames}) => {
  return (
    <div className={`${classNames || "flex"} gap-5 text-start`}>
      
      <div className="flex flex-col">
        <CountUp
        start={-20}
        end={2}
        duration={6}
        delay={1}
        suffix=" +" //Static text AFTER the Number
        redraw={true}
        useEasing={true}
        className="text-primary font-extrabold text-3xl sm:text-4xl"
        />
        <h2 className="text-textColor text-sm sm:text-base font-semibold w-20">Years of Experience</h2>
      </div>
      

      {/* Vertical Line */}
      <div className="h-[4.6rem] w-[0.05rem] sm:h-[5.3rem] sm:w-[.05rem] bg-contrastBg/45"/>

      <div className="flex flex-col">
      <CountUp
        start={0}
        end={35}
        duration={6}
        delay={1}
        suffix=" +" //Static text AFTER the Number
        redraw={true}
        useEasing={true}
        className="text-primary font-extrabold text-3xl sm:text-4xl"
        />
        <h2 className="text-textColor text-sm sm:text-base font-semibold w-20">Satisfied Clients</h2>
      </div>

      {/* Vertical Line */}
      <div className="h-[4.6rem] w-[0.05rem] sm:h-[5.3rem] sm:w-[.05rem] bg-contrastBg/45"/>

      <div className="flex flex-col">
      <CountUp
        start={0}
        end={85}
        duration={6}
        delay={1}
        suffix=" +" //Static text AFTER the Number
        redraw={true}
        useEasing={true}
        className="text-primary font-extrabold text-3xl sm:text-4xl"
        />
        <h2 className="text-textColor text-sm sm:text-base font-semibold w-20">Finished Projects</h2>
      </div>
    </div>
  )
}

export default DynamicStats;

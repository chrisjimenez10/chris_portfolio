//Imports
import { github } from "../../assets";
import { FaLocationArrow } from "react-icons/fa";

const Cards = ({title, style, colorVariants, projects}) => {

//Border Style + Background Gradient for Cards --> Using CSS Classes created in @layer utilities
  let singleBorder = "";
  let solidBorder = "";
  let bgGradient = "";
  switch(style){
    case "primary":
      singleBorder = "border-primary/55";
      solidBorder = "group-hover:border-primary";
      bgGradient = "blueGradient";
      break;
    case "red":
      singleBorder = "border-red/55";
      solidBorder = "group-hover:border-red";
      bgGradient = "redGradient";
      break;
    case "green":
      singleBorder = "border-green/55";
      solidBorder = "group-hover:border-green";
      bgGradient = "greenGradient";
      break;
    default:
      singleBorder = "border-contrastBg/55";
      solidBorder = "group-hover:border-contrastBg";
      bgGradient = "defaultGradient";
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-8">
        <h1 className="text-4xl">{title}</h1>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-5 md:gap-y-8">
            {projects.map(({id, title, image, liveSite, gitHub, desc, tech})=>(
                //Individual Containers (<div> with key={id})
                <div key={id} className={`relative h-[28rem] sm:h-[36rem] lg:h-[38rem] flex flex-col items-start justify-start rounded-2xl transition-all hover:scale-[1.02] group`}>
                    {/* NOTE: Example of how to create a border using a <div /> --> absolute to relative parent and inset-0 */}
                    <div className={`absolute inset-0 border-[.25rem] rounded-xl ${singleBorder} animate-pulse group-hover:animate-none ${solidBorder}`} style={{animationDuration: "1.2s"}}/>
                    <div className="relative flex items-center justify-center sm:w-[590px] w-[80vw] overflow-hidden sm:h-[35vh] h-[25vh] m-3 rounded-xl">
                        <div className={`relative w-full h-full overflow-hidden rounded-xl ${bgGradient}`}>
                            <img src={image} alt={title} className="absolute bottom-0 px-2 rounded-xl"/>                       
                        </div>
                    </div>
                    <div className="w-[18rem] xs:w-[24rem] sm:w-[30rem] p-2 ml-3 rounded-xl">
                        <h1 className={`${colorVariants[style].text} text-base sm:text-lg md:text-xl lg:text-2xl font-bold`}>{title}</h1>
                        <p className="text-textAccent text-sm sm:text-base lg:text-lg font-light">{desc}</p>
                    </div>

                    <div className="flex justify-between items-center px-5 py-3 lg:pb-5 w-full absolute bottom-0">
                      {/* Tech Stack Icons */}
                      <div className="flex items-center justify-center">
                        {tech.map(({id, title, image, bgWhite}, index)=>(
                            <div key={id} className={`${bgWhite ? "bg-white" : "bg-contrastBg"} border border-contrastBg p-1 rounded-full`} style={{transform: `translateX(-${5 * index * 1.5 }px)`}}>
                              <img src={image} alt={title} className="w-[20px] xs:w-[28px] sm:w-[30px] lg:w-[35px] rounded-full" />
                            </div>
                        ))}
                      </div>

                      {/* Links to GitHub Repo + Live Site */}
                      <div className="flex gap-x-3">
                        <a href={gitHub} target="_blank">
                          <img src={github} alt="GitHub SVG" className="bg-white rounded-full w-[24px] lg:w-[32px]"/>
                        </a>
                        <div className="h-[1.6rem] lg:h-[2rem] w-[2px] bg-contrastBg"/>
                        <a href={liveSite} target="_blank" className={`flex items-center justify-center gap-2 group-hover:animate-pulse ${colorVariants[style].text}`} style={{animationDuration: "1s"}}>
                          <h1 className={`text-xl lg:text-2xl`}>Live Site</h1>
                          <FaLocationArrow size={18} className="transition-all group-hover:rotate-45"/>
                        </a>
                      </div>
                    </div>                  
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default Cards;

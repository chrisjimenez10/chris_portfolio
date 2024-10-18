//Imports

const Cards = ({title, style, colorVariants, projects}) => {

//Border Style + Background Gradient for Cards --> Using CSS Classes created in @layer utilities
  let singleBorder = "";
  let bgGradient = "";
  switch(style){
    case "primary":
      singleBorder = "border-primary/55";
      bgGradient = "blueGradient";
      break;
    case "red":
      singleBorder = "border-red/55";
      bgGradient = "redGradient";

      break;
    case "green":
      singleBorder = "border-green/55";
      bgGradient = "greenGradient";
      break;
    default:
      singleBorder = "border-contrastBg/55";
      bgGradient = "defaultGradient";

  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-8">
        <h1 className="text-4xl">{title}</h1>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-5 md:gap-y-8">
            {projects.map(({id, title, image, liveSite, gitHub, desc})=>(
                <div key={id} className={`relative h-[27rem] sm:h-[34rem] lg:h-[38rem] flex flex-col items-start justify-start rounded-2xl transition-all hover:scale-105`}>
                    {/* NOTE: Example of how to create a border using a <div /> --> absolute to relative parent and inset-0 */}
                    <div className={`absolute inset-0 border-[.25rem] rounded-xl ${singleBorder} animate-pulse`} style={{animationDuration: "1.2s"}}/>
                    <div className="relative flex items-center justify-center sm:w-[590px] w-[80vw] overflow-hidden sm:h-[35vh] h-[25vh] m-3 rounded-xl">
                        <div className={`relative w-full h-full overflow-hidden rounded-xl ${bgGradient}`}>
                            <img src={image} alt={title} className="absolute bottom-0 px-2 rounded-xl"/>                       
                        </div>
                    </div>
                    <div className="border w-[18rem] xs:w-[24rem] sm:w-[30rem] p-2 ml-3 rounded-xl">
                        <h1 className={`${colorVariants[style].text} text-base sm:text-lg md:text-xl lg:text-2xl font-bold`}>{title}</h1>
                        <p className="text-textAccent text-sm sm:text-base lg:text-lg font-light">{desc}</p>
                    </div>                  
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default Cards;

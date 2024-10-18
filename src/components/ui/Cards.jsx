import React from 'react'

const Cards = ({title, style, colorVariants, projects}) => {

//Border Style
  let singleBorder = "";
  let bgGradient = "";
  switch(style){
    case "primary":
      singleBorder = "border-primary/35";
      bgGradient = "blueGradient";
      break;
    case "red":
      singleBorder = "border-red/35";
      bgGradient = "redGradient";

      break;
    case "green":
      singleBorder = "border-green/35";
      bgGradient = "greenGradient";
      break;
    default:
      singleBorder = "border-contrastBg/35";
      bgGradient = "defaultGradient";

  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-5">
        {projects.map(({id, title, image, liveSite, gitHub})=>(
            <div key={id} className={`h-[26rem] sm:h-[32rem] lg:h-[38rem] relative flex items-start justify-center rounded-2xl transition-all hover:scale-105`}>
                <div className={`absolute inset-0 border-[.25rem] rounded-xl ${singleBorder} animate-pulse`} style={{animationDuration: "1.2s"}}/>
                <div className="relative flex items-center justify-center sm:w-[590px] w-[80vw] overflow-hidden sm:h-[35vh] h-[25vh] m-3 rounded-xl">
                    <div className={`relative w-full h-full overflow-hidden rounded-xl ${bgGradient}`}>
                        <img src={image} alt={title} className="absolute bottom-0 transition-all px-2 rounded-xl"/>                       
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Cards;

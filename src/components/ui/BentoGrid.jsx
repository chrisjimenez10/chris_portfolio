//Imports
import { motion } from "framer-motion";

const BentoGrid = ({title, style, colorVariants}) => {

  //Border Style
  let borderStyle = "";
  switch(style){
    case "primary":
      borderStyle = "[&>div]:border-primary/65";
      break;
    case "red":
      borderStyle = "[&>div]:border-red/65";
      break;
    case "green":
      borderStyle = "[&>div]:border-green/65";
      break;
    default:
      borderStyle = "[&>div]:border-contrastBg/65"
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-[700px] lg:w-[900px] xl:w-[1180px]">
      <h1 className="">{title}</h1>

      {/* NOTE: We can use the [&>html_element]:css_style Syntax from WITHIN the Parent element to target all children and AVOID repeating the same css styles to each individual element (siblings) */}
      <div className={`w-full h-full grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-6 lg:gap-6 mx-5 group [&>div:nth-child(even)]:text-primary [&>div]:border-[5px] ${borderStyle} [&>div]:rounded-2xl`}>
          <div className="col-span-2 row-span-2 flex flex-col items-center justify-center bg-textAccent">1</div>
          <div className="col-span-2 row-span-2 md:row-span-4 flex flex-col items-center justify-center bg-textAccent">2</div>
          <div className="col-span-2 row-span-2 flex flex-col items-center justify-center bg-textAccent">3</div>
          <div className="col-span-2 row-span-2 md:col-span-4  flex flex-col items-center justify-center bg-textAccent">4</div>
      </div>
    </div>
  )
}

export default BentoGrid;

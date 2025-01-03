//Imports
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import { FaDroplet } from "react-icons/fa6";

const ChangeStyle = () => {

    //Context
    const {style, setStyle, colorVariants} = useContext(ThemeContext);

    useEffect(()=>{
        localStorage.setItem("style", style);
    },[style]);


  return (
    <div className="flex flex-col md:ml-5">
        <h1 className="text-lg text-textColor">Style</h1>
        <div className="h-[0.05rem] w-[15rem] bg-contrastBg" />
        <div className="flex gap-5 mt-3">
            <FaDroplet onClick={()=> setStyle("primary")} className={`${colorVariants["primary"].text} cursor-pointer transition-all hover:scale-110`} size={28}/>
            <FaDroplet onClick={()=> setStyle("red")} className={`${colorVariants["red"].text} cursor-pointer transition-all hover:scale-110`} size={28}/>
            <FaDroplet onClick={()=> setStyle("green")} className={`${colorVariants["green"].text} cursor-pointer transition-all hover:scale-110`} size={28}/>
            <FaDroplet onClick={()=> setStyle("purple")} className={`${colorVariants["purple"].text} cursor-pointer transition-all hover:scale-110`} size={28}/>
        </div>
    </div>
  )
}

export default ChangeStyle;

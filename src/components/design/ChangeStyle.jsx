//Imports
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";

const ChangeStyle = () => {

    //Context
    const {style, setStyle} = useContext(ThemeContext);

    useEffect(()=>{
        localStorage.setItem("style", style);
    },[style]);


  return (
    <div className="flex flex-col">
        <h1 className="border-b">Style</h1>
        <div className="flex gap-5">
            <button onClick={()=> setStyle("primary")}>
                <span className="text-primary">Blue</span>
            </button>
            <button onClick={()=> setStyle("red")}>
                <span className="text-red">Red</span>
            </button>
            <button onClick={()=> setStyle("green")}>
                <span className="text-green">Green</span>
            </button>  
        </div>
    </div>
   
  )
}

export default ChangeStyle;

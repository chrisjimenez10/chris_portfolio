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
    <div className="flex gap-2">
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
  )
}

export default ChangeStyle;

import { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";

const ToggleThemeButton = () => {

  //State
  const [icon, setIcon] = useState("sun");

  //Functions
  const handleIconToggle = () => {
    setIcon(icon === "sun" ? "moon" : "sun");
  }

  return (
    <div className="bg-onBackground/45 rounded-full flex items-center justify-center w-10 h-10">
      <button className="" onClick={handleIconToggle}>
        {icon === "sun" ? <IoIosSunny size={28} color="white" className="animate-spin" style={{animationDuration: "10s"}}/> : <BsMoonStarsFill size={24} color="white" className="animate-pulse" style={{animationDuration: "5s"}}/>}
      </button>
    </div>

  )
}

export default ToggleThemeButton;

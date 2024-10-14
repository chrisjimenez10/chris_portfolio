//Imports
import { useState } from "react";
//Components
import Credentials from "./Credentials";
import Experience from "./Experience";
//UI
import Skills from "./Skills";

const CredentialsContainer = ({classNames}) => {

    //State
    const [category, setCategory] = useState("skills");


  return (
    <div className={`flex flex-col gap-8 ${classNames || ""}`}>
        <div className="flex gap-5 items-center justify-center">
            <div className="">
                <h1 className={`text-xl xl:text-2xl font-semibold ${category === "skills" ? "text-primary" : "text-textColor"} transition-colors hover:text-primary hover:cursor-pointer`} onClick={()=> setCategory("skills")}>Skills</h1>
            </div>

            {/* Vertical Line */}
            <div className="h-5 w-[.15rem] xl:h-6 bg-contrastBg/65"/>

            <div className="">
                <h1 className={`text-xl xl:text-2xl font-semibold ${category === "experience" ? "text-primary" : "text-textColor"} transition-colors hover:text-primary hover:cursor-pointer`} onClick={()=> setCategory("experience")}>Experience</h1>
            </div>

            {/* Vertical Line */}
            <div className="h-5 w-[.15rem] xl:h-6 bg-contrastBg/65"/>

            <div className="">
                <h1 className={`text-xl xl:text-2xl font-semibold ${category === "credentials" ? "text-primary" : "text-textColor"} transition-colors hover:text-primary hover:cursor-pointer`} onClick={()=> setCategory("credentials")}>Credentials</h1>
            </div>
        </div>

        {category === "skills" && (
            <Skills />
        )}
        {category === "experience" && (
            <Experience />
        )}
        {category === "credentials" && (
            <Credentials />
        )}
    </div>
  )
}

export default CredentialsContainer;

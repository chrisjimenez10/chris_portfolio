//Imports
import { useState } from "react";
import { backendDevelopment, devOps, webDevelopment, uiuxDesign } from "../../constants";


const Skills = () => {

    //State
    const [skills, setSkills] = useState("frontend");


  return (
    <div className="flex flex-col text-textColor gap-10">

        <div className="flex gap-10 items-center justify-center bg-background">
            <h1 className={`cursor-pointer relative nav ${skills === "frontend" ? "navStatic" : "text-textAccent/65"}`} onClick={()=> setSkills("frontend")}>Frontend</h1>
            <h1 className={`cursor-pointer relative nav ${skills === "backend" ? "navStatic" : "text-textAccent/65"}`} onClick={()=> setSkills("backend")}>Backend</h1>
            <h1 className={`cursor-pointer relative nav ${skills === "devops" ? "navStatic" : "text-textAccent/65"}`} onClick={()=> setSkills("devops")}>DevOps</h1>
        </div>

        {skills === "frontend" && (
            <div className="h-[250px] flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className='text-center bg-background'>Web Development</h2>
                    <div className="flex flex-wrap gap-5 items-center justify-center">
                        {webDevelopment.map(({id, title, image})=>(
                            <div key={id}>
                                <img src={image} alt={title} width={40} height={40}/>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className='text-center bg-background'>UI/UX Design</h2>
                    <div className="flex flex-wrap gap-5 items-center justify-center">
                        {uiuxDesign.map(({id, title, image})=>(
                            <div key={id}>
                                <img src={image} alt={title} width={40} height={40}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}

        {skills === "backend" && (
            <div className="h-[250px] flex flex-col gap-3">
                <h2 className='text-center bg-background'>Backend Development</h2>
                <div className="flex flex-wrap gap-8 items-center justify-center">
                    {backendDevelopment.map(({id, title, image, bg})=>(
                        <div key={id} className={`${bg ? "bg-white rounded-md px-[2px]" : ""}`}>
                            <img src={image} alt={title} width={40} height={40} />
                        </div>
                    ))}
                </div>
            </div>          
        )}

        {skills === "devops" && (            
            <div className="h-[250px] flex flex-col gap-3">
                <h2 className='text-center bg-background'>DevOps</h2>
                <div className="flex flex-wrap gap-8 items-center justify-center">
                    {devOps.map(({id, title, image, bg})=>(
                        <div key={id} className={`${bg ? "bg-white rounded-md px-[2px]" : ""}`}>
                            <img src={image} alt={title} width={40} height={40}/>
                        </div>
                    ))}
                </div>
            </div>           
        )}
    </div>
  )
}

export default Skills;

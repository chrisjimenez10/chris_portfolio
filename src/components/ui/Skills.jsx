//Imports
import { useState, useEffect } from "react";
import { backendDevelopment, devOps, webDevelopment, uiuxDesign } from "../../constants";


const Skills = () => {

    //State
    const [skills, setSkills] = useState("frontend");

    useEffect(()=>{

    }, [])


  return (
    <div className="flex flex-col text-textColor gap-3">
        <h1 className="border-b border-primary text-center text-2xl">Skills</h1>
        <div className="flex gap-10 items-center justify-center text-lg">
            <h1 className="cursor-pointer hover:underline" onClick={()=> setSkills("frontend")}>Frontend</h1>
            <h1 className="cursor-pointer hover:underline" onClick={()=> setSkills("backend")}>Backend</h1>
            <h1 className="cursor-pointer hover:underline" onClick={()=> setSkills("devops")}>DevOps</h1>
        </div>

        {skills === "frontend" && (
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className='text-center'>Web Development</h2>
                    <div className="flex flex-wrap gap-5 items-center justify-center">
                        {webDevelopment.map(({id, title, image})=>(
                            <div key={id} className="">
                                <img src={image} alt={title} width={40} height={40} className="p-[2px]"/>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className='text-center'>UI/UX Design</h2>
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
            <div className="flex flex-col gap-3">
                <h2 className='text-center'>Backend Development</h2>
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
            <div className="flex flex-col gap-3">
                <h2 className='text-center'>DevOps</h2>
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

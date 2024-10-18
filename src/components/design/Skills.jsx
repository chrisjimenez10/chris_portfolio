//Imports
import { useState } from "react";
import { backendDevelopment, devOps, webDevelopment, uiuxDesign } from "../../constants";
import { motion } from "framer-motion";


const Skills = () => {

    //State
    const [skills, setSkills] = useState("frontend");

    //Animation Variants
    const titlesVariants = {
        initial: {
            opacity: 0,
            x: "10%",
        },
        animate: {
            opacity: 1,
            x: "0%",
        }
    };

    const iconsVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        }
    };


  return (
    <div className="flex flex-col text-textColor gap-10">

        <div className="flex gap-10 items-center justify-center">
            <h1 className={`cursor-pointer relative nav ${skills === "frontend" ? "navStatic" : "text-textAccent/65"}`} onClick={()=> setSkills("frontend")}>Frontend</h1>
            <h1 className={`cursor-pointer relative nav ${skills === "backend" ? "navStatic" : "text-textAccent/65"}`} onClick={()=> setSkills("backend")}>Backend</h1>
            <h1 className={`cursor-pointer relative nav ${skills === "devops" ? "navStatic" : "text-textAccent/65"}`} onClick={()=> setSkills("devops")}>DevOps</h1>
        </div>

        {skills === "frontend" && (
            <div className="h-[250px] flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <motion.h2 className='text-center' variants={titlesVariants} initial="initial" animate="animate" 
                    transition={{delay: 0, duration: 1, ease: "easeInOut"}}>Web Development</motion.h2>
                    <motion.div 
                    initial="initial"
                    whileInView="animate"
                    transition={{delayChildren: 0.2, staggerChildren: 0.2}}
                    className="flex flex-wrap gap-5 items-center justify-center"
                    >
                        {webDevelopment.map(({id, title, image})=>(
                            <motion.div 
                            key={id}
                            variants={iconsVariants}
                            transition={{duration: 1}}
                            >
                                <img src={image} alt={title} width={40} height={40}/>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="flex flex-col gap-2">
                    <motion.h2 className='text-center' variants={titlesVariants} initial="initial" animate="animate" 
                    transition={{delay: 0, duration: 1, ease: "easeInOut"}}>UI/UX Design</motion.h2>
                    <motion.div 
                    initial="initial"
                    whileInView="animate"
                    transition={{delayChildren: 0.2, staggerChildren: 0.2}}
                    className="flex flex-wrap gap-5 items-center justify-center"
                    >
                        {uiuxDesign.map(({id, title, image})=>(
                            <motion.div 
                            key={id}
                            variants={iconsVariants}
                            transition={{duration: 1}}
                            >
                                <img src={image} alt={title} width={40} height={40}/>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        )}

        {skills === "backend" && (
            <div className="h-[250px] flex flex-col gap-3">
                <motion.h2 className='text-center' variants={titlesVariants} initial="initial" animate="animate" 
                    transition={{delay: 0, duration: 1, ease: "easeInOut"}}>Backend Development</motion.h2>
                <motion.div className="flex flex-wrap gap-8 items-center justify-center"
                initial="initial"
                whileInView="animate"
                transition={{delayChildren: 0.2, staggerChildren: 0.2}}
                >
                    {backendDevelopment.map(({id, title, image, bg})=>(
                        <motion.div key={id} className={`${bg ? "bg-white rounded-md px-[2px]" : ""}`}
                        variants={iconsVariants}
                        transition={{duration: 1}}
                        >
                            <img src={image} alt={title} width={40} height={40} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>          
        )}

        {skills === "devops" && (            
            <div className="h-[250px] flex flex-col gap-3">
                <motion.h2 className='text-center' variants={titlesVariants} initial="initial" animate="animate" 
                    transition={{delay: 0, duration: 1, ease: "easeInOut"}}>DevOps</motion.h2>
                <motion.div className="flex flex-wrap gap-8 items-center justify-center"
                initial="initial"
                whileInView="animate"
                transition={{delayChildren: 0.2, staggerChildren: 0.2}}
                >
                    {devOps.map(({id, title, image, bg})=>(
                        <motion.div key={id} className={`${bg ? "bg-white rounded-md px-[2px]" : ""}`}
                        variants={iconsVariants}
                        transition={{duration: 1}}
                        >
                            <img src={image} alt={title} width={40} height={40}/>
                        </motion.div>
                    ))}
                </motion.div>
            </div>           
        )}
    </div>
  )
}

export default Skills;

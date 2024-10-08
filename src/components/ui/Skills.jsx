import { useState } from "react";

const Skills = () => {

    //State
    const [skills, setSkills] = useState("front");


  return (
    <div className="flex flex-col text-onBackground gap-5">
        <h1 className="border-b border-primary text-center text-2xl">Skills</h1>
        <div className="flex gap-20 items-center justify-center text-lg">
            <h1 className="cursor-pointer hover:underline" onClick={()=> setSkills("front")}>Frontend</h1>
            <h1 className="cursor-pointer hover:underline" onClick={()=> setSkills("back")}>Backend</h1>
        </div>

        {skills === "front" && (
            <>
                <div className="">
                    <h2 className='text-center'>Web Development</h2>
                    <div className="flex gap-3 items-center justify-center">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                </div>

                <div className="">
                    <h2 className='text-center'>UI/UX Design</h2>
                    <div className="flex gap-3 items-center justify-center">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                </div>
            </>
        )}

        {skills === "back" && (
            <>
                <div className="">
                    <h2 className='text-center'>Backend Development</h2>
                    <div className="flex gap-3 items-center justify-center">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                </div>

                <div className="">
                    <h2 className='text-center'>DevOps</h2>
                    <div className="flex gap-3 items-center justify-center">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                </div>
            </>          
        )}
    </div>
  )
}

export default Skills;

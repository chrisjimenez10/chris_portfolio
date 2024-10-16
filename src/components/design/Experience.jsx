//Imports
import { experience } from "../../constants";

const Experience = () => {
  return (
    <div className="h-[300px] flex flex-col gap-8 items-center">
      {experience.map(({id, title, date})=>(
        <div key={id} className="flex flex-col gap-2 items-center justify-center text-center text-textAccent/85 font-semibold">
            <h1>{title}</h1>
            <h1>{date}</h1>
        </div>
      ))}
    </div>
  )
}

export default Experience;

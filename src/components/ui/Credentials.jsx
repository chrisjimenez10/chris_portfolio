//Imports
import { credentials } from "../../constants";

const Credentials = () => {
  return (
    <div className="h-[300px] flex flex-col gap-5 items-center justify-center">
      {credentials.map(({id, title, institution, date})=>(
        <div key={id} className="flex flex-col gap-1 items-center justify-center text-center text-textAccent/85">
            <h1>{title}</h1>
            <h1>{institution}</h1>
            <h1>{date}</h1>
        </div>
      ))}
    </div>
  )
}

export default Credentials;

//Imports
import { aboutHeading, aboutDescription } from "../constants";
//UI
import Skills from "./ui/Skills";

const About = () => {
  console.log(aboutDescription.indexOf("impact"))

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-5 gap-5">

      <div className="">
        <h1 className="text-onBackground text-2xl font-bold">
          <span className="text-primary">{aboutHeading.substring(0, 27)}</span>
          <span>{aboutHeading.substring(27, 50)}</span>
        </h1>
      </div>
      <div className="">
        <h2 className="text-onSurface text-base">
          <span>{aboutDescription.substring(0, 3)}</span>
          <span className="text-primary font-bold">{aboutDescription.substring(3, 23)}</span>
          <span>{aboutDescription.substring(23, 494)}</span>
        </h2>
      </div>

      <Skills />

    </div>
  )
}

export default About;
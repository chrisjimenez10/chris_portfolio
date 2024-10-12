//Imports
import { aboutHeading, aboutDescription } from "../constants";
//UI
import Skills from "./ui/Skills";
import Section from "./ui/Section";

const About = () => {
  console.log(aboutDescription.indexOf("impact"))

  return (
    <Section id="about" classNames="">
      <div className="flex flex-col lg:flex-row items-center justify-center p-5 gap-5">

        <div className="">
          <h1 className="text-textColor text-2xl font-bold">
            <span className="text-primary">{aboutHeading.substring(0, 27)}</span>
            <span>{aboutHeading.substring(27, 50)}</span>
          </h1>
        </div>
        <div className="">
          <h2 className="text-textColor text-base">
            <span>{aboutDescription.substring(0, 3)}</span>
            <span className="text-primary font-bold">{aboutDescription.substring(3, 23)}</span>
            <span>{aboutDescription.substring(23, 494)}</span>
          </h2>
        </div>

        <Skills />

        {/* Expand BOTTOM for mobile device screen sizes, so that bottom nav bar DOES NOT cover content */}
        <div className="h-[150px] w-full bg-primary/20 sm:hidden"/>

      </div>
    </Section>
  )
}

export default About;
//Imports
import { aboutHeading, aboutDescription } from "../constants";
//UI
import Section from "./ui/Section";
import CredentialsContainer from "./ui/CredentialsContainer";
import DynamicStats from "./ui/DynamicStats";

const About = () => {
  console.log(aboutDescription.indexOf("impact"))

  return (
    <Section id="about" classNames="md:mt-[7.8rem] 2xl:mt-[12rem]">
      <div className="flex flex-col items-center justify-center p-5 gap-5 xl:flex-row xl:justify-around ">

        <div className="flex flex-col gap-4 items-center justify-center lg:w-[750px] xl:gap-8 lg:text-center xl:text-start xl:items-start xl:pl-10">
          <h1 className="text-textColor text-2xl sm:text-3xl lg:text-5xl font-bold">
            <span className="text-primary">{aboutHeading.substring(0, 27)}</span>
            <span>{aboutHeading.substring(27, 50)}</span>
          </h1>
          <h2 className="text-textColor text-base sm:text-lg lg:text-xl xl:leading-loose">
            <span>{aboutDescription.substring(0, 3)}</span>
            <span className="text-primary font-bold">{aboutDescription.substring(3, 23)}</span>
            <span>{aboutDescription.substring(23, 494)}</span>
          </h2>
          <DynamicStats classNames="hidden xl:flex"/>
        </div>

        <CredentialsContainer classNames="sm:mt-[3rem] xl:w-[650px] xl:h-[400px]"/>

        {/* Expand BOTTOM for mobile device screen sizes, so that bottom nav bar DOES NOT cover content */}
        <div className="h-[100px] w-full bg-primary/20 xs:hidden"/>

      </div>
    </Section>
  )
}

export default About;
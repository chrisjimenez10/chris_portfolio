//Imports
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
//Design
import Section from "./design/Section";
//UI

const Community = () => {

  //Props
  const CommunityProps = {
    id: "",
    classNames: "",
    margins: "mt-[10rem] md:mt-[12rem]",
    padding: "px-5 py-2",
  };

  return (
    <Section {...CommunityProps}>
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-2xl md:text-4xl text-center uppercase italic">Under development, coming soon!</h1>
        <DotLottieReact src="src/assets/lotties/developer.lottie" loop autoplay className="w-[300px] md:w-[500px] lg:w-[600px] xl:w-[800px]"/>
      </div>
    </Section>
  )
}

export default Community;
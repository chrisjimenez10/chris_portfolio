//Imports
//Design
import Section from "./design/Section";
//UI
import Carousel from "./ui/Carousel";

const Community = () => {
  return (
    <Section id="community" classNames="">
      <div className="flex flex-col gap-y-20 items-center justify-center">
        <h1 className="text-textColor text-2xl">Community</h1>
        <Carousel />
      </div>
    </Section>
  )
}

export default Community;
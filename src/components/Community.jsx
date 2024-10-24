//Imports

//Design
import Section from "./design/Section";
//UI

const Community = () => {

  //Props
  const CommunityProps = {
    id: "",
    classNames: "",
    margins: "mt-[3rem] md:mt-[7rem]",
    padding: "px-5 py-2",
  };

  return (
    <Section {...CommunityProps}>
      <div className="flex flex-col gap-y-20 items-center justify-center">
        <h1 className="text-textColor text-2xl">Community</h1>

        <div className="flex flex-col gap-y-5 items-center justify-center text-xl text-center">
          <p className="uppercase italic">Under development, coming soon!</p>
          <p>😎</p>
        </div>
      </div>
    </Section>
  )
}

export default Community;
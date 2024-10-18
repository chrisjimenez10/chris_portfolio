//Imports
//Design
import Section from "./design/Section";
//UI
import ColorStyleNav from "./ui/ColorStyleNav";

const Community = () => {
  return (
    <Section id="community">
      <div className="flex items-center justify-center">
        <h1 className="text-textColor text-2xl">Community</h1>
        <ColorStyleNav />
      </div>
    </Section>
  )
}

export default Community;
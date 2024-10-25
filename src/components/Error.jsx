//Imports
//UI
import Section from "./design/Section";

const Error = () => {

  //Props
  const SectionProps = {
    id: "",
    classNames: "",
    margins: "",
    padding: "",
  };

  return (
    <Section {...SectionProps}>
      <div className="flex items-center justify-center">
        <h1 className="text-textColor text-2xl">Error</h1>
      </div>
    </Section>
  )
}

export default Error;
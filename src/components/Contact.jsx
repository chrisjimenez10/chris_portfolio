//Imports
import { contactInformation, contactTitle, contactSubTitle } from "../constants";
import { useContext } from "react";
import {ThemeContext} from "../App";
//Design
import Section from "./design/Section";
//UI
import ContactForm from "./ui/ContactForm";
//Components
import Footer from "./Footer";

const Contact = () => {

  //Context
  const {style, colorVariants, theme} = useContext(ThemeContext);

  //Props
  const SectionProps = {
    id: "",
    classNames: "",
    margins: "mt-[4rem] md:mt-[7rem]",
    padding: "px-5",
  };
  const ContactFormProps = {
    style,
    colorVariants,
    contactInformation,
    theme,
  };


  return (
    <Section {...SectionProps}>
      <div className="flex flex-col gap-y-5 items-center justify-center">
        <h1 className="relative text-4xl text-textColor text-center">
          <span className="font-light">{contactTitle.substring(0,5)}</span>
          <span className="font-bold">{contactTitle.substring(5, 13)}</span>
          <span className={`${colorVariants[style].text} font-bold`}>
            {contactTitle.substring(13, 14)}
          </span>
          <div className={`absolute bottom-[-8px] h-[.2rem] w-[5rem] ${colorVariants[style].bg}`}/>
        </h1>

        <h2 className="text-2xl text-center text-textColor font-light">
          <span>{contactSubTitle.substring(0, 11)}</span>
          <span className={`${colorVariants[style].text} font-semibold`}>{contactSubTitle.substring(11, 31)}</span>
          <span>{contactSubTitle.substring(31, 67)}</span>
          <span className={`${colorVariants[style].text} font-semibold`}>{contactSubTitle.substring(67)}</span>
        </h2>
      </div>

      <ContactForm {...ContactFormProps}/>

      <Footer className="translate-y-[3rem] md:translate-y-0  xl:translate-y-[3rem]"/>
      <div className="h-[150px] md:hidden"></div>
    </Section>
  )
}

export default Contact;
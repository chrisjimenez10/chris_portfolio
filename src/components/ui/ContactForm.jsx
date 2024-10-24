//Imports
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { contactInformation } from "../../constants";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
//Design
import Section from "../design/Section";
//UI


const ContactForm = ({style, colorVariants}) => {

    //Data
    const [contactAddress, contactPhone, contactEmail] = contactInformation;

    //State
    const [formSent, setFormSent] = useState(false);

    //DOM Reference
    const form = useRef();
    const phoneInput = useRef();

    //Props
    const ContactFormProps = {
        id: "",
        classNames: "",
        margins: "",
        paddings: "",
    };
    const AlertProps = {
      formSent,
      setFormSent,
    };

    //Phone Input - Client side validation (numbers only)
    useEffect(()=>{
        const inputElement = phoneInput.current;
        inputElement.addEventListener("input", (e)=>{
          //Regext Pattern for phone_number input field
          const regex = /^[0-9]*$/; //Accept ONLY Digits 0-9
          if(!regex.test(e.target.value)){
            //Here, we are slicing the value that is provided by the user that DOES NOT pass the regex.test() --> The input is a string, so the index position -1 refers to the LAST/MOST RECENTLY APPENDED element of the string 
            e.target.value = e.target.value.slice(0, -1);
          }
        })
      },[]);

    //Functions
    const sendEmail = async (e) => {
    e.preventDefault();
    if(!form.current) return; //Check for null

    try{
        await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY, 
        });
        setFormSent(true);
    }catch(error){
        console.error("Error sending email:", error);
    }
    };

  return (
    <Section {...ContactFormProps}>
        {/* <Alert {...AlertProps}/> */}
        <div className="flex flex-col items-start justify-center gap-y-5 px-5 py-5">
          <form className="flex flex-col items-start gap-8 w-full [&>div]:w-full [&>div>input]:border [&>div>input]:border-contrastBg/15 [&>div>input]:rounded-md [&>div>label]:text-lg [&>div>input]:px-2 [&>div>input]:text-base" 
          ref={form} onSubmit={sendEmail}>

            <div className="flex flex-col gap-1">
              <label htmlFor="user_name">Full Name : <span className="text-red">{"*"}</span></label>
              <input id="user_name" name="user_name" type="text" required />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="user_email">Email : <span className="text-red">{"*"}</span></label>
              <input id="user_email" name="user_email" type="email" required />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phone_number">Phone Number : </label>
              <input id="phone_number" name="phone_number" type="tel" ref={phoneInput} />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message">Message : <span className="text-red">{"*"}</span></label>
              <textarea id="message" name="message" required className="border border-contrastBg/15 rounded-md"/>
            </div>
                       
            <input type="submit" value="Send" className={`text-white font-black w-full cursor-pointer rounded-md ${colorVariants[style].bg} py-1`}/>            

          </form>

          <div className="h-[0.1rem] bg-contrastBg/15 w-full" />

          <div className="flex flex-col gap-y-3 [&>div>h2]:text-sm [&>div>h2]:text-textAccent">
            <h1 className="text-textColor font-black text-base">Contact Information</h1>
            <div className="flex items-center gap-x-3">
              <FaMapMarkerAlt />
              <h2>{contactAddress}</h2>
            </div>
            <div className="flex items-center gap-x-3">
              <MdOutlineLocalPhone />
              <h2>{contactPhone}</h2>
            </div>
            <div className="flex items-center gap-x-3">
              <MdEmail />
              <h2>{contactEmail}</h2>
            </div>
          </div>
      </div>
    </Section>
  )
}

export default ContactForm;
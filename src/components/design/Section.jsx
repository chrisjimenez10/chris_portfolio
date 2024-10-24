

const Section = ({id, classNames, margins, padding, children}) => {
  return (
    <section 
    className={`${classNames || ""} 
    ${margins || "md:mt-[5.8rem]"} 
    ${padding || ""}`}
    id={id}
    >
      {children}
    </section>
  )
}

export default Section

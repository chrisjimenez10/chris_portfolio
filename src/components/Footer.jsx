
const Footer = ({className}) => {
  return (
    <footer className={`${className || ""} z-20 text-textColor/90 mt-10 md:mt-[4rem]`}>   
        <h1 className="text-center text-xs">
            {new Date().getFullYear()} © Christopher Jimenez. All Rights Reserved.
        </h1>  
    </footer>
  )
}

export default Footer;

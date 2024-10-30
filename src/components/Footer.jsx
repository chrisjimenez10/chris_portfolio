
const Footer = ({className}) => {
  return (
    <footer className={`${className || ""} z-20 text-textColor/65`}>   
        <h1 className="text-center text-xs">
            {new Date().getFullYear()} © Christopher Jimenez. All Rights Reserved.
        </h1>  
    </footer>
  )
}

export default Footer;

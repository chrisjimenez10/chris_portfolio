

const Footer = ({className}) => {
  return (
    <footer className={`${className || ""} text-onBackground/65`}>   
        <h1 className="">
            {new Date().getFullYear()} © Christopher Jimenez. All Rights Reserved.
        </h1>  
    </footer>
  )
}

export default Footer;

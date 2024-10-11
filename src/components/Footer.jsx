
const Footer = ({className}) => {
  return (
    <footer className={`${className || ""} text-textColor/65 fixed bottom-5 hidden lg:block`}>   
        <h1 className="">
            {new Date().getFullYear()} © Christopher Jimenez. All Rights Reserved.
        </h1>  
    </footer>
  )
}

export default Footer;

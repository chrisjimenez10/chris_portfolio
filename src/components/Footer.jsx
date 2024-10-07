

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex flex-wrap flex-col gap-1 items-start justify-center mx-auto text-onBackground/65 p-2">   
        <h1 className="">
            {new Date().getFullYear()} © All Rights Reserved.
        </h1>
        <h2 className="">
            Designed & Developed by Christopher Jimenez
        </h2>    
    </footer>
  )
}

export default Footer;

//Imports
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { navTitles, navIcons } from "../constants";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";
//Components
import MobileMenu from "./design/MobileMenu";
//UI
import ToggleThemeButton from "./design/ToggleThemeButton";
import HamburgerIcon from "./ui/HamburgerIcon";
import HamburgerMenu from "./ui/HamburgerMenu";


const Navbar = () => {

    //Context
    const {style, colorVariants, theme} = useContext(ThemeContext);
    
    //State
    const [isOpen, setIsOpen] = useState(false);

    //Location
    const pathname = useLocation(null);

    //Filtered Nav Items
    const filteredTitles = navTitles.filter(title => title.desktop === true);

    //Props
    const HamburgerMenuProps = {
      isOpen,
      style,
    };
    const MobileHamburgerMenuProps = {
      isOpen,
      style,
      classNames: "top-[3rem] md:hidden",
    };


  return (
    <>
      <div className="hidden fixed top-0 z-50 backdrop-blur-sm w-full md:flex justify-between items-center h-[90px] bg-surface/45">
        <HamburgerIcon classNames="ml-10 z-50" isOpen={isOpen} setIsOpen={setIsOpen} theme={theme}/>
        <HamburgerMenu {...HamburgerMenuProps}/>
        <nav className="flex justify-around items-center md:space-x-20 lg:space-x-32">
          {filteredTitles.map(({id, url, title})=>{
           return(
            <div key={id}>
              <Link to={url} className={`relative ${pathname.pathname === url ? "navStatic": ""}`}>
                <span className="relative text-textColor nav">{title}</span>
              </Link>
            </div>
           )
          })}
        </nav>

        <nav className="flex justify-around items-center space-x-10">
          {/* {navIcons.map(({id, image, title, url})=>(
            <div key={id} className="cursor-pointer transition-transform duration-200 hover:-translate-y-1 bg-white rounded-full p-1 border-[2px] border-background">
              <a href={url} target={"_blank"}>
                <img src={image} alt={title} width={24} height={24} />
              </a>
            </div>
          ))} */}
          <ToggleThemeButton classNames="mr-10"/>
        </nav>
      </div>

      {/* Mobile Device Menu --> Rendering HamburgerMenu again because it is HIDDEN in mobile screens*/}
      <HamburgerMenu {...MobileHamburgerMenuProps}/>
      <MobileMenu navTitles={navTitles} navIcons={navIcons} classNames={`md:hidden`} themeButton={<ToggleThemeButton />} style={style} colorVariants={colorVariants} HamburgerIcon={<HamburgerIcon classNames="z-50" isOpen={isOpen} setIsOpen={setIsOpen} theme={theme}/>} />
    </>
  )
}

export default Navbar;
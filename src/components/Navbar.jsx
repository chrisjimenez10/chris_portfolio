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
      navIcons,
    };
    const MobileHamburgerMenuProps = {
      isOpen,
      style,
      classNames: "md:hidden h-[35rem] w-[18rem]",
      navIcons,
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
                <span className={`relative nav ${pathname.pathname === url ? colorVariants[style].text : "text-textColor"}`}>{title}</span>
              </Link>
            </div>
           )
          })}
        </nav>
        <ToggleThemeButton classNames="mr-10"/>
      </div>

      {/* Mobile Device Menu --> Rendering HamburgerMenu again because it is HIDDEN in mobile screens*/}
      <HamburgerMenu {...MobileHamburgerMenuProps}/>
      <MobileMenu navTitles={navTitles} classNames={`md:hidden`} themeButton={<ToggleThemeButton />} style={style} colorVariants={colorVariants}  isOpen={isOpen} setIsOpen={setIsOpen} theme={theme} />
    </>
  )
}

export default Navbar;
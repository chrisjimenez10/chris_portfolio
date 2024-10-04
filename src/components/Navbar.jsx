//Imports
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { navTitles, navIcons } from "../constants";
//Components
import HamburgerMenu from "./ui/HamburgerMenu";
//UI
import ToggleThemeButton from "./ui/ToggleThemeButton";


const Navbar = () => {

    //Location
    const pathname = useLocation(null);

    //Filtered Nav Items
    const filteredTitles = navTitles.filter(title => title.desktop === true);

  return (
    <>
      <div className="hidden fixed top-0 z-50 backdrop-blur-sm w-full md:flex justify-around items-center space-x-20 h-[10vh] bg-surface/45">
        <nav className="flex justify-around items-center md:space-x-10 lg:space-x-16">
          {filteredTitles.map(({id, url, title})=>{
           return(
            <div key={id}>
              <Link to={url} className={`relative ${pathname.pathname === url ? "navStatic": ""}`}>
                <span className="relative text-onSurface nav">{title}</span>
              </Link>
            </div>
           )
          })}
        </nav>

        <nav className="flex justify-around items-center space-x-6">
          {navIcons.map(({id, image, title, url})=>(
            <div key={id} className="cursor-pointer transition-transform duration-200 hover:-translate-y-1 bg-white rounded-full p-1 border-[2px] border-background">
              <a href={url} target={"_blank"}>
                <img src={image} alt={title} width={24} height={24} />
              </a>
            </div>
          ))}
          <ToggleThemeButton />
        </nav>
      </div>

      {/* Mobile Device - Hamburger Menu */}
      <HamburgerMenu navTitles={navTitles} navIcons={navIcons} classNames={`md:hidden`} themeButton={<ToggleThemeButton />}/>
    </>
  )
}

export default Navbar;
//Imports
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { navTitles, navIcons } from "../constants";


const Navbar = () => {

    //Location
    const pathname = useLocation(null);

  return (
    <div className="fixed top-0 z-50 backdrop-blur-xl w-full flex justify-around items-center space-x-20 h-[10vh] bg-surface/35">
      <nav className="flex justify-around items-center space-x-16">
        {navTitles.map(({title, url, id})=>(
          <div key={id} className="">
            <Link to={url} className={`relative ${pathname.pathname === url ? "navStatic": ""}`}>
              <span className="relative nav">{title}</span>
            </Link>
          </div>
        ))}
      </nav>

      <nav className="flex justify-around items-center space-x-10">
        {navIcons.map(({id, image, title, url})=>(
          <div key={id} className="cursor-pointer transition-transform duration-200 hover:-translate-y-1">
            <a href={url} target={"_blank"}>
              <img src={image} alt={title} width={24} height={24} />
            </a>
          </div>
        ))}
      </nav>
    </div>

  )
}

export default Navbar;
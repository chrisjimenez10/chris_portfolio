//Imports
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { navTitles, navIcons } from "../constants";

const Navbar = () => {

    //Location
    const pathname = useLocation(null);

  return (
    <div className="w-full flex">
      <nav className="flex justify-around w-[50%]">
        {navTitles.map(({title, url, id})=>(
          <div key={id} className="">
            <Link to={url} className={`relative ${pathname.pathname === url ? "navStatic": ""}`}>
              <span className="relative nav">{title}</span>
            </Link>
          </div>
        ))}
      </nav>

      <nav className="flex justify-around w-[50%]">
        {navIcons.map(({id, image, title})=>(
          <div key={id} className="">
            <img src={image} alt={title} />
          </div>
        ))}
      </nav>
    </div>

  )
}

export default Navbar;
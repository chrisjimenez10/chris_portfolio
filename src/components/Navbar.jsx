//Imports
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { navTitles } from "../constants";

const Navbar = () => {

    //Location
    const pathname = useLocation(null);

  return (
    <div className="w-full">
      <nav className="flex justify-around w-[50%]">
        {navTitles.map(({title, url, id})=>(
          <div key={id} className="">
            <Link to={url} className={`${pathname.pathname === url ? "underline" : ""}`}>
              <span className="relative nav">{title}</span>
            </Link>
          </div>
        ))}
      </nav>

      <nav className="flex justify-around w-[50%]">

      </nav>
    </div>

  )
}

export default Navbar;
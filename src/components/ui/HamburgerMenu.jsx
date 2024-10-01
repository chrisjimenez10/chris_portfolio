//Imports
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const HamburgerMenu = ({navTitles, navIcons, classNames}) => {

  //Location
  const pathname = useLocation(null);


  return (
    <div className={`${classNames || ""} fixed w-full bottom-0 h-[9vh] flex items-center justify-center bg-surface`}>
      <nav className="flex gap-10 z-50">
        {navTitles.map(({icon, id, url})=>(
          <Link key={id} to={url}>
            <div className={`rounded-xl ${pathname.pathname === url ? "bg-primary" : "bg-background/45"} p-3 group transition-all duration-300 hover:bg-primary`}>
              {icon}
            </div>
          </Link>
        ))}
      </nav>

      <nav className="fixed w-full top-5 flex items-center justify-center gap-5 z-0">
        {navIcons.map(({id, image, title, url})=>(
              <div key={id} className="cursor-pointer transition-transform duration-200 hover:-translate-y-1 bg-white rounded-full p-1">
                <a href={url} target={"_blank"}>
                  <img src={image} alt={title} width={15} height={15} />
                </a>
              </div>
            ))}
      </nav>
    </div>
  )
}

export default HamburgerMenu;
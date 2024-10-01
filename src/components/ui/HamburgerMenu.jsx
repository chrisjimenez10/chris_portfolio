//Imports
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { developerName } from "../../constants";


const HamburgerMenu = ({navTitles, navIcons, classNames}) => {

  //Location
  const pathname = useLocation(null);


  return (
    <div className={`${classNames || ""} `}>

      <div className="flex flex-col items-center justify-center space-y-4 w-full relative top-5">
        <h1 className="text-onBackground text-xl sm:text-2xl">
          <span className="font-bold">{developerName.substring(0, 11)}</span>
          <span className="font-extralight"> {developerName.substring(12,20)}</span>
          <span className="text-primary">{"."}</span>
        </h1>
        <nav className="flex items-center justify-center gap-5">
          {navIcons.map(({id, image, title, url})=>(
                <div key={id} className="cursor-pointer transition-transform duration-200 hover:-translate-y-1 bg-white/95 rounded-full border-surface/75 border-[2px] p-1">
                  <a href={url} target={"_blank"}>
                    <img src={image} alt={title} width={14} height={14} />
                  </a>
                </div>
              ))}
        </nav>
      </div>


      <div className={`fixed w-full bottom-0 h-[10%] flex items-center justify-center bg-surface/45 backdrop-blur-sm z-50`}>
        <nav className="flex gap-4 sm:gap-10">
          {navTitles.map(({icon, id, url, title})=>(
            <Link key={id} to={url} className="relative group">

              {/* Tooltip on Hover */}
              <div className="absolute -top-[2.8rem] hidden group-hover:flex">
                <div className="bg-onSurface relative flex text-background items-center p-[5px] rounded-[5px]">
                  <div>
                    <h1 className="text-[12px]">
                      {title}
                    </h1>
                  </div>

                  {/* Triangle */}
                  <div className="border-solid border-t-onSurface border-t-8 border-x-transparent border-x-[6px] border-b-0 absolute top-7 left-1"></div>               
                </div>
              </div>

              {/* Icon */}
              <div className={`rounded-xl ${pathname.pathname === url ? "bg-primary" : "bg-black/85"} p-3 transition-all duration-300 hover:bg-primary`}>
                {icon}
              </div>             
            </Link>
          ))}
        </nav>               
      </div>

    </div> 
  )
}

export default HamburgerMenu;
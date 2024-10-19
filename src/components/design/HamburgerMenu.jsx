//Imports
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { developerName } from "../../constants";


const HamburgerMenu = ({navTitles, navIcons, classNames, themeButton, style, colorVariants, hamburgerIcon}) => {

  //Location
  const pathname = useLocation(null);


  return (
    <div className={`${classNames || ""} `}>

      <div className="flex flex-col items-center justify-center space-y-2 w-full relative top-2 z-10">
        <h1 className="text-textColor text-xl sm:text-2xl flex">
          <span className="font-bold">{developerName.substring(0, 11)}</span>
          <span className="font-extralight"> {developerName.substring(12,20)}</span>
          <span className={`${colorVariants[style].text}`}>{"."}</span>
          <span className="translate-x-3">{themeButton}</span>
        </h1>
        {/* <nav className="flex items-center justify-center gap-5">
          {navIcons.map(({id, image, title, url})=>(
                <div key={id} className="cursor-pointer transition-transform duration-200 hover:-translate-y-1 bg-white/95 rounded-full border-surface/75 border-[2px] p-1">
                  <a href={url} target={"_blank"}>
                    <img src={image} alt={title} width={14} height={14} />
                  </a>
                </div>
              ))}
        </nav> */}
        {hamburgerIcon}
      </div>


      <div className={`fixed w-full left-0 bottom-0 h-[80px] flex items-center justify-center bg-surface/45 backdrop-blur-sm z-50`}>
        <nav className="flex gap-4 sm:gap-10">
          {navTitles.map(({icon, id, url, title})=>(
            <Link key={id} to={url} className="relative group">

              {/* Tooltip on Hover */}
              <div className="absolute -top-[2.8rem] hidden group-hover:flex">
                <div className="bg-contrastBg relative flex text-background items-center p-[5px] rounded-[5px]">
                  <div>
                    <h1 className="text-[12px]">
                      {title}
                    </h1>
                  </div>

                  {/* Triangle */}
                  <div className="border-solid border-t-contrastBg border-t-8 border-x-transparent border-x-[6px] border-b-0 absolute top-7 left-1"></div>               
                </div>
              </div>

              {/* Icon */}
              <div className={`rounded-xl ${pathname.pathname === url ? colorVariants[style].bg : "bg-black/85"} p-3 transition-all duration-300 hover:${colorVariants[style].bg}`}>
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
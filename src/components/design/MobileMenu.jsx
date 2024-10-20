//Imports
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { developerName } from "../../constants";
import {disablePageScroll, enablePageScroll} from "scroll-lock";
import { useEffect, useState } from "react";
//UI
import HamburgerIcon from "../ui/HamburgerIcon";

const MobileMenu = ({navTitles, navIcons, classNames, themeButton, style, colorVariants, isOpen, setIsOpen, theme}) => {

  //Location
  const pathname = useLocation(null);
  
  //Screen size
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(()=>{
    // To track and reassign the screenSize value we need to use the event listener inside a useEffect()
    window.addEventListener("resize", ()=>{
      setScreenSize(window.innerWidth);
    });
    // After we resize and reassign the current screen size value, we can remove the event listener to reset it when we have to add it again to re-calculate
    return ()=> {
      window.removeEventListener("resize", ()=>{
        setScreenSize(window.innerWidth);
      })
    }
  },[]);

  useEffect(()=>{
    //Page Scroll lock on screens <= 768px (md:)
    if(isOpen && screenSize <= 768){
      disablePageScroll();
    }else{
      enablePageScroll();
    }
  },[isOpen, screenSize]);

  return (
    <div className={`${classNames || ""} mt-2`}>
      <div className="absolute left-2 top-5 z-40">
        <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} theme={theme}/>
      </div>      
      <div className="flex flex-col items-center justify-center space-y-5 w-full relative top-2 z-30">
        <h1 className="text-textColor text-xl sm:text-2xl flex">
          <span className="font-bold">{developerName.substring(0, 11)}</span>
          <span className="font-extralight"> {developerName.substring(12,20)}</span>
          <span className={`${colorVariants[style].text}`}>{"."}</span>
          <span className="translate-x-3">{themeButton}</span>
        </h1>

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

export default MobileMenu;
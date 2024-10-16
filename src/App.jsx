//Imports
import {Routes, Route} from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { createContext, useState } from "react";
//Components
import Home from "./components/Home";
import Loader from "./components/ui/Loader";
//Lazy Loading
const About = lazy(()=>import("./components/About"));
const Projects = lazy(()=>import("./components/Projects"));
const Community = lazy(()=>import("./components/Community"));
const Contact = lazy(()=>import("./components/Contact"));
const Error = lazy(()=>import("./components/Error"));
//UI Components
import PageTransition from "./components/ui/PageTransition";
//Create/Export Context
export const ThemeContext = createContext(null);

const App = () => {

  //Local Storage
  const initializeTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "dark";
  };
  const initializeStyle = () => {
    const storedStyle = localStorage.getItem("style");
    return storedStyle || "primary";
  };

  //State
  const [theme, setTheme] = useState(initializeTheme);
  const [style, setStyle] = useState(initializeStyle);

  //Color Variants
  const colorVariants = {
    primary: {
      bg: "bg-primary",
      text: "text-primary hover:text-primary",
    },
    red: {
      bg: "bg-red",
      text: "text-red hover:text-red",
    },
    green: {
      bg: "bg-green",
      text: "text-green hover:text-green",
    },
  };

  return (
    <ThemeContext.Provider value={{theme, setTheme, style, setStyle, colorVariants}}>
    <Suspense fallback={<Loader />}>
    <AnimatePresence mode="wait">
        <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Error />} />
        </Routes>
        </PageTransition>
    </AnimatePresence>
    </Suspense>
    </ThemeContext.Provider>
  )
}

export default App;

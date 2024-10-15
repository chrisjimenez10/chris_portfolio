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

export const ThemeContext = createContext(null);

const App = () => {

  //State
  const [hexBg, setHexBg] = useState(true);

  return (
    <ThemeContext.Provider value={{hexBg, setHexBg}}>
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

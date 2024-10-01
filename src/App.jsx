//Imports
import {Routes, Route, useLocation} from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Loader from "./components/ui/Loader";
//Lazy Loading
const About = lazy(()=>import("./components/About"));
const Projects = lazy(()=>import("./components/Projects"));
const Community = lazy(()=>import("./components/Community"));
const Contact = lazy(()=>import("./components/Contact"));
//UI Components
import PageTransition from "./components/ui/PageTransition";

const App = () => {

  //Location
  const location = useLocation(null);

  return (
    <Suspense fallback={<Loader />}>
    <AnimatePresence mode="wait">
    <main className="light h-screen bg-background">
      <PageTransition>
      <Navbar />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Error />} />
      </Routes>
      </PageTransition>
    </main>
    </AnimatePresence>
    </Suspense>
  )
}

export default App;

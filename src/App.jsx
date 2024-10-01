//Imports
import {Routes, Route} from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Community from "./components/Community";

const App = () => {
  return (
    <main className="dark h-screen bg-background">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/community" element={<Community />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  )
}

export default App;

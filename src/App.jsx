//Imports
import {Routes, Route} from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


const App = () => {
  return (
    <main className="dark">
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>

      <Hero />
    </main>
  )
}

export default App;

//Imports
import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadPolygonPath } from "@tsparticles/path-polygon";

//NOTE: Figure out HOW to add the effect of filled in space between links formed between particles (Like the DEMO at tsParticles Website)
const TriangleParticles = ({classNames, theme, style}) => {

//Initialize Engine
useEffect(()=>{
    initParticlesEngine(async(engine)=>{
        //NOTE: We need both loadfull() and loadPolygonPath() to initialize the engine and have the particles render
        await loadFull(engine);
        await loadPolygonPath(engine);
    })
}, []);

const particlesLoaded = (container) => {
    console.log(container);
};

//Match particle color with currently selected style
let particleColor = "";
switch(style){
    case "primary":
        particleColor = "#0047AB";
        break;
    case "red":
        particleColor = "#c73424";
        break;
    case "green":
        particleColor = "#58d44a";
        break;
    default:
        particleColor = "#f069cc"; //Pink
};

  return (
    <Particles
    className={`absolute w-full ${classNames || ""}`}
    id="triangleparticles"
    particlesLoaded={particlesLoaded}
    options={{
        background: {
            color: `${theme === "dark" ? "#121212" : "#fff"}`,
          },
        detectRetina: true,
        fpsLimit: 120,
        particles: {
            number: {
              value: 75
            },
            color: {
              value: particleColor,
            },
            links: {
              enable: true,
              distance: 120,
              opacity: 0.3,
              color: {
                value: particleColor,
              },
              width: 2,
              shape: {
                type: "polygon",
              },
            },
            shape: {
              type: "polygon"
            },
            opacity: {
              value: 0.8,
            },
            size: {
              value: {
                min: 1,
                max: 3,
              }
            },
            move: {
              enable: true,
              speed: 2
            }
          },
          poisson: {
            enable: true //Poisson property enables Poisson disk algorithm, which distributes particles generated evenly across a surface while keeping minimum distance between each point 
          },
    }}
    />
  )
}

export default TriangleParticles;

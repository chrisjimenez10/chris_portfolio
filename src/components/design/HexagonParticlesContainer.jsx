//Imports
import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadPolygonPath, polygonPathName } from "@tsparticles/path-polygon";
import HexagonOptions from "../../assets/json/particles.json"; //We can use a JSON file for the "options" object (Exported from tsParticles website)



const HexagonParticlesContainer = ({classNames, theme, style}) => {

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
    id="hexagonparticles"
    particlesLoaded={particlesLoaded}
    // options={HexagonOptions}
    options={{
        autoPlay: true,
        clear: true,
        delay: 0,
        fpsLimit: 120,
        particles: {
          color: {
            value: particleColor, //Style --> Dynamic color change
            animation: {
              enable: true,
              speed: 1
            }
          },
          move: {
            angle: {
                offset: 0,
                value: 90,
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 3000,
                y: 3000
              }
            },
            center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
            },
            direction: "none",
            enable: true,
            gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
            },
            outModes: {
              default: "destroy",
              bottom: "destroy",
              left: "destroy",
              right: "destroy",
              top: "destroy",
            },
            path: {
              clamp: true,
              enable: true,
              delay: {
                value: 0
              },
              options: {
                sides: 6,
                turnSteps: 60, //NOTE: Size of the hexagon path movement
                angle: 30,
              },
              generator: polygonPathName,
            },
            random: false,
            size: false,
            speed: 3,
            straight: false,
            trail: {
              fill: {
                color: {
                    value: `${theme === "dark" ? "#121212" : "#fff"}`, //Dynamic color fill change --> Light Mode: "#fff" - Dark Mode: "#121212"
                }
              },
              length: 20,
              enable: true
            }
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080,
              area: 800
            },
            value: 20 //Number of origins
          },
          opacity: {
            value: 1
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 2 //Size of circle particle
          }
        },
        background: {
          color: `${theme === "dark" ? "#121212" : "#fff"}` //Dynamic color fill change --> Light Mode: #fff - Dark Mode: "#121212"
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        detectRetina: true,
        duration: 0, //Duration of EFFECT
        emitters: {
          direction: "none",
          rate: {
            quantity: 1,
            delay: 0.25
          },
          size: {
            width: 0,
            height: 0
          },
          position: {
            x: 40,
            y: 50
          }
        }
      }}
    />
    )
}

export default HexagonParticlesContainer;

//Imports
import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";


const ParticlesContainer = ({classNames, style}) => {

    //Switch Statement --> NOTE: Using switch statement to convert color into hex code for tsparticle properties
    let particleColor = "";
    let linkColor = "";
    switch(style){
        case "primary":
            particleColor = "#0047AB";
            linkColor = "#5588FF";
            break;
        case "red":
            particleColor = "#c73424";
            linkColor = "#f25949";
            break;
        case "green":
            particleColor = "#58d44a";
            linkColor = "#8efa82";
            break;
        default:
            particleColor = "#f069cc"; //Pink
            linkColor = "#f788da"; //Lighter Pink
    };

    //Initialize Engine
    useEffect(()=>{
        initParticlesEngine(async(engine)=>{
            await loadFull(engine);
        })
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

  return (
    <Particles
    className={`absolute w-full h-full ${classNames || ""}`}
    id="tsparticles"
    particlesLoaded={particlesLoaded}
    options={{
        fullScreen: {enable: true},
        background: {
            color: {
                value: ""
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 5
                },
                repulse: {
                    distance: 75,
                    duration: 0.4,
                }
            }
        },
        particles: {
            color: {
                value: particleColor,
                opacity: 0.5,
            },
            links: {
                color: linkColor,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce"
                },
                random: false,
                speed: 0.8,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 150
            },
            opacity: {
                value: 0.7,
            },
            shape: {
                type: "circle"
            },
            size: {
                value: {min: 1, max: 5},
            },
        },
        detectRetina: true,
    }}
    />
  )
}

export default ParticlesContainer;

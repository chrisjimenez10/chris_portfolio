//Imports
import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";


const ParticlesContainer = ({classNames}) => {

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
                value: "#0047AB",
            },
            links: {
                color: "#5588FF",
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
                value: 250
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

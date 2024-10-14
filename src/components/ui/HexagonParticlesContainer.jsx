//Imports
import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadPolygonPath } from "@tsparticles/path-polygon";
import HexagonOptions from "../../../particles.json";

const HexagonParticlesContainer = ({classNames}) => {

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

return (
    <Particles
    className={`absolute w-full h-full ${classNames || ""}`}
    id="hexagonparticles"
    particlesLoaded={particlesLoaded}
    options={HexagonOptions}
    />
    )
}

export default HexagonParticlesContainer;

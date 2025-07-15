import React, { useEffect, useRef } from 'react'
import 'particles.js';


const ParticlesBackground = ({ configPath = '/particles.json', id='particles-js'
}) => {
    const particlesRef = useRef(null);
    // useEffect(() => {
    //     if (window.particlesJS) {
    //         window.particlesJS.load(id, configPath, () => {
    //             console.log(' particles.js loaded in component:', id);
    //         });
    //     }
    // }, [configPath, id]);

    return (
        <div id={id} className="absolute inset-0 -z-10" />
    )
}

export default ParticlesBackground
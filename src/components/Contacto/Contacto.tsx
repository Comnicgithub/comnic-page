"use client"
import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { motion } from 'framer-motion'
import { useState } from "react";

import { AvatarWorks } from "../AvatarWorks/AvatarWorks";
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine } from 'tsparticles-engine'
import { optionsParticles } from "../../utils/particleOptions"

export function Contacto() {
    const [index, setIndex] = useState(0)
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])

    return (
        <div className="items-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0">
            <Particles
                className="absolute w-full h-full translate-z-0"
                id="tsparticles" init={particlesInit} loaded={particlesLoaded}
                options={optionsParticles} />

            <motion.div
                initial={motionTransitionsAbout.initial}
                animate={motionTransitionsAbout.animate}
                transition={motionTransitionsAbout.transition}
            >
                <h1 className="mb-6 md:text-4xl">Podes contactarnos <br /> <span className="text-secondary">Via mail o Whatsapp</span></h1>
                <p>Mail: info@comnic.com.ar | WP: +54 9 11 3653 4885 </p>
            </motion.div>
            <AvatarWorks />
        </div>
    )
}

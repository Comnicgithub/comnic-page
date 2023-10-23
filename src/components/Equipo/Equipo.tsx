"use client"
import { motion } from 'framer-motion'
import { AvatarWorks } from '../AvatarWorks/AvatarWorks'
import { Circle } from '../Circle'
import { fadeIn } from '@/utils/motionTransitions'
import { EquipoSlider } from './EquipoSlider'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine } from 'tsparticles-engine'
import { optionsParticles } from "../../utils/particleOptions"
import { useCallback } from "react"

export function Equipo() {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])
    return (
        <div className='h-screen'>
            <Particles
                className="absolute w-full h-full translate-z-0"
                id="tsparticles" init={particlesInit} loaded={particlesLoaded}
                options={optionsParticles}/>
            <AvatarWorks />
            <Circle />
            <div className="flex flex-col justify-center min-h-screen">
                <motion.h1
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="my-5 text-4xl text-center md:my-10"
                >
                    Nuestro Equipo <br /><span className="text-secondary">De profesionales.</span>
                </motion.h1>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <EquipoSlider />
                </motion.div>
            </div>
        </div>
    )
}

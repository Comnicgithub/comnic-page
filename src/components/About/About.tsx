"use client"
import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { Avatar } from "../Avatar";
import { motion } from 'framer-motion'
import { dataAboutSkills, dataCounter } from "./About.data";
import CountUp from "react-countup";
import { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine } from 'tsparticles-engine'
import { optionsParticles } from "../../utils/particleOptions"
import { AvatarWorks } from "../AvatarWorks/AvatarWorks";

export function About() {
    const [index, setIndex] = useState(0)
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])

    return (
        <div className="items-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0">
           <Avatar />
                        <Particles
                className="absolute w-full h-full translate-z-0 "
                id="tsparticles" init={particlesInit} loaded={particlesLoaded}
                options={optionsParticles} />
                
            <motion.div className="translate-y-5">
            <h1 className="mb-5 text-4xl leading-tight md:mb-10">SOMOS COMNIC <br />
            <span  className="text-secondary">Queremos potenciarte</span></h1>
            <p className="max-w-sm mb-10 leading-7 text-base md:max-w-2xl md:mx-0 md:mb-8 md:text-base md:leading-7">
            Somos una agencia que ofrece servicios integrales en marketing digital, desarrollo empresarial y business intelligence con un
            equipo de trabajo comprometido en cada proyecto, para ser tu socio estratégico en el logro de objetivos de tu negocio.
            </p>
            <span  className="text-secondary text-2xl">Objetivo</span> <br /><br />
            <p className="max-w-sm mb-10  leading-7 text-base md:max-w-2xl md:mx-0 md:mb-8 md:text-base md:leading-7">
            Colaborar con nuestros clientes para desarrollar e implementar estrategias comerciales efectivas que les permitan alcanzar sus objetivos empresariales.
            Nos esforzamos por ser un socio estratégico confiable que brinda soluciones y resultados tangibles, mejorando la competitividad y la rentabilidad de nuestros clientes en el mercado.
            </p>
            </motion.div>
        </div>
    )
}

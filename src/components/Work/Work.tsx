"use client"
import { fadeIn } from "@/utils/motionTransitions"
import { AvatarWorks } from "../AvatarWorks/AvatarWorks"
import { Circle } from "../Circle"
import { motion } from 'framer-motion'
import { cardContent } from "./Work.data"
import { useState } from "react"
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine } from 'tsparticles-engine'
import { optionsParticles } from "../../utils/particleOptions"

export function Work() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const handleRollover = (index: number) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: "200px",
            opacity: 1,
            translateY: "-10px"
        },
        collapsed: {
            width: "200px",
            opacity: 0.7,
            translateY: "0px"
        }
    }
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])

    return (
        <div className="h-screen translate-y-20">
            <Particles
                className="absolute w-full h-full translate-z-0"
                id="tsparticles" init={particlesInit} loaded={particlesLoaded}
                options={optionsParticles} />
            <AvatarWorks />
            <Circle />
            <div className="grid pb-32 md:min-h-screen mt-28 md:mt-0 place-items-center ">
                <div className="flex flex-wrap justify-center w-3/5 mx-auto">
                    <motion.h1
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="my-5 text-2xl md:text-4-xl"
                    >CLIENTES
                    <p className="max-w-sm mb-10  leading-7 text-base md:max-w-2xl md:mx-0 md:mb-8 md:text-base md:leading-7 ">
                    <span className="text-secondary"> Ellos y más clientes nos eligen</span> <br />
                    Trabajamos con marcas de diferentes rubros, haciendo foco en los objetivos particulares de cada una de ellas.
                    </p>
                    </motion.h1>
                    <motion.div
                        className="flex flex-col items-center h-full gap-5 px-2 md:flex-row"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <div className="flex flex-wrap justify-center w-5/5 mx-auto">
                        {cardContent.map(({ id, imageUrl }) => (
                            <motion.div key={id}
                                className={`card cursor-pointer m-5 h-[150px] bg-auto bg-no-repeat bg-center bg-contain rounded-[20px] ${id === expandedIndex && 'expanded'}`}
                                initial={{ opacity: 1 }}
                                variants={cardVariants}
                                animate={id === expandedIndex ? 'expanded' : 'collapsed'}
                                exit={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.5 }}
                                // onClick={() => handleClick(id)}
                                onMouseOver={() => handleRollover(id)}

                                style={{
                                    backgroundImage: `url(/assets/${imageUrl})`
                                }}
                            >
                                <div className="flex flex-col justify-end h-full">
                                    
                                </div>
                            </motion.div>
                        ))}
                        </div>
                       
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

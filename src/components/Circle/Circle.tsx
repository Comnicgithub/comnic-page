"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'


export function Circle() {
    return (
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden " className="bottom-0 right-0 hidden md:inline-block md:absolute -z-1">
            <img src="/assets/circles.png" className="w-full h-full" alt="Circle" />
        </motion.div>
    )
}

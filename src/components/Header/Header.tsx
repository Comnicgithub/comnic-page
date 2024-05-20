// "use client"
// import { fadeIn } from '@/utils/motionTransitions'
// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import { socialNetworks } from './dataHeader'

// export function Header() {
//     return (
//         <div className='absolute z-20 inline-block w-full top-5 md:top-10'>
//             <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
//                 <div className="container justify-between mx-auto md:flex justify-center">
//                     <Link href="/">
//                         <h1 className="my-3 logo w-4/5"><img src="/assets/marca-2023-naranja.png" alt="" />
//                         </h1>
//                     </Link>
//                     <div className="flex items-center justify-center gap-7">
//                         {socialNetworks.map(({ logo,src}) => (
//                             <Link key={src} href={src} target='_blank'  className="transition-all duration-300 hover:text-secondary">
//                                 {logo}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </motion.div>
//         </div>
//     )
// }

"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialNetworks } from './dataHeader'

export function Header() {
    return (
        <div className='absolute z-20 inline-block w-full top-5 md:top-10'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center md:flex-row justify-between">
                        <Link href="/">
                            <h1 className="my-3 logo md:w-1/5 text-center">
                                <img src="/assets/marca-2023-naranja.png" alt="" />
                            </h1>
                        </Link>
                        <div className="flex items-center justify-center gap-7">
                            {socialNetworks.map(({ logo, src }) => (
                                <Link key={src} href={src} target='_blank' className="transition-all duration-300 hover:text-secondary">
                                    {logo}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}


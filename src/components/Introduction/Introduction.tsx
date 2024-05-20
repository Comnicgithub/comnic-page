import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Introduction() {
    return (
        <div className="bg-[#131424]/60 w-full z-10">
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
                <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <img src="/assets/home-4.png"  alt="Avatar" />
                    </motion.div>

                    <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h1 className="mb-5 text-4xl leading-tight md:mb-10 translate-y-20">Queremos potenciarte,  <br />
                            <span className="text-secondary">Agencia de Growth Marketing</span></h1>
                        <p className="max-w-sm  mb-10 leading-7 text-l md:max-w-2xl md:mx-0 md:mb-16 md:text-l translate-y-20">
                        <strong>¡Potencia tus resultados con Performance Marketing!</strong> En Comnic, nos especializamos en el desarrollo e implementación
                         de estrategias comerciales de alto rendimiento. Nuestro enfoque en performance marketing garantiza que el capital invertido 
                         se traduzca en un ROI excepcional, un aumento significativo en tus ingresos y un crecimiento empresarial sostenible. <br /><br />
                         <strong>¡No te conformes con menos!</strong> Únete a la agencia SEM que lidera el camino en performance marketing y te haremos a destacar por encima del resto. </p>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row translate-y-10">
                        {/* <Link href="/about">
                        <p  className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            ¿Como lo hacemos?
                            </p>
                        </Link> */}

                            <a href="https://api.whatsapp.com/send?phone=+5491136534885&text=Hola%20%F0%9F%91%8B,%20Estoy%20interesado%20en%20agendar%20una%20consulta%20gratuita%F0%9F%93%91" target='_blank' className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                            Pedir consulta free
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

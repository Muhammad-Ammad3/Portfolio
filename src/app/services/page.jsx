"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";


const services = [
    {
        num: "01",
        titel: "Web Development",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, voluptas",
        href: "https://doctor-appointment-tan.vercel.app/       "
    },
    {
        num: "02",
        titel: "Python",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, voluptas",
        href: ""
    },
    {
        num: "03",
        titel: "App Development",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, voluptas",
        href: "https://github.com/Muhammad-Ammad3/app"
    },
    {
        num: "04",
        titel: "SEO",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, voluptas",
        href: ""
    },
]

const Services = () => {
    return(
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {delay: 2.4 , duration: 0.4, ease: "easeIn" }
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
                >
                    {
                        services.map((service, index) => {
                            return(
                                <div className="flex-1 flex flex-col justify-center gap-6 group" 
                                key={index}
                                 
                                >
                                    {/* top */}
                                    <div className="w-full flex justify-between items-center">
                                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                        <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                        </Link>
                                        </div>
                                    {/* titel */}
                                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.titel}</h2>
                                    {/* description */}
                                    <p className="text-white/60">{service.description}</p>
                                    {/* border */}
                                    <div className="border-b border-white/20 w-full"></div>
                            </div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </section>
    )
} 


export default Services

 
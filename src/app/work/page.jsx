"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {Swiper, SwiperSlide} from "swiper/react";


const projects = [
    {
        num: "01",
        category: "Frontend",
        titel: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam.",
        stack: 
        [{name: "Html 5"}, {name: "CSS 3"}, {name: "Javascript"}],
        image: "/images/image3.png",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "Full Stack",
        titel: "Project 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam.",
        stack: [{name: "Next.js"}, {name: "Tailwind CSS"}, {name: "Node.js"}],
        image: "/images/image2.png",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "Frontend",
        titel: "Project 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam.",
        stack: [{name: "Next.js"}, {name: "Tailwind CSS"}],
        image: "/images/image1.png",
        live: "",
        github: "",
    },
]

const Work = () => {
   const [project , setProject] = useState(projects[0]);
   return(
    <motion.section initial={{opacity: 0}} animate={{opacity: 1}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[420px] flex flex-col xl:justify-between order-2 xl:order-none">
                <div>
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                </div>
                {/* project category  */}
                <div>
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project</h2>
                    {/* project description  */}
                    <p className="text-white/60">{project.description}</p>
                    {/* stack  */}
                    <ul className="flex gap-4">
                        {project.stack.map((item, index) => {
                            return(
                                <li key={index} className="text-xl text-accent">{item.name}
                                {/* remove the last comma  */} 
                                {index !== project.stack.length -1 && ","}</li>
                            )
                        } 
                        )}
                    </ul>
                </div>
                </div>   
            <div className="w-full xl:w-[50%]">slider</div>   
            </div>
        </div>
    </motion.section>
   )
} 


export default Work

 
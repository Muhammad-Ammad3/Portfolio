"use client"

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { SiTailwindcss, SiNextdotjs, SiFirebase } from "react-icons/si";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaBootstrap, FaPython, } from "react-icons/fa";

// about data 
const about = {
    titel: "About me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima excepturi repudiandae",
    info:[
        {
            fieldName: "Name:",
            fielValue: "Muhammad Ammad",
        },
        {
            fieldName: "Phone:",
            fielValue: "+92 3112338841",
        },
        {
            fieldName: "Experiance:",
            fielValue: "1+ Years",
        },
        {
            fieldName: "Nationality:",
            fielValue: "Pakistan",
        },
        {
            fieldName: "Email:",
            fielValue: "ammad0598@gmail.com",
        },
        {
            fieldName: "Language:",
            fielValue: "English, Urdu",
        },
    ]
}

// experiance data 
const experiance = {
    icon: "",
    titel: "My Experiance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima excepturi repudiandae",
    items: [
        {
            learning: "Saylani Mass IT Training Program",
            education: "Web & App Develper",
            duration: "2022 - 2024",
        },
        {
            learning: "Governer House IT Training Program",
            education: "Python & Metaverse AI",
            duration: "Continue",
        },
        {
            learning: "Info Tech",
            education: "DIT",
            duration: "2021 - 2022",
        },
    ]
}

// education data 
const education = {
    icon: "",
    titel: "My Education",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima excepturi repudiandae",
    items: [
        {
            learning: "Private School",
            education: "Matriculation In Science",
            duration: "2021 - 2022",
        },
        {
            learning: "For Men College",
            education: "Enter In Commerce",
            duration: "2023 - 2024",
        },
    ]
}

// skills data 
const skills = {
    titel: "My Skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima excepturi repudiandae",
    skillList: [
        {
            icon: <FaHtml5/>,
            name: "HTML5",
        },
        {
            icon: <FaCss3/>,
            name: "CSS 3",
        },
        {
            icon: <FaJs/>,
            name: "Javascript",
        },
        {
            icon: <FaReact/>,
            name: "React.js",
        },
        {
            icon: <FaFigma/>,
            name: "Figma",
        },
        {
            icon: <FaNodeJs/>,
            name: "Node JS",
        },
        {
            icon: <FaBootstrap/>,
            name: "Bootstrap",
        },
        {
            icon: <FaPython/>,
            name: "Python",
        },
        {
            icon: <SiTailwindcss/>,
            name: "Tialwind CSS",
        },
        {
            icon: <SiNextdotjs/>,
            name: "Next.js",
        },
        {
            icon: <SiFirebase/>,
            name: "Firebase",
        },
    ]
}

const Resume = () => {
    return(
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 2.4, duration:0.4, ease: "easeIn"}}}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experiance"
                className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
                    gap-6">
                        <TabsTrigger value="experiance">Experiance</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experiance */}
                        <TabsContent value="experiance" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experiance.titel}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experiance.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experiance.items.map((item,index) => {
                                            return(
                                                <li key={index} 
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.education}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.learning}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.titel}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item,index) => {
                                            return(
                                                <li key={index} 
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.education}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.learning}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.titel}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill,index) => {
                                        return(
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about me */}
                        <TabsContent value="about" 
                        className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.titel}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item,index) => {
                                    return(
                                        <li key={index} className="flex justify-center items-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fielValue}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
} 


export default Resume
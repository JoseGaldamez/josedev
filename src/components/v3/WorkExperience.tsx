'use client'
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const experiences = [
    {
        id: 1,
        title: "Senior Full-Stack Developer",
        company: "Stefanini Group",
        url: "https://stefanini.com/es",
        period: "2022 - Present",
        description: "Desarrollador Fullstack con experiencia en React, Node.js, Express, TypeScript, CI/CD, Git, GitHub, Azure, SQLServer, and mucho más.",
    },
    {
        id: 2,
        title: "Full-Stack Developer",
        company: "Moka Creativa",
        url: "https://www.mokacreativa.com",
        period: "2020 (independiente)",
        description: "Un proyecto de desarrollo de aplicación usando flutter, dart, firebase, etc, para un bufete de abogados internactional.",
    },
    {
        id: 3,
        title: "Full-Stack Developer",
        company: "Radio Progreso HN",
        url: "https://www.radioprogresohn.net",
        period: "2018 - 2022",
        description: "Desarrollo de aplicación móvil y sitios web con Wordpress, MySQL, ReactJS, Angular, NodeJs, PHP, etc.",
    },
    {
        id: 4,
        title: "Instructor",
        company: "Gildan",
        url: "https://gildancorp.com/es/",
        period: "2012 - 2018",
        description: "Mi mayor responsabilidad era dirigir al personal para alcanzar los requerimientos de la empresa, cumpiendo en tiempo y formación de los miembros de la equipo.",
    },
]
export const WorkExperience = () => {

    const [isInView, setIsInView] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <section id="experience" className="py-10 md:py-40">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl text-[#fff] font-medium mb-5 text-center">Experiencia Laboral</h2>
                    <p className="text-gray-400 text-center mb-10">Aquí está un resumen de mi experiencia laboral.</p>
                </div>


                <div ref={sectionRef} className="relative">
                    {/* Vertical line */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#7790a6] rounded-lg"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative mb-2 ${index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"} md:w-1/2`}
                        >
                            <div className="flex items-center w-full">
                                <div className="bg-[#195159] p-6 rounded-xl shadow-lg w-full my-5 hover:scale-105 transition-transform duration-300">
                                    <h3 className="text-2xl text-[#a1d8da] font-medium mb-2">{exp.title}</h3>
                                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline transition-colors flex items-center">
                                        {exp.company}
                                        <ArrowTopRightOnSquareIcon className='h-4 w-4  ml-2' />
                                    </a>
                                    <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                                    <p className="text-gray-300">{exp.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

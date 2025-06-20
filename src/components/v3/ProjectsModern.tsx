"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github, Star, Zap, RadioIcon, Lock, Newspaper } from "lucide-react"
import Image from "next/image"

const projects = [
    {
        id: 1,
        title: "Radio Progreso App",
        subtitle: "Aplicación móvil de noticias y radio en vivo",
        description:
            "Aplicación completa de Radio Progreso con un diseño moderno y una interfaz de usuario atractiva. Con capacidad de leer las noticias y escuchar música en vivo, y un sistema de gestión de tareas para organizar su tiempo y su vida.",
        longDescription:
            "Aplicación completa de Radio Progreso con un diseño moderno y una interfaz de usuario atractiva. Con capacidad de leer las noticias y escuchar música en vivo, y un sistema de gestión de tareas para organizar su tiempo y su vida.",
        image: "/radio-pogreso.png",
        technologies: ["Angular", "Next.js", "Tailwind CSS", "Dark", "Flutter", "Firebase"],
        githubUrl: "https://github.com/JoseGaldamez/radioprogreso-app",
        liveUrl: "https://apps.apple.com/hn/app/radio-progreso-hn/id1556463013",
        category: "App iOS y Android",
        status: "En Producción",
        year: "2022",
        color: "from-emerald-500 to-teal-500",
        icon: RadioIcon,
        featured: true,
    },
    {
        id: 2,
        title: "WhatPass",
        subtitle: "Generador de Contraseñas Seguras",
        description:
            "Aplicación para crear contraseñas seguras y fácil de recordar. Con una interfaz de usuario atractiva y una funcionalidad de copiar y pegar.",
        longDescription:
            "Aplicación para crear contraseñas seguras y fácil de recordar. Con una interfaz de usuario atractiva y una funcionalidad de copiar y pegar.",
        image: "/whatpass.png",
        technologies: ["NextJS", "ReactJS", "ShadCN", "TailwindCSS", "Vercel", "TypeScript"],
        githubUrl: "https://github.com/JoseGaldamez/whatpass",
        liveUrl: "https://whatpass.josegaldamez.dev",
        category: "Tools/Productivity",
        status: "En Producción",
        year: "2024",
        color: "from-blue-500 to-cyan-500",
        icon: Lock,
        featured: true,
    },
    {
        id: 3,
        title: "iTiny Link",
        subtitle: "Acortador de URLs",
        description:
            "Aplicación para crear enlaces cortos y fáciles de compartir. Con una interfaz de usuario atractiva y una funcionalidad de copiar y pegar.",
        longDescription:
            "Aplicación para crear enlaces cortos y fáciles de compartir. Con una interfaz de usuario atractiva y una funcionalidad de copiar y pegar.",
        image: "/itiny-link.png",
        technologies: ["NextJS", "Express", "PostgreSQL", "Prisma", "LocalStorage", "TailwindCSS", "Vercel"],
        githubUrl: "https://github.com/JoseGaldamez/itiny",
        liveUrl: "https://itiny.link",
        category: "Tools/Productivity",
        status: "En Producción",
        year: "2024",
        color: "from-purple-500 to-pink-500",
        icon: Zap,
        featured: false,
    },
    {
        id: 4,
        title: "Radio Seybo App",
        subtitle: "Aplicación iOS y Android de Radio Seybo",
        description: "Aplicación para escuchar música en vivo con radios de radios de radios. Con una interfaz de usuario atractiva y una funcionalidad de leer las noticias.",
        longDescription: "Aplicación para escuchar música en vivo con radios de radios de radios. Con una interfaz de usuario atractiva y una funcionalidad de leer las noticias.",
        image: "/seybo.png",
        technologies: ["Flutter", "Dart", "API REST", "ReactJS", "TailwindCSS", "Firebase"],
        githubUrl: "https://github.com/JoseGaldamez/seybo-app",
        liveUrl: "https://apps.apple.com/do/app/radio-seybo/id6502723503",
        category: "App iOS y Android",
        status: "En Producción",
        year: "2024",
        color: "from-orange-500 to-red-500",
        icon: Newspaper,
        featured: false,
    },
]

export default function ProjectsSectionModern() {
    const [activeProject, setActiveProject] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const cardRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Ajusta la sensibilidad a tu gusto
        const rotateX = ((y - centerY) / centerY) * 5;
        const rotateY = ((x - centerX) / centerX) * 5;

        setMousePosition({ x: rotateY, y: rotateX })
    }

    const currentProject = projects[activeProject]

    return (
        <section onMouseMove={handleMouseMove} ref={sectionRef} className="min-h-screen py-48 px-4 text-white overflow-hidden relative">

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div
                    className={`text-center mb-20 transition-all duration-500`}
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Mis Proyectos
                    </h2>
                    <div className={`w-32 h-1 bg-gradient-to-r ${currentProject.color} mx-auto my-10 mb-8 rounded-full`} />
                    <p className="mt-4 max-w-2xl mx-auto text-[#516d88]">
                        Una selección de los proyectos en los que he trabajado, desde aplicaciones web hasta APIs y desarrollo
                        móvil.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Project Showcase */}
                    <div
                        className={`transition-all`}
                    >
                        <div className="relative group">
                            {/* 3D Card Effect */}
                            <div
                                ref={cardRef}
                                className="relative transform-gpu transition-all duration-500 hover:scale-105"
                                style={{
                                    transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                                }}
                            >
                                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl overflow-hidden">
                                    <div className="relative h-80 overflow-hidden">
                                        <Image
                                            src={currentProject.image || "/placeholder.svg"}
                                            alt={currentProject.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-t ${currentProject.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                                        />

                                        {/* Floating Status Badge */}
                                        <div className="absolute top-4 right-4">
                                            <Badge
                                                className={`bg-gradient-to-r ${currentProject.color} text-white border-0 shadow-lg animate-pulse`}
                                            >
                                                {currentProject.status}
                                            </Badge>
                                        </div>

                                        {/* Year Badge */}
                                        <div className="absolute bottom-4 left-4">
                                            <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                                                {currentProject.year}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <currentProject.icon
                                                className={`w-8 h-8 text-transparent bg-gradient-to-r ${currentProject.color} bg-clip-text`}
                                            />
                                            <Badge variant="secondary" className="text-xs">
                                                {currentProject.category}
                                            </Badge>
                                        </div>

                                        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                            {currentProject.title}
                                        </h3>
                                        <p
                                            className={`text-lg font-medium mb-4 bg-gradient-to-r ${currentProject.color} bg-clip-text text-transparent`}
                                        >
                                            {currentProject.subtitle}
                                        </p>
                                        <p className="text-gray-300 mb-6 leading-relaxed">{currentProject.longDescription}</p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {currentProject.technologies.map((tech, index) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    className="border-gray-600 text-gray-300 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                                                    style={{ animationDelay: `${index * 100}ms` }}
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4">
                                            <Button
                                                className={`flex-1 bg-gradient-to-r ${currentProject.color} hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105`}
                                                asChild
                                            >
                                                <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Ver Demo
                                                </a>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="flex-1 border-gray-600 bg-white/5 hover:bg-white/10 hover:scale-105 transition-all duration-300 text-white hover:text-white"
                                                asChild
                                            >
                                                <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Código
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* Glow Effect */}
                            <div
                                className={`absolute -inset-1 bg-gradient-to-r ${currentProject.color} rounded-lg blur opacity-5 group-hover:opacity-40 transition-opacity duration-500 -z-10`}
                            />
                        </div>
                    </div>

                    {/* Project Navigation */}
                    <div
                        className={`transition-all`}
                    >
                        <div className="space-y-6">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`relative cursor-pointer group transition-all duration-500 ${index === activeProject ? "scale-105" : "hover:scale-102"
                                        }`}
                                    onClick={() => setActiveProject(index)}
                                >
                                    <Card
                                        className={`p-6 border-2 transition-all duration-500 ${index === activeProject
                                            ? `bg-gradient-to-r ${project.color} border-transparent shadow-2xl`
                                            : "bg-gray-900/50 border-gray-700/50 hover:border-gray-600"
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`p-3 rounded-full ${index === activeProject ? "bg-white/20" : "bg-gray-800"
                                                    } transition-all duration-300`}
                                            >
                                                <project.icon
                                                    className={`w-6 h-6 ${index === activeProject ? "text-white" : "text-gray-400"}`}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className={`font-bold text-lg ${index === activeProject ? "text-white" : "text-gray-300"}`}>
                                                    {project.title}
                                                </h4>
                                                <p className={`text-sm ${index === activeProject ? "text-white/80" : "text-gray-500"}`}>
                                                    {project.subtitle}
                                                </p>
                                            </div>
                                            {project.featured && (
                                                <Star className={`w-5 h-5 ${index === activeProject ? "text-yellow-300" : "text-gray-600"}`} />
                                            )}
                                        </div>
                                    </Card>

                                    {/* Active Indicator */}
                                    {index === activeProject && (
                                        <div
                                            className={`absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-gradient-to-b ${project.color} rounded-full`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center gap-3 mt-8">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeProject
                                        ? `bg-gradient-to-r ${projects[activeProject].color} scale-125`
                                        : "bg-gray-600 hover:bg-gray-500"
                                        }`}
                                    onClick={() => setActiveProject(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-ping" />
            <div className="absolute bottom-32 right-20 w-3 h-3 bg-pink-500 rounded-full animate-pulse" />
            <div className="absolute top-1/2 right-10 w-1 h-1 bg-cyan-500 rounded-full animate-bounce" />
        </section>
    )
}

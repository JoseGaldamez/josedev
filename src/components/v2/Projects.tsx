"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink, ChevronRight } from "lucide-react"

// Datos de ejemplo de proyectos
const projects = [
    {
        id: 1,
        title: "Radio Progreso App",
        description:
            "Aplicación completa de Radio Progreso con un diseño moderno y una interfaz de usuario atractiva. Con capacidad de leer las noticias y escuchar música en vivo, y un sistema de gestión de tareas para organizar su tiempo y su vida.",
        image: "/radio-pogreso.png",
        tags: ["Angular", "Next.js", "Tailwind CSS", "Dark", "Flutter", "Firebase"],
        github: "https://github.com/JoseGaldamez/radioprogreso-app",
        demo: "https://apps.apple.com/hn/app/radio-progreso-hn/id1556463013",
        featured: true,
    },
    {
        id: 2,
        title: "WhatPass",
        description:
            "Aplicación para crear contraseñas seguras y fácil de recordar. Con una interfaz de usuario atractiva y una funcionalidad de copiar y pegar.",
        image: "/whatpass.png",
        tags: ["NextJS", "ReactJS", "ShadCN", "TailwindCSS", "Vercel"],
        github: "https://github.com/JoseGaldamez/whatpass",
        demo: "https://whatpass.josegaldamez.dev",
        featured: true,
    },
    {
        id: 3,
        title: "iTiny Link",
        description: "Aplicación para crear enlaces cortos y fáciles de compartir. Con una interfaz de usuario atractiva y una funcionalidad de copiar y pegar.",
        image: "/itiny-link.png",
        tags: ["NextJS", "Express", "PostgreSQL", "Prisma", "LocalStorage", "TailwindCSS", "Vercel"],
        github: "https://github.com/JoseGaldamez/itiny",
        demo: "https://itiny.link",
        featured: true,
    },
    {
        id: 4,
        title: "Radio Seybo App",
        description: "Aplicación para escuchar música en vivo con radios de radios de radios. Con una interfaz de usuario atractiva y una funcionalidad de leer las noticias.",
        image: "/seybo.png",
        tags: ["Flutter", "Dart", "API REST", "ReactJS", "TailwindCSS", "Firebase"],
        github: "https://github.com/JoseGaldamez/seybo-app",
        demo: "https://apps.apple.com/do/app/radio-seybo/id6502723503",
        featured: false,
    },
]

// Componente Badge personalizado
const Badge = ({ children, variant = "default" }: any) => {
    const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
    const variants: any = {
        default: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        outline: "border border-gray-200 text-gray-300 dark:border-gray-700 dark:text-gray-300",
        secondary: "bg-blue-950 text-gray-100 dark:bg-gray-700 dark:text-gray-300",
    }

    return <span className={`${baseClasses} ${variants[variant]}`}>{children}</span>
}

// Componente Button personalizado
const Button = ({ children, variant = "default", size = "default", className = "", asChild = false, ...props }: any) => {
    const baseClasses =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50"

    const variants: any = {
        default: "bg-blue-950 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-900",
        ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
        icon: "p-0 bg-transparent",
    }

    const sizes: any = {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
    }

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

    if (asChild && props.href) {
        return (
            <Link target="_blank" href={props.href} className={classes} {...props}>
                {children}
            </Link>
        )
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}

export const ProjectsSection = () => {

    const [activeProject, setActiveProject] = useState(projects[0])
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
        <section
            id="projects"
            ref={sectionRef}
            className="py-20"
        >
            <div className="max-w-6xl px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Mis Proyectos
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto">
                        Una selección de los proyectos en los que he trabajado, desde aplicaciones web hasta APIs y desarrollo
                        móvil.
                    </p>
                </motion.div>

                <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Lista de proyectos (navegación) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-4 space-y-4"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <div
                                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg rounded-lg border ${activeProject.id === project.id
                                        ? "bg-[#131f02f4] py-8 rounded-lg shadow-lg w-full my-5"
                                        : "bg-[#1016074c] py-2 rounded-lg shadow-lg w-full my-5"
                                        }`}
                                    onClick={() => {
                                        setActiveProject(project);
                                    }}
                                >
                                    <div className="p-4 flex justify-between items-center">
                                        <div>
                                            <h3 className="font-medium text-lg">{project.title}</h3>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                {project.tags.slice(0, 2).map((tag) => (
                                                    <Badge key={tag} variant="outline">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                                {project.tags.length > 2 && <Badge variant="outline">+{project.tags.length - 2}</Badge>}
                                            </div>
                                        </div>
                                        <ChevronRight
                                            className={`h-5 w-5 transition-transform duration-300 ${activeProject.id === project.id ? "rotate-90 text-blue-500" : "text-gray-400"
                                                }`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Detalle del proyecto seleccionado */}
                    <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-8 mt-5"
                    >
                        <div className=" rounded-xl relative overflow-hidden">

                            <div className="relative group">
                                <div className="overflow-hidden">
                                    <Image
                                        src={activeProject.image}
                                        alt={activeProject.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6 w-full">
                                        <div className="flex justify-end gap-2">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                href={activeProject.github}
                                                asChild
                                                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                                            >
                                                <Github className="h-4 w-4 mr-1" />
                                                Código
                                            </Button>
                                            <Button
                                                size="sm"

                                                href={activeProject.demo}
                                                asChild
                                                className="bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700"
                                            >
                                                <ExternalLink className="h-4 w-4 mr-1" />
                                                Demo
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-[#000000b7]">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {activeProject.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="font-mono">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold mb-2 text-white">{activeProject.title}</h3>
                                <p className="text-gray-400 mb-4">{activeProject.description}</p>

                                <div className="flex gap-4">
                                    <Button variant="outline" size="sm" href={activeProject.github} asChild>
                                        <Github className="h-4 w-4 mr-2" />
                                        Ver Código
                                    </Button>
                                    <Button size="sm" href={activeProject.demo} asChild>
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Ver Demo
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Proyectos destacados */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20"
                >

                    <div className="grid md:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects
                            .filter((project) => project.featured)
                            .map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="group"
                                >
                                    <div className="overflow-hidden h-full border border-gray-200 dark:border-gray-800 rounded-lg transition-colors duration-300 hover:shadow-xl">
                                        <div className="relative aspect-video overflow-hidden">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                width={600}
                                                height={400}
                                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                                <div className="p-4 w-full">
                                                    <div className="flex justify-end gap-2">
                                                        <button className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                                <Github className="h-4 w-4" />
                                                            </a>
                                                        </button>
                                                        <button className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                                <ExternalLink className="h-4 w-4" />
                                                            </a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex flex-wrap gap-1 mb-2">
                                                {project.tags.slice(0, 3).map((tag) => (
                                                    <Badge key={tag} variant="outline">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                                {project.tags.length > 3 && <Badge variant="outline">+{project.tags.length - 3}</Badge>}
                                            </div>
                                            <h4 className="font-semibold mb-1">{project.title}</h4>
                                            <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                </motion.div>

                {/* Botón para ver todos los proyectos */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-center mt-12"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="group border-gray-300 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700"
                    >
                        Ver todos los proyectos
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </motion.div> */}
            </div>
        </section>
    )
}


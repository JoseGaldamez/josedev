'use client'
import React, { useEffect, useState, useRef } from 'react'
import { CardExperience } from './CardExperience'

const experiencias = [
  {
    id: 1,
    puesto: "Fullstack Developer",
    empresa: "Stefanini Group",
    fotoEmpresa: "https://stefanini.com/es/wp-content/uploads/sites/4/2022/10/Logo-Stefanini.jpeg",
    fecha: "2022 - Presente",
    descripcion: "Desarrollo de aplicaciones web modernas con Java, Spring Boot, React, Next.js y TypeScript. Soluciones escalables en la nube, apoyandonos en metodologías ágiles usando integración continua y despliegue continuo (CI/CD).",
    tecnologias: ["Java", "Spring Boot", "React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    puesto: "Fullstack Developer",
    empresa: "Radio Progreso",
    fotoEmpresa: "https://www.radioprogresohn.net/wp-content/uploads/2023/04/Logo-circular-1.png",
    fecha: "2018 - 2022",
    descripcion: "Desarrollo de aplicaciones completas desde el frontend hasta el backend. Implementación de APIs REST y bases de datos.",
    tecnologias: ["React", "Node.js", "Flutter", "Firebase", "iOS", "Android", "WordPress"]
  },
  {
    id: 3,
    puesto: "Fullstack Developer (externo)",
    empresa: "Moka Creativa",
    fotoEmpresa: "https://mir-s3-cdn-cf.behance.net/user/276/5b5fb9207690541.5b98ab03ab902.png",
    fecha: "2019 - 2020",
    descripcion: "Desarrollo de aplicaciones web y móviles para clientes diversos. Colaboración en el diseño y la implementación de soluciones digitales. Fue desarrollador externo para la agencia ya que trabajaba en Radio Progreso.",
    tecnologias: ["Angular", "MySQL", "Flutter", "Node.js", "PHP"]
  },
  {
    id: 4,
    puesto: "Instructor",
    empresa: "Gildan Activewear",
    fotoEmpresa: "https://companieslogo.com/img/orig/GIL-cb61764d.png?t=1720244492",
    fecha: "2018 - 2011",
    descripcion: "Este trabajo no está relacionado con el desarrollo de software, pero me ayudó a desarrollar habilidades de comunicación y liderazgo al capacitar a nuevos empleados en procesos y estándares de calidad.",
    tecnologias: ["Pedagogía", "Lógica", "Liderazgo", "Calidad"]
  }
]

export const ExperienceSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Detectar si es mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      // Calcular cuando la sección está completamente visible
      const sectionStart = sectionTop
      const sectionEnd = sectionTop + sectionHeight - windowHeight

      if (scrollY >= sectionStart && scrollY <= sectionEnd) {
        // Calcular progreso dentro de la sección (0 a 1)
        const progress = Math.max(0, Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)))
        setScrollProgress(progress)
      } else if (scrollY < sectionStart) {
        // Antes de llegar a la sección
        setScrollProgress(0)
      } else if (scrollY > sectionEnd) {
        // Después de pasar la sección
        setScrollProgress(1)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Ejecutar una vez al montar
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <div 
      ref={sectionRef}
      className='relative'
      style={{ height: `${experiencias.length * 100}vh` }} // Altura total para permitir scroll
    >
      <section className='sticky top-0 w-full h-screen bg-white text-[#253237] flex flex-col items-center justify-center overflow-hidden'>
        <div className='container mb-24 px-4'>
          <h2 className='text-3xl md:text-6xl font-bold mb-4'>
            <span className='text-[#7b7b7b]'>Experiencia</span> laboral
          </h2>
          <hr className='border-[#7b7b7b] mb-6 md:mb-10'/>
        </div>

        {/* Contenedor con ancho limitado para mostrar 1.5 cards */}
        <div className='w-full container mx-auto overflow-hidden relative px-4'>
          <div 
            className='flex gap-4 md:gap-8'
            style={{
              transform: `translateX(${isMobile ? 50 - (scrollProgress * (experiencias.length - 0.5) * 300) : 200 - (scrollProgress * (experiencias.length - 0.5) * 800)}px)`
            }}
          >
            {experiencias.map((exp, index) => (
              <CardExperience 
                key={exp.id}
                puesto={exp.puesto}
                empresa={exp.empresa}
                fotoEmpresa={exp.fotoEmpresa}
                fecha={exp.fecha}
                descripcion={exp.descripcion}
                tecnologias={exp.tecnologias}
                index={index}
              />
            ))}
          </div>
          
          {/* Línea conectora horizontal */}
          <div className='absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#37baba] to-transparent transform -translate-y-1/2 -z-10'></div>
          
          {/* Degradados en los bordes */}
          <div className='absolute top-0 left-0 w-8 md:w-16 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10'></div>
          <div className='absolute top-0 right-0 w-8 md:w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10'></div>
        </div>

        {/* Indicador de scroll */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
          <p className='text-sm text-gray-500'>Scroll para ver más experiencias</p>
          <div className='w-32 h-1 bg-gray-200 mx-auto mt-2 rounded-full overflow-hidden'>
            <div 
              className='h-full bg-[#37baba] transition-all duration-300'
              style={{ width: `${scrollProgress * 100}%` }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  )
}

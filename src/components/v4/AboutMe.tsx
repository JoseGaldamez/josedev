'use client';
import React, { useEffect, useState, useRef } from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

export const AboutMe = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const paragraphs = [
    "Soy un desarrollador Fullstack con experiencia en la creación de aplicaciones web y móviles. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades constantemente.",
    "A lo largo de mi carrera, he trabajado con diversas tecnologías como JavaScript, TypeScript, React, Node.js, Java, SpringBoot, Kotlin, Swift, Flutter, entre otras.",
    "Me gusta enfrentar desafíos técnicos y encontrar soluciones eficientes. Siempre busco escribir código limpio y mantenible.",
    "Cuando no estoy programando, disfruto de la música, el cine y pasar tiempo con mi familia. Siempre estoy abierto a nuevas oportunidades y colaboraciones."
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      // Calcular si estamos dentro de la sección
      if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        // Calcular progreso dentro de la sección (0 a 1)
        const progress = (scrollY - sectionTop) / sectionHeight;
        
        // Ajustar los segmentos para que el último párrafo dure más
        let newParagraph;
        if (progress < 0.2) {
          newParagraph = 0;
        } else if (progress < 0.4) {
          newParagraph = 1;
        } else if (progress < 0.6) {
          newParagraph = 2;
        } else {
          newParagraph = 3; // El último párrafo ocupa del 60% al 100%
        }
        
        setCurrentParagraph(newParagraph);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={sectionRef}
      className='bg-black text-white'
      style={{ height: `${paragraphs.length * 100 + 100}vh` }}
    >
      <div className='sticky top-0 h-screen'>
        <div className='flex flex-col lg:flex-row items-center container mx-auto h-full'>
          {/* Imagen fija */}
          <div className='lg:w-1/2 flex items-center justify-center p-4 lg:p-8'>
            <div className='max-w-md'>
              <img 
                src='/jose.jpeg' 
                alt='About Me' 
                className='rounded-lg shadow-2xl w-full object-cover'
              />
            </div>
          </div>

          {/* Contenido con párrafo que cambia */}
          <div className='lg:w-1/2 flex flex-col justify-center px-4 lg:px-8'>
            <h2 className='text-5xl lg:text-7xl font-bold mb-8'>
              Un poco <br />
              <span className='text-gray-400'>sobre mí</span>
            </h2>
            
            <div className='min-h-[120px]'>
              <p className='text-lg lg:text-xl text-gray-300 leading-relaxed transition-all duration-500 ease-in-out'>
                {paragraphs[currentParagraph]}
                {currentParagraph === paragraphs.length - 1 && (
                  <span className='block'>
                  <Link href="/contact" passHref>
                    <Button className="mt-3 bg-white hover:bg-[#b1b1b1] text-gray-900">
                      Contáctame
                    </Button>
                  </Link>
                  </span>
                )}
              </p>
            </div>

            {/* Indicador de progreso */}
            <div className='flex gap-2 mt-8'>
              {paragraphs.map((_, index) => (
                <div 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentParagraph ? 'bg-white' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

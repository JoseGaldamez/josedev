'use client';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

export const AboutMe = () => {
  const [activeElement, setActiveElement] = useState<number>(0);
  const [visibleElements, setVisibleElements] = useState<number[]>([0]);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const contentElements = [
    { type: 'title', content: '' },
    { type: 'title', content: 'Un poco sobre mí' },
    { type: 'paragraph', content: "Soy un desarrollador Fullstack con experiencia en la creación de aplicaciones web y móviles. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades constantemente." },
    { type: 'paragraph', content: "A lo largo de mi carrera, he trabajado con diversas tecnologías como JavaScript, TypeScript, React, Node.js, Java, SpringBoot, Kotlin, Swift, Flutter, entre otras. Me gusta enfrentar desafíos técnicos y encontrar soluciones eficientes." },
    { type: 'paragraph', content: "Cuando no estoy programando, disfruto de la música, el cine y pasar tiempo con mi familia. Siempre estoy abierto a nuevas oportunidades y colaboraciones." },
    { type: 'cta', content: '¿Quieres conversar?' },
    { type: 'title', content: '' },
];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setLastScrollY(currentScrollY);

      const viewportCenter = window.innerHeight / 2;
      const elements = document.querySelectorAll('[data-content]');
      
      let closestElement = activeElement;
      let closestDistance = Infinity;

      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);

        // Considerar elementos que estén al menos parcialmente visibles
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Buscar el elemento más cercano al centro del viewport
          if (distance < closestDistance) {
            closestDistance = distance;
            closestElement = index;
          }
        }
      });

      // Solo cambiar si encontramos un elemento diferente más centrado
      if (closestElement !== activeElement) {
        setActiveElement(closestElement);
        setVisibleElements([closestElement]);
      }
    };

    // Throttle scroll events para mejor performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    
    // Ejecutar una vez al montar para estado inicial
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [activeElement, lastScrollY]);

  return (
    <div className='bg-black text-white'>
      <div className='flex flex-col lg:flex-row'>
        {/* Imagen fija */}
        <div className='lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-8'>
          <div className='max-w-md'>
            <img 
              src='/jose.jpeg' 
              alt='About Me' 
              className='rounded-lg shadow-2xl w-full object-cover'
            />
          </div>
        </div>

        {/* Contenido con scroll */}
        <div className='lg:w-1/2 min-h-screen'>
          {/* Área de scroll invisible para trigger */}
          <div className='relative'>
            {contentElements.map((element, index) => (
              <div
                key={`trigger-${index}`}
                data-content
                data-index={index}
                className='h-screen'
              />
            ))}
          </div>

          {/* Contenido fijo centrado */}
          <div className='fixed top-1/2 left-1/2 lg:left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-1/2 px-8 lg:px-16 z-10'>
            {contentElements.map((element, index) => (
              <div key={`content-${index}`} className='absolute inset-0 flex items-center justify-center'>
                {(element.type === 'title' && element.content !== '') && (
                  <h2 className={`text-5xl lg:text-7xl font-bold text-center transition-all duration-500 ${
                    visibleElements.includes(index)
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-50'
                  }`}>
                    Un poco <br />
                    <span className='text-gray-400'>sobre mí</span>
                  </h2>
                )}

                {(element.type === 'title' && element.content === '') && (
                  <div className={`text-5xl lg:text-7xl font-bold text-center transition-all duration-500 ${
                    visibleElements.includes(index)
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-50'
                  }`}></div>
                )}

                {element.type === 'paragraph' && (
                  <p className={`text-xl px-5 lg:text-2xl leading-relaxed text-center max-w-2xl transition-all duration-500 ${
                    visibleElements.includes(index)
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-50'
                  }`}>
                    {element.content}
                  </p>
                )}
                
                {element.type === 'cta' && (
                  <div className={`text-center transition-all duration-500 ${
                    visibleElements.includes(index)
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-50'
                  }`}>
                    <h3 className='text-3xl font-bold mb-8'>
                      {element.content}
                    </h3>
                    <Link href={'/contact'}>
                      <Button className='px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors'>
                        Contactar
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

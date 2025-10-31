import { ArrowDownIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const HeroSection = () => {
  return (
    <div className='flex flex-col items-center min-h-screen px-4 text-center w-full relative'>
        <div className='flex flex-col items-center justify-center min-h-[80vh]'>
        <div className="relative mt-20 mb-8 animate-in fade-in-0 duration-1000">
          <Image 
            src="/jose.jpeg"
            alt="José Galdámez"
            width={400}
            height={400}
            className="w-52 md:w-72 lg:w-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
        <div className='max-w-5xl mx-auto'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-thin mb-6 text-white/50'>José Galdámez</h1>
        </div>
        <div className='w-full'>
            <h2 className='text-[9vw] font-extralight text-white/10 leading-none'>
                Fullstack <span className='text-white/40'>Developer</span>
            </h2>
        </div>
            </div>
        <div className='max-w-3xl mx-auto mt-24 absolute bottom-10 left-0 right-0 px-4'>
            <p className='md:text-xl text-white/10 mb-6'>
                Desarrollador de aplicaciones web y móviles con más de 5 años de experiencia en el desarrollo de soluciones digitales.
            </p>
            <ArrowDownIcon className='mx-auto animate-bounce text-white/10' size={32} />
        </div>

    </div>
  )
}

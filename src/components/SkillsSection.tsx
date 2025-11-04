import { ArrowRight, ArrowUpRight, Code2Icon, SettingsIcon, TabletSmartphoneIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const SkillsSection = () => {
  return (
    <div className='max-w-6xl mx-auto w-full my-20 px-4'>

    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>

        <div className='bg-white/5 p-6 opacity-70 hover:opacity-100 transition-opacity duration-500 flex flex-col items-start justify-start'>
            <Code2Icon className='mb-4 text-white/50' size={32} />
            <h2 className='text-lg md:text-xl font-light mb-3 text-white uppercase'>Frontend</h2>
            <p className='text-sm md:text-base text-white/70 mb-10'>Desarrollo de aplicaciones visualmente atractivas, modernas y optimizadas.</p>
            <div>
                <Link href="/skills/frontend" className='text-sm md:text-base text-white/50 hover:text-white transition-colors duration-300 flex items-center'>
                    <ArrowRight className='inline-block mr-2 text-white/50' size={16} />
                    Más información
                </Link>
            </div>
        </div>
        <div className='bg-white/5 p-6 opacity-70 hover:opacity-100 transition-opacity duration-500 flex flex-col items-start justify-start'>
            <SettingsIcon className='mb-4 text-white/50' size={32} />
            <h2 className='text-lg md:text-xl font-light mb-3 text-white uppercase'>Backend</h2>
            <p className='text-sm md:text-base text-white/70 mb-10'>Desarrollo de APIs RESTful y microservicios robustos.</p>
            <div>
                <Link href="/skills/backend" className='text-sm md:text-base text-white/50 hover:text-white transition-colors duration-300 flex items-center'>
                    <ArrowRight className='inline-block mr-2 text-white/50' size={16} />
                    Más información
                </Link>
            </div>
        </div>
        <div className='bg-white/5 p-6 opacity-70 hover:opacity-100 transition-opacity duration-500 flex flex-col items-start justify-start'>
            <TabletSmartphoneIcon className='mb-4 text-white/50' size={32} />
            <h2 className='text-lg md:text-xl font-light mb-3 text-white uppercase'>Móvil</h2>
            <p className='text-sm md:text-base text-white/70 mb-10'>Desarrollo de aplicaciones móviles Nativas y multiplataforma.</p>
            <div>
                <Link href="/skills/mobile" className='text-sm md:text-base text-white/50 hover:text-white transition-colors duration-300 flex items-center'>
                    <ArrowRight className='inline-block mr-2 text-white/50' size={16} />
                    Más información
                </Link>
            </div>
        </div>

    </div>

    </div>
  )
}

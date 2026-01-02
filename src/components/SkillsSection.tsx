import { ArrowRight, ArrowUpRight, Code2Icon, SettingsIcon, TabletSmartphoneIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const SkillsSection = () => {
  return (
    <div style={{ position: 'relative', zIndex: 50 }} className='max-w-6xl mx-auto w-full my-20 px-4'>
    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
        <div className='bg-[#03060c] p-8 flex flex-col items-start justify-between border-white border rounded-2xl h-80'>
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
        <div className='bg-[#03060c] p-8 flex flex-col items-start justify-between border-white border rounded-2xl h-80'>
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
        <div className='bg-[#03060c] p-8 flex flex-col items-start justify-between border-white border rounded-2xl h-80'>
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

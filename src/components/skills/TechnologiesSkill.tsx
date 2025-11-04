import React from 'react'

interface TechnologiesSkillProps {
    technologies?: string[];
}

export const TechnologiesSkill = ({ technologies }: TechnologiesSkillProps) => {
  return (
    <div className='max-w-5xl mx-auto px-4 my-32 animate-in fade-in-0 duration-1000'>
        <h2 className='text-3xl font-light mb-8 text-white/80'>Tecnologías</h2>
        <hr className='border-white/20 py-5' />
        <div className='flex flex-wrap gap-3 justify-start'>
            {technologies?.map((tech, index) => (
                <span 
                    key={index} 
                    className='px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-white/70 hover:text-white/90 text-sm font-medium transition-all hover:scale-105 backdrop-blur-sm duration-500'
                >
                    {tech}
                </span>
            ))}
        </div>
    </div>
  )
}

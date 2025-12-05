import React from 'react'

interface ExperienceSkillProps {
  children?: React.ReactNode;
}

export const ExperienceSkill = ({ children }: ExperienceSkillProps) => {
  return (
    <div className='max-w-5xl mx-auto px-4 my-10 animate-in fade-in-0 duration-1000'>
      <h2 className='text-3xl font-light mb-8 text-white/80'>Experiencia</h2>
      <hr className='border-white/20 py-5' />
      <div className='text-white/60 text-lg'>{children}</div>
    </div>
  )
}

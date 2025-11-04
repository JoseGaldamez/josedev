import React from 'react'


interface HeaderSkillProps {
    title: string;
    icon: React.ReactNode;
}

export const HeaderSkill = ({ title, icon }: HeaderSkillProps) => {
  return (
    <div className='bg-gray-400/5 w-full py-32 mb-10 text-center flex flex-col items-center justify-center animate-in fade-in-0 duration-1000'>
      {icon}
      <h1 className='text-[5vw] font-extralight'>{title}</h1>
    </div>
  )
}

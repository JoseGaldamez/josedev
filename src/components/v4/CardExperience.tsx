import React from 'react'

interface CardExperienceProps {
  puesto: string
  empresa: string
  fotoEmpresa: string
  fecha: string
  descripcion: string
  tecnologias: string[]
  index: number
}

export const CardExperience = ({ puesto, empresa, fotoEmpresa, fecha, descripcion, tecnologias, index }: CardExperienceProps) => {
  return (
    <div className='flex-shrink-0 w-[280px] md:w-[800px] ml-4 md:ml-20'>
      <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full'>
        {/* Header de la card */}
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-3'>
            <img src={fotoEmpresa} alt={empresa} className='w-12 h-12 rounded-full' />
            <div>
              <h3 className='font-bold text-lg text-[#253237] leading-tight'>{puesto}</h3>
              <p className='text-[#7b7b7b] font-semibold text-sm'>{empresa}</p>
            </div>
          </div>
        </div>

        {/* Fecha */}
        <div className='mb-4'>
          <span className='inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium'>
            {fecha}
          </span>
        </div>

        {/* Descripción */}
        <p className='text-gray-600 text-sm leading-relaxed mb-4'>
          {descripcion}
        </p>

        {/* Tecnologías */}
        <div className='flex flex-wrap gap-2'>
          {tecnologias.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className='inline-block bg-gray-900 text-[#e2e2e2] text-xs px-2 py-1 rounded-md font-medium'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

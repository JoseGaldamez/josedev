import React from 'react'

export const IconsBanner = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-24 max-w-5xl mx-auto my-20 md:my-48 px-8'>
      <div className='opacity-40 hover:opacity-90 transition-opacity duration-500'>
        <img src='/icons/react.png' alt='React JS' className='w-48 md:w-64' />
      </div>
      <div className='opacity-40 hover:opacity-90 transition-opacity duration-500'>
        <img src='/icons/node.png' alt='Node JS' className='w-48 md:w-64' />
      </div>
      <div className='opacity-40 hover:opacity-90 transition-opacity duration-500'>
        <img src='/icons/flutter.png' alt='Flutter' className='w-48 md:w-64' />
      </div>
      <div className='opacity-40 hover:opacity-90 transition-opacity duration-500'>
        <img src='/icons/spring-boot.png' alt='Spring Boot' className='w-48 md:w-64' />
      </div>
    </div>
  )
}

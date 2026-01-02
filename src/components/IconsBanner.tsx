import React from 'react'

export const IconsBanner = () => {
  return (
    <div>

      <div style={{ position: 'relative', zIndex: 10 }} className='w-full'>
          <div className='py-16 md:py-24 px-4'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-24 max-w-5xl mx-auto'>
            <div className=''>
              <img src='/icons/react.png' alt='React JS' className='w-48 md:w-64' />
            </div>
            <div className=''>
              <img src='/icons/node.png' alt='Node JS' className='w-48 md:w-64' />
            </div>
            <div className=''>
              <img src='/icons/flutter.png' alt='Flutter' className='w-48 md:w-64' />
            </div>
            <div className=''>
              <img src='/icons/spring-boot.png' alt='Spring Boot' className='w-48 md:w-64' />
            </div>
            <div className=''>
              <img src='/icons/angular.png' alt='Angular' className='w-48 md:w-64' />
            </div>
            <div className=''>
              <img src='/icons/ai.png' alt='AI' className='w-48 md:w-64' />
            </div>
            <div className=''>
              <img src='/icons/azure.png' alt='Azure' className='w-48 md:w-64' />
            </div>
            <div className=''>
              <img src='/icons/vercel.png' alt='Vercel' className='w-48 md:w-64' />
            </div>
          </div>
      <div className='text-center pt-16 max-w-2xl mx-auto text-white'>
        Entre otras tecnologías y herramientas como .Net, Docker, Kubernetes, Gemini, Antropic, Groq, MongoDB, PostgreSQL, SQLServer, NextJS, JWT Token, Ionic, Firebase, AWS, Google Cloud, entre otras.
      </div>
        </div>
      </div>
    </div>
  )
}

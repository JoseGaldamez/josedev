import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { VideoYoutube } from './VideoYoutube'


export const AboutMe = () => {
    return (
        <div className='max-w-5xl px-10 2xl:px-0 mx-auto mt-16 md:mt-20 lg:mt-32 xl:mt-48 mb-32'>

            <div className='block w-full sm:flex justify-between'>
                <div className='w-full sm:w-5/12 mb-24'>
                    <div className='w-full rounded-2xl overflow-hidden mt-8'>
                        <VideoYoutube />
                    </div>
                    <p className='mt-5 flex text-gray-400 text-md font-bold'>
                        Te invito a revisar mi Curso de Android Nativo con Jetpack Compose
                    </p>
                    <a href={'https://www.udemy.com/course/android-con-jetpack-compose-movil-apps-nativas-y-modernas/?couponCode=FEBRERO_2025'} target='_blank' className='mt-5 flex bg-slate-800 text-white px-2 py-2 rounded-lg items-center justify-center'>
                        <span>Ver en Udemy</span> <ArrowTopRightOnSquareIcon className='h-5 w-5 text-gray-400 ml-2' />
                    </a>
                </div>
                <div className='w-full sm:w-6/12'>
                    <div>
                        <h2 className='text-2xl font-bold text-gray-500' >Convertir una idea en un producto real con código es casi como hacer magia.</h2>

                        <p className='mt-5 text-gray-400'>
                            Crear código robusto, estable, eficiente y que solucione un problema real, es lo que hago desde hace más de 3 años y cada vez me gusta más. Aprender tecnologías nuevas, iterar soluciones hasta llegar a la mejor para cada caso. Ese es mi día a día.
                        </p>
                        <p className='mt-5 text-gray-400'>
                            Mi nombre es <strong>José Galdámez</strong> y soy programador de aplicaciones. Trabajo con diferentes lenguajes de programación como <strong>Javascript/Typescript</strong> para la creación de aplicaciones web con ReactJS y Angular o Backend con NodeJS, <strong>Flutter/Dart</strong> para crear aplicaiones móviles multiplataformas para Android y iOS con una sola base de código, <strong>Kotlin</strong> para crea aplicaciones nativas de Android y <strong>Golang</strong> para backend eficientes con capacidad de concurrencia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

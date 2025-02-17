import React from 'react'
import { InputQuestion } from './InputQuestion'
export const AskSection = () => {
    return (
        <div className='w-full p-5 ms:p-20 py-14 lg:py-24 2xl:py-36 text-center bg-slate-100'>
            <div className='max-w-4xl mx-auto'>
                <h1 className='text-4xl sm:text-7xl font-bold text-gray-800 mt-16'>
                    <span className='font-light'>Soy</span> José Galdámez
                </h1>
                <div className='mt-5'>
                    <p className='text-md text-gray-400'>
                        <strong>Desarrollador Fullstack con 5 años de experiencia</strong>, especializado en aplicaciones web y móviles.
                    </p>
                </div>
                <div className='max-w-4xl mx-auto mt-14'>
                    <InputQuestion />
                </div>
            </div>
        </div>
    )
}

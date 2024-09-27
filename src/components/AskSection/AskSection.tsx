import React from 'react'
import { InputQuestion } from './InputQuestion'
export const AskSection = () => {
    return (
        <div className='w-full p-20 py-36 text-center bg-slate-100'>
            <div className='max-w-4xl mx-auto'>
                <h1 className='text-7xl font-bold text-gray-800 mt-16'>
                    <span className='font-light'>Soy</span> José Galdámez
                </h1>
                <div className='mt-5'>
                    <p className='text-md text-gray-400'>
                        <strong>Desarrollador Fullstack</strong> con 3 años de experiencia, especializado en aplicaciones web y móviles.
                    </p>
                </div>
                <div className='max-w-4xl mx-auto mt-14'>
                    <InputQuestion />
                </div>
            </div>
        </div>
    )
}

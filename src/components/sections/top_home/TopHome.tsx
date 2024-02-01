import { CodeBracketIcon } from '@heroicons/react/20/solid'
import React from 'react'

export const TopHomeSection = () => {
    return (
        <div className='my-10'>
            <div>
                <img className='w-32 rounded-full' src="https://avatars.githubusercontent.com/JoseGaldamez" alt="José Galdámez" />
            </div>
            <div className='my-8'>
                <h2 className='text-3xl text-white py-3'>Hola mundo, soy
                </h2>
                <h1 className='font-semibold text-5xl'>
                    José Galdámez
                </h1>
                <h3 className='py-3 text-gray-500 flex items-center'>
                    <CodeBracketIcon className='h-8 w-8' />
                    <span className='mx-3 text-lg'>
                        FullStack Developer
                    </span>
                </h3>
            </div>
        </div>
    )
}

import { ArrowTopRightOnSquareIcon, ChatBubbleOvalLeftEllipsisIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const OthersContact = () => {
    return (

        <div className='py-5 text-white tracking-wider'>
            Otras formas de contacto:
            <li className='hidden sm:block'>
                <a className='rounded-lg flex items-center gap-2 py-3 px-3 my-3 bg-slate-800' href="mailto:josegaldamez1991@gmail.com?subject=Desde%20tu%20web&body=Hola%20Jos%C3%A9..."><EnvelopeOpenIcon className='w-5' /> Correo: <strong>josegaldamez1991@gmail.com</strong> <ArrowTopRightOnSquareIcon className='w-5' /> </a>
            </li>
            <li className='block sm:hidden'>
                <a className='rounded-lg flex items-center gap-2 py-3 px-3 my-3 bg-slate-800' href="mailto:josegaldamez1991@gmail.com?subject=Desde%20tu%20web&body=Hola%20Jos%C3%A9..."><EnvelopeOpenIcon className='w-5' /> <strong>josegaldamez1991@gmail.com</strong> <ArrowTopRightOnSquareIcon className='w-5' /> </a>
            </li>
            <li className='hidden sm:block'>
                <a className='rounded-lg flex items-center gap-2 py-3 px-3 my-3 bg-slate-800' href="https://api.whatsapp.com/send?phone=50431751455&text=Hola%20Jos%C3%A9...%20" target='_blank'><ChatBubbleOvalLeftEllipsisIcon className='w-5' /> WhatsApp: <strong>+504 3175-1455</strong> <ArrowTopRightOnSquareIcon className='w-5' /> </a>
            </li>
            <li className='block sm:hidden'>
                <a className='rounded-lg flex items-center gap-2 py-3 px-3 my-3 bg-slate-800' href="https://api.whatsapp.com/send?phone=50431751455&text=Hola%20Jos%C3%A9...%20" target='_blank'><ChatBubbleOvalLeftEllipsisIcon className='w-5' /> <strong>+504 3175-1455</strong> <ArrowTopRightOnSquareIcon className='w-5' /> </a>
            </li>
        </div>
    )
}

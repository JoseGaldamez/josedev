import React from 'react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { ArrowTopRightOnSquareIcon, ChatBubbleOvalLeftEllipsisIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline';

export const ButtonContact = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <span className='text-sm px-3 py-1 transition border rounded-3xl bg-gray-800 hover:bg-yellow-400 hover:text-gray-600 flex items-center ml-5 cursor-pointer'>
                    <EnvelopeIcon className='h-5 w-6 flex pr-2' />
                    Contacto </span>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-dark bg-gray-950">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-white text-2xl">Elige la que prefieras.</AlertDialogTitle>
                    <AlertDialogDescription>
                        Puedes contactar conmigo de muchas maneras, las más rápidas serían:
                        <ul className='py-5 text-white tracking-wider'>
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
                        </ul>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>Listo</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

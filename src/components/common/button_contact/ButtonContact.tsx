import React from 'react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { ArrowTopRightOnSquareIcon, EnvelopeOpenIcon, ChatBubbleOvalLeftEllipsisIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { OthersContact } from './OthersContact';
import { FormContact } from './FormContact';

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
                    <AlertDialogTitle className="text-white text-2xl">Escribeme un mensaje.</AlertDialogTitle>
                    <AlertDialogDescription asChild>
                        <div>
                            <FormContact />
                            <OthersContact />
                        </div>

                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Listo</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

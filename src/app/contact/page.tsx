import { ChatBubbleBottomCenterIcon, ChatBubbleLeftRightIcon, EnvelopeOpenIcon, MinusSmallIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ContactPage = () => {
    return (
        <main className='max-w-6xl m-auto py-24 px-10'>
            <div>
                <h2 className='text-3xl font-bold'>Contacto</h2>
                <p className='text-lg my-5 text-gray-600'>Si tienes un comentario o sugerencia o simplemente quieres charlar, no dudes en ponerte en contacto conmigo.</p>
                <hr />
            </div>

            <div className='flex gap-5'>
                <a href='https://api.whatsapp.com/send?phone=50431751455&text=Hola%20Jos%C3%A9...%20' target='_blank' className='w-1/2 my-5 border rounded-lg p-5 text-center bg-slate-100 hover:bg-slate-300 transition-all'>
                    <ChatBubbleLeftRightIcon className='w-14 h-14 text-center block mx-auto mb-5' />
                    Enviar mensaje por whatsapp
                </a>
                <a href='mailto:josegaldamez1991@gmail.com?subject=Desde%20tu%20web&body=Hola%20Jos%C3%A9...' target='_blank' className='w-1/2 my-5 border rounded-lg p-5 text-center bg-slate-100 hover:bg-slate-300 transition-all'>
                    <EnvelopeOpenIcon className='w-14 h-14 text-center block mx-auto mb-5' />
                    Enviar correo electrónico
                </a>
            </div>

        </main>
    )
}

export default ContactPage
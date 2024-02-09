import React, { FormEvent, useState } from 'react'
import { ButtonSendMessage } from './ButtonSendMessage'

export const FormContact = () => {

    const [message, setMessage] = useState<string>('')
    const [sending, setSending] = useState<boolean>(false);
    const [sent, setSent] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendMessage();
    }

    const sendMessage = async () => {
        if (message === '') return;
        setSending(true);

        try {
            const responseMessage = await fetch('api/messages', {
                method: 'POST',
                body: JSON.stringify({ message: `*WEB*: ${message}` })
            })

            await responseMessage.json();

        } catch (error) {
            console.log({ error });
        }

        setSent(true);
        setMessage('');
        setSending(false);
    }

    return (
        <>
            {
                sent ? (
                    <div className="flex flex-col sm:flex-row items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-16 h-16 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <div>
                            <p className="font-bold text-lg">¡Mensaje enviado!</p>
                            <p>He recibido tu mensaje, si incluiste información de contacto, pronto te responderé.</p>
                            <p className='font-semibold'>Muchas gracias por escribirme.</p>
                        </div>
                    </div>
                ) : (

                    <form className="w-full" onSubmit={handleSubmit}>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">Este mensaje llegará directamente a mi Whatsapp. No olvides agrega tu nombre y forma de contacto. </label>
                        <textarea value={message} onChange={(value) => setMessage(value.target.value)} id="message" rows={4} className="block p-2.5 w-full text-sm rounded-lg bg-gray-700 placeholder-gray-400 text-white border-none border-gray-700" placeholder="Escribe tu mensaje..." />
                        <ButtonSendMessage sending={sending} sendMessage={sendMessage} />
                    </form>
                )
            }
        </>
    )
}

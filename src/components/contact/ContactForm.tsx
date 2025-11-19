'use client'
import { sendMessage, sendMessageConfirm } from '@/server/sendMessage';
import { buildConfirmMessage, buildMessage } from '@/utils/buildMessage';
import React, { useState } from 'react'
import { toast } from 'sonner';

export const ContactForm = () => {

    const [formData, setformData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();


        // validate form data
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            toast.error('Por favor, completa todos los campos.');
            return;
        }

        setIsLoading(true);
        console.log('Formulario enviado:', formData);
        const message = buildMessage(formData.name, formData.email, formData.message);
        const messageConfirm = buildConfirmMessage(formData.name);

        try {
            const result = sendMessage(message);
            const resultConfirm = sendMessageConfirm(messageConfirm, formData.email);
            console.log('Resultados del envío:', result, resultConfirm);

            setSuccess(true);

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setError(true);
        } finally {
            setIsLoading(false);
        }

        // Reiniciar el formulario después del envío
        setformData({ name: '', email: '', message: '' });
    }

    const checkForm = () => {
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            return false;
        }
        return true;
    }

    return (
        <div className='w-full animate-in fade-in-0 duration-1000'>
            <h2 className='my-10'>O bien...</h2>

            {success && (
                <div className='bg-green-800/20 border border-green-600 text-green-400 p-4 rounded-md max-w-xl mx-auto'>
                    <h3 className='font-semibold text-lg mb-2'>¡Mensaje enviado con éxito!</h3>
                    <p>Gracias por contactarme. Me pondré en contacto contigo lo antes posible.</p>
                </div>
            )}

            {error && (
                <div className='bg-orange-800/5 border border-orange-900 text-orange-900 p-4 rounded-md max-w-xl mx-auto'>
                    <h3 className='font-semibold text-lg mb-2'>Error al enviar el mensaje</h3>
                    <p>Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.</p>
                </div>
            )}

            {
                (!error && !success) && (
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-xl mx-auto'>
                        <input type="text" value={formData.name} onChange={(e) => setformData({ ...formData, name: e.target.value })} placeholder="Nombre" className='p-2 bg-white/5 border border-gray-900 text-white' />
                        <input type="email" value={formData.email} onChange={(e) => setformData({ ...formData, email: e.target.value })} placeholder="Correo Electrónico" className='p-2 bg-white/5 border border-gray-900 text-white' />
                        <textarea value={formData.message} onChange={(e) => setformData({ ...formData, message: e.target.value })} placeholder="Mensaje" className='p-2 bg-white/5 border border-gray-900 text-white h-32'></textarea>
                        <button disabled={isLoading || !checkForm()} type="submit" className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'>
                            {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </form>
                )
            }
        </div>
    )
}

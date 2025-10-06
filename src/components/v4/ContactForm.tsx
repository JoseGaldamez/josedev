'use client';
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { toast } from "sonner"
import { sendMessage, sendMessageConfirm } from '@/server/sendMessage';
import { buildMessage, buildMessageAdmin } from '@/utils/buildMessage';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({name, email, message});
        setLoading(true);
        try {
            // Simulate an API call
            const result = await sendMessage(buildMessageAdmin(name, email, message));
            
            if (!result || !result.success) {
              toast.error("Error al enviar el mensaje");
              return;
            } else {
              await sendMessageConfirm(buildMessage(name, email), email);
              setName("");
              setEmail("");
              setMessage("");
              toast.success("Mensaje enviado exitosamente");
            }
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
        } finally {
            setLoading(false);
        }
    }


  return (
    <div className='pt-10'>
        <form onSubmit={handleSubmit}>
            <div className='my-4'>
                <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='name'>Nombre</label>
                <Input
                  className='bg-gray-100 !text-md border rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:shadow-outline !h-auto'
                  id='name'
                  type='text'
                  placeholder='Tu nombre'
                  value={name}
                  onChange={ (e) => { setName(e.target.value) } }
                />
            </div>
            <div className='my-4'>
                <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='email'>Email</label>
                <Input
                  className='bg-gray-100 !text-md border rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:shadow-outline !h-auto'
                  id='email'
                  type='email'
                  placeholder='Tu correo electrónico'
                  value={email}
                  onChange={ (e) => { setEmail(e.target.value) } }
                />
            </div>
            <div className='my-4'>
                <label className='block text-gray-700 text-md font-bold mb-2' htmlFor='message'>Mensaje</label>
                <Textarea
                  className='bg-gray-100 !text-md border rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:shadow-outline !h-auto'
                  id='message'
                  placeholder='Tu mensaje'
                  rows={6}
                  value={message}
                  onChange={ (e) => { setMessage(e.target.value) } }
                />
            </div>
            <div className='my-4'>
                <Button 
                disabled={loading}
                  type='submit' 
                  className='w-full disabled:bg-gray-500'
                >
                  { loading ? 'Enviando...' : 'Enviar' }
                </Button>
            </div>
        </form>
    </div>
  )
}

'use client';
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { toast } from "sonner"

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
            await new Promise((resolve) => setTimeout(resolve, 2000));
            toast.success("Mensaje enviado exitosamente");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
        } finally {
            setLoading(false);
        }
    }


  return (
    <div className='max-w-3xl mx-auto pt-28'>
        <h2 className='text-5xl font-bold mb-6'>Contáctame</h2> 
        <hr className='border-b-2 border-gray-300' />
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

'use client';

import React, { FormEvent, useState } from 'react'

export const IAQuestions = () => {

    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);


    const handleClickSend = () => {
        askingRequest();
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        askingRequest();
    }

    const askingRequest = () => {
        if (question === '') return;

        setLoading(true);
        setResponse('');

        try {
            const searchParams = new URLSearchParams();
            searchParams.append('question', question);

            const eventSource = new EventSource(`/api/ask?${searchParams.toString()}`);

            eventSource.onmessage = (event) => {
                const incommigData = JSON.parse(event.data);
                if (incommigData.length > 0) {
                    setLoading(false);
                    setQuestion('');
                }
                if (incommigData === '__END__') {
                    eventSource.close();
                    return;
                }
                setResponse((oldValue) => (oldValue + incommigData))
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className='mt-10 w-full bg-gray-950 border-gray-900 border p-5 rounded-lg backdrop-blur-sm'>

            <h2 className='text-2xl font-bold pb-4 tracking-wide'>¿Quieres saber algo sobre mí?</h2>
            <p className='text-lg text-gray-600'>Pregunta lo que quieras, mi asistente con inteligencia artificial te ayudará respondiento todo lo que necesites saber.</p>

            <form className='relative mt-5 mb-5' onSubmit={handleSubmit}>

                <input name='question' required placeholder='Ejemplo: ¿qué experiencia laboral tiene?' onChange={(input) => setQuestion(input.target.value)} type="text" value={question} className='block w-full p-4 pr-8 border rounded-lg sm:text-md bg-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                <div className="absolute inset-y-0 end-0 flex items-center pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-300" onClick={handleClickSend}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </div>
            </form>
            {
                response !== '' && (
                    <article className='mt-5 text-base border-l-2 border-gray-800 pl-8 animate-in ml-2 relative'>
                        <span className="text-gray-400 absolute rounded-full -left-2 -top-5 text-4xl"> •</span>
                        <span className="text-gray-400 absolute rounded-full -left-2 -bottom-5 text-4xl"> •</span>
                        <span className=' text-gray-400'>
                            {response}
                        </span>
                    </article>
                )
            }

            {
                loading && (
                    <p className='mt-5 h-10 text-center w-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 animate-spin mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </p>
                )
            }

        </section>
    )
}

'use client';
import React, { FormEvent, useState } from 'react'


export const InputQuestion = () => {
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

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

    const textToHtml = (text: string) => {
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        const newText = text.replace(urlRegex, function (url) {
            return `<a class='text-blue-400 underline' target='_blank' href=${url}>${url}</a>`
        })
        return newText
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='question' required onChange={(input) => setQuestion(input.target.value)} type="text" value={question} className='w-full max-w-3xl mx-auto p-5 text-lg rounded-lg' placeholder="Pregunta sobre mi, ejemplo ¿qué experiencia laboral tiene?" />
            </form>
            {
                response !== '' && (
                    <article className='mt-10 text-lg text-left max-w-3xl mx-auto flex gap-3'>
                        <div>
                            <span className='bg-gray-300 w-12 h-12 rounded-full flex justify-center items-center text-lg text-white font-bold p-2'>AI</span>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: textToHtml(response) }} className=' text-gray-500'>
                        </p>
                    </article>
                )
            }
            {
                loading && (
                    <p className='mt-10 h-10 text-center w-full'>
                        <div className='animate-pulse bg-slate-200 max-w-3xl mx-auto rounded-lg h-3 mb-3'></div>
                        <div className='animate-pulse bg-slate-200 max-w-3xl mx-auto rounded-lg h-3 mb-3'></div>
                        <div className='animate-pulse bg-slate-200 max-w-3xl mx-auto rounded-lg h-3 mb-3'></div>
                    </p>
                )
            }
        </div>
    )
}

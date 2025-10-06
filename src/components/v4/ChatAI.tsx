'use client';

import { MessageAIChat } from '@/models/message.model';
import { askToAI } from '@/server/openai.actions';
import { removeHTMLWrapper } from '@/utils/handleResponseAI';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'
import React, { useState, useRef, useEffect } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export const ChatAI = () => {
    const [loading, setLoading] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [chats, setChats] = useState<MessageAIChat[]>([]);
    const [textMessage, setTextMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chats, loading]);

    const handleSendMessage = async (message: string) => {
        // Aquí puedes manejar el envío del mensaje, actualizar el estado de chats, etc.
        const newMessage: MessageAIChat = {
            id: Date.now().toString(),
            role: 'user',
            content: message
        };
        try {
            setChats([...chats, newMessage]);
            setLoading(true);
            setTextMessage('');
            const response = await askToAI(message);
            if (response) {
                const newAIChat: MessageAIChat = {
                    id: Date.now().toString(),
                    role: 'assistant',
                    content: removeHTMLWrapper(response)
                };
                setLoading(false);
                setChats([...chats, newMessage, newAIChat]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='relative'>

            <Tooltip delayDuration={0}>
                <TooltipTrigger className='text-center flex flex-col justify-center items-center'>
            
                    <ChatBubbleBottomCenterTextIcon 
                        className='h-6 w-6 text-[#7b7b7b] hover:text-[#37baba] transition-colors' 
                        onClick={() => setShowChat(!showChat)} 
                    />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Chat with my AI</p>
                </TooltipContent>
              </Tooltip>

            
            {showChat && (
                <div className='fixed w-full min-h-screen bg-black/90 left-0 top-0 backdrop-blur-2xl'>
                    <div className='w-full h-screen flex items-end justify-center'>
                        <div className='bg-white container mx-auto p-0 mt-20 rounded-t-xl max-w-3xl h-[90vh] flex flex-col overflow-hidden'>
                            {/* Header del chat */}
                            <div className='flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-10 h-10 bg-gradient-to-br from-[#37baba] to-[#14426d] rounded-full flex items-center justify-center text-white font-bold'>
                                        AI
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-gray-800'>Chat con José AI</h3>
                                        <p className='text-sm text-gray-500'>Asistente virtual</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => setShowChat(false)}
                                    className='text-gray-500 hover:text-gray-700 text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors'
                                >
                                    ×
                                </button>
                            </div>
                            
                            {/* Área de mensajes */}
                            <div className='flex-1 p-6 overflow-y-auto bg-gray-50'>
                                <div className='space-y-4'>
                                    {
                                        chats.map((chat) => (
                                            <div key={chat.id}>
                                                { chat.role !== 'user' ? (
                                                    <div className='flex gap-3'>
                                                        <div className='w-8 h-8 bg-gradient-to-br from-[#37baba] to-[#14426d] rounded-full flex items-center justify-center text-white text-sm font-bold'>
                                                            AI
                                                        </div>
                                                        <div className='bg-white p-3 rounded-lg shadow-sm max-w-md text-left'>
                                                            <div dangerouslySetInnerHTML={{ __html: chat.content }}className='text-gray-700'></div>
                                                        </div>
                                                    </div>
                                    ) : (
                                    <div className='flex gap-3 justify-end'>
                                        <div className='bg-[#37baba] p-3 rounded-lg shadow-sm max-w-md'>
                                            <p className='text-white'>{chat.content}</p>
                                        </div>
                                        <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold'>
                                            Tú
                                        </div>
                                    </div>
                                    ) }  

                                    




                                </div>
                                ))
                            }

                                {
                                        loading && (
                                        <div className='flex gap-3'>
                                                        <div className='w-8 h-8 bg-gradient-to-br from-[#37baba] to-[#14426d] rounded-full flex items-center justify-center text-gray-100 text-sm font-bold'>
                                                            AI
                                                        </div>
                                                        <div className='bg-white p-3 rounded-lg shadow-sm max-w-md text-left flex gap-1'>
                                                            <span className='bg-gray-400 w-2 h-2 rounded-full block animate-pulse'></span>
                                                            <span className='bg-gray-400 w-2 h-2 rounded-full block animate-pulse'></span>
                                                            <span className='bg-gray-400 w-2 h-2 rounded-full block animate-pulse'></span>
                                                        </div>
                                        </div>)
                                    }

                                    {/* Elemento para hacer scroll al final */}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>
                            
                            {/* Input del chat */}
                            <div className='p-4 border-t border-gray-200 bg-white'>
                                <div className='flex gap-3 items-end'>
                                    <textarea 
                                        placeholder='Escribe tu mensaje aquí...'
                                        className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37baba] resize-none min-h-[44px] max-h-32'
                                        rows={1}
                                        value={textMessage}
                                        onChange={(e) => setTextMessage(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                handleSendMessage(textMessage);
                                            }
                                        }}
                                    />
                                    <button onClick={() => {
                                        handleSendMessage(textMessage)
                                    }} className='px-6 py-3 bg-[#37baba] text-white rounded-lg hover:bg-[#2a9999] transition-colors font-medium'>
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

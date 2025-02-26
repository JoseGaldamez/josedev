import { Message } from '@/models/message.model'
import React from 'react'

interface Props {
    messages: Message[],
    loading: boolean
}

export const MessagesList = ({ messages, loading }: Props) => {
    return (
        <div className="w-full flex flex-col items-end justify-end">
            {
                messages.map((msg, index) => (
                    <p dangerouslySetInnerHTML={{ __html: msg.message }} key={msg.id}
                        className={`text-gray-100 w-2/3 rounded-xl m-2 py-2 px-3 ${msg.user === "assistant" ? "bg-[#1c1f17] self-end" : "bg-[#2a2e23] self-start"}`}>

                    </p>
                ))
            }
            {
                loading && (
                    <div className='w-2/3 self-start m-2'>
                        <div className='animate-pulse bg-slate-200 max-w-3xl mx-auto rounded-lg h-3 mb-3'></div>
                        <div className='animate-pulse bg-slate-200 max-w-3xl mx-auto rounded-lg h-3 mb-3'></div>

                    </div>
                )
            }
        </div>
    )
}

'use client';
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import { Fab } from './Fab';

export const ButtonChat = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='w-full md:w-auto'>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full w-full"
                onClick={() => setShow(true)}
            >
                <span className='transition-all py-3 px-5 rounded-full flex items-center justify-center border border-1 border-gray-500'>
                    Chat con mi AI
                    <ChatBubbleOvalLeftEllipsisIcon className='h-8 w-8 ml-3' />
                </span>
            </motion.button>
            <Fab show={show} setShow={setShow} />
        </div>
    )
}

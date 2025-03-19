'use client';
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import { Fab } from './Fab';

export const ButtonChat = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full"
                onClick={() => setShow(true)}
            >
                <span className='bg-white bg-opacity-5 hover:bg-opacity-10 transition-all py-3 px-5 rounded-full flex items-center justify-center text-lg font-light'>
                    Chat con mi AI
                    <ChatBubbleOvalLeftEllipsisIcon className='h-8 w-8 text-gray-100 ml-3' />
                </span>
            </motion.button>
            <Fab show={show} setShow={setShow} />
        </div>
    )
}

"use client"
import React, { useState } from 'react'

import { motion } from "framer-motion"
import { ArrowRightIcon, ChatBubbleBottomCenterIcon, ChatBubbleOvalLeftEllipsisIcon, StarIcon } from '@heroicons/react/24/outline'
import { SocialLinksHorizontal } from './SocialLinksHorizontal';
import { Fab } from './Fab';
import Link from 'next/link';

export const Hero = () => {

    const [show, setShow] = useState(false)

    return (
        <section id='home' className='border-b border-gray-100 border-opacity-20'>

            <div className="h-screen flex flex-col justify-between bg-opacity-50">
                <div></div>

                <div className='flex flex-col items-center justify-between p-5 max-w-6xl w-full mx-auto'>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='text-center'
                    >
                        <h1
                            className="uppercase text-6xl md:text-7xl font-bold py-5 bg-gradient-to-r from-[#14426d] to-[#5a7298] bg-clip-text text-transparent">José Galdámez</h1>
                        <p className="text-xl mb-8 text-[#14426d] opacity-80">Desarrollador Fullstack</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full"
                            onClick={() => setShow(true)}
                        >
                            <span className='bg-[#14426d] hover:bg-[#264867] transition-all py-3 px-5 rounded-full flex items-center justify-center text-lg font-light'>
                                Chat con mi AI
                                <ChatBubbleOvalLeftEllipsisIcon className='h-8 w-8 text-gray-100 ml-3' />
                            </span>
                        </motion.button>
                    </motion.div>



                </div>


                <div className='border-t border-gray-100 border-opacity-20 p-16 bg-[#14426d] bg-opacity-20 hidden md:block text-[#17334f]'>

                    <div className='flex items-center justify-between  gap-5 max-w-7xl w-full mx-auto'>
                        <div className='px-10 flex items-center justify-center'>
                            <h2 className='text-5xl font-light mb-2 pr-4'>6,000+</h2>
                            <Link href='https://www.udemy.com/user/jose-galdamez-5/' target='_blank' className='font-light pb-2 hover:underline'>
                                <p className='font-light pb-2'>Alumnos en Udemy</p>
                            </Link>

                        </div>
                        <div className='px-10 flex items-center justify-center'>
                            <h2 className='text-5xl font-light mb-2 pr-4'>5+</h2>
                            <p className='font-light pb-2'>Años de experiencia</p>
                        </div>
                        <div className='px-10 flex items-center justify-center'>
                            <h2 className='text-5xl font-light mb-2 pr-4 flex items-center justify-center'>
                                4.9 <StarIcon className='h-10 w-10 text-yellow-700 ml-2' />
                            </h2>
                            <p className='font-light pb-2'>Calificación en <br />tiendas de apps</p>
                        </div>

                    </div>
                </div>
                <div className='border-t border-gray-100 border-opacity-20 p-8 bg-black bg-opacity-20 block md:hidden'>
                    <SocialLinksHorizontal />
                </div>
            </div>


            <Fab show={show} setShow={setShow} />
        </section>
    )
}

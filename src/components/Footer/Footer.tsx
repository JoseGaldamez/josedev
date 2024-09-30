import React from 'react'
import Image from 'next/image'

import FacebookIcon from '@/icons/facebook.png';
import GithubIcon from '@/icons/github.png';
import YoutubeIcon from '@/icons/youtube.png';
import LinkedInIcon from '@/icons/linkedin.png';
import Link from 'next/link';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export const Footer = () => {
    return (
        <div className='w-full py-24 mt-24 bg-slate-200'>
            <section className='md:flex max-w-6xl m-auto items-start justify-between gap-5'>
                <div className='md:w-2/4 px-5 mb-10'>
                    <h3 className='text-gray-700 text-xl font-bold'>
                        José Galdámez
                    </h3 >
                    <p className='text-gray-700'>Desarrollador Fullstack</p>
                    <p className='text-gray-400 mt-5'>Autodidacta eterno, desarrollador de aplicaciones web y móviles con más de 3 años de experiencia trabajando tanto de forma independiente como en equipos de alto rendimiento.</p>
                </div>
                <div className='md:w-1/4 px-5 mb-10'>
                    <h3 className='text-gray-700 text-xl font-bold'>
                        Redes sociales
                    </h3 >
                    <ul className='mt-5'>
                        <li className='mt-3'>
                            <a className='flex items-center text-gray-600 hover:text-gray-800 brightness-50 hover:brightness-0 hover:cursor-pointer transition-all' target='_blank' href="https://github.com/JoseGaldamez">
                                <Image className='mr-2' src={GithubIcon} width={24} height={24} alt='Github' /> Github
                            </a>
                        </li>
                        <li className='mt-3'>
                            <a className='flex items-center text-gray-600 hover:text-gray-800 brightness-50 hover:brightness-0 hover:cursor-pointer transition-all' target='_blank' href="https://www.linkedin.com/in/josegaldamezdev/">
                                <Image className='mr-2' src={LinkedInIcon} width={24} height={24} alt='Github' /> LinkedIn
                            </a>
                        </li>
                        <li className='mt-3'>
                            <a className='flex items-center text-gray-600 hover:text-gray-800 brightness-50 hover:brightness-0 hover:cursor-pointer transition-all' target='_blank' href="https://www.facebook.com/josegaldamezdev/">
                                <Image className='mr-2' src={FacebookIcon} width={24} height={24} alt='Facebook' /> Facebook
                            </a>
                        </li>
                        <li className='mt-3'>
                            <a className='flex items-center text-gray-600 hover:text-gray-800 brightness-50 hover:brightness-0 hover:cursor-pointer transition-all' target='_blank' href="https://www.youtube.com/codigocorrecto">
                                <Image className='mr-2' src={YoutubeIcon} width={24} height={24} alt='Youtube' /> Youtube
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='md:w-1/4 px-5'>
                    <h3 className='text-gray-700 text-xl font-bold'>
                        Enlaces
                    </h3 >
                    <ul>
                        <li className='mt-3'>
                            <Link className='hover:text-gray-800 text-gray-500' href={'/blog'}>Blog</Link>
                        </li>
                        <li className='mt-3'>
                            <Link className='hover:text-gray-800 text-gray-500' href={'/contact'}>Contacto</Link>
                        </li>
                        <li className='bg-slate-400 hover:bg-slate-800 mt-3 text-white px-2 py-1 rounded-lg'>
                            <a className='flex items-center justify-center' href={'/JoseGaldamez_CV.pdf'} download={'JoseGaldamez_CV.pdf'}>Descargar CV <ArrowDownIcon className='w-4 h-4 ml-2' /> </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

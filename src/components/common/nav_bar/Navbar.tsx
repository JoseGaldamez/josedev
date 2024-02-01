'use client'


import Image from 'next/image';

import LogoJG from '@/assets/logo-jg.png'
import { ButtonContact } from '../button_contact/ButtonContact';

export const Navbar = () => {

    return (
        <div className="fixed backdrop-blur-sm top-0 z-10 w-full px-2 ml-1">
            <div className='flex items-center justify-between mx-auto h-20 max-w-4xl px-5 sm:px-14 rounded-3xl'>
                <span>
                    <Image src={LogoJG} alt="JG" className='w-10 xs:mx-2' />
                </span>
                <nav className='flex px-3 text-md font-medium text-gray-200'>
                    <a className='block px-2 py-2 transition hover:text-yellow-400' href="https://www.codigocorrecto.com/" target='_blank'>Blog</a>

                    <ButtonContact />

                </nav>
            </div>
        </div>
    )
}

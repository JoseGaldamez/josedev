import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <header className='w-full py-2 px-5 flex items-center justify-between fixed bg-white z-10'>
            <div>
                <Link href={'/'}>
                    <Image src={'/logoJG.png'} className='w-10' width={50} height={50} alt='Jose Galdamez Logo' />
                </Link>
            </div>
            <menu>
                <ul className='flex items-center justify-between space-x-5'>
                    <li>
                        <Link href={'/blog'}>Blog</Link>
                    </li>
                    <li>
                        <Link href={'/courses'}>Cursos</Link>
                    </li>
                    <li className='hidden sm:block'>
                        <Link href={'/contact'}>Contacto</Link>
                    </li>
                    <li className='hidden sm:block bg-slate-800 hover:bg-slate-200 text-white hover:text-slate-900 px-2 py-1 rounded-lg'>
                        <a href={'/JoseGaldamez_CV.pdf'} download={'JoseGaldamez_CV.pdf'}>Descargar CV</a>
                    </li>
                </ul>
            </menu>
        </header>
    )
}

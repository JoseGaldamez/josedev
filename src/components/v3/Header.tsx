'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='w-full py-3 px-6 fixed top-0 left-0 z-50 backdrop-blur-md'>
            <div className='flex justify-between items-center gap-4'>
                <div>
                    <Link
                        href='/'
                        className='text-white'
                    >
                        <h2 className='bg-gradient-to-r from-[#244354] via-[#aad6eb]  to-[#244354] bg-clip-text text-transparent text-3xl font-bold'>
                            JG
                        </h2>
                    </Link>
                </div>
                {/* Botón hamburguesa solo visible en móvil */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
                {/* Menú desktop */}
                <div className='hidden md:flex items-center gap-4'>
                    <Link href='/courses' className='text-white'>Cursos</Link>
                    <Link href='/blog' className='text-white mr-3'>Blog</Link>
                    <Link
                        href='/contact'
                        className='text-white px-4 py-2 border rounded-xl border-[#37baba] animated-shadow transition-transform duration-300'
                    >
                        Contacto
                    </Link>
                </div>
            </div>
            {/* Menú móvil */}
            {menuOpen && (
                <nav className="md:hidden absolute top-full left-0 w-full shadow-lg animate-fade-in backdrop-blur-md bg-[#07151d] rounded-lg">
                    <ul className="flex flex-col items-center gap-4 py-6">
                        <li>
                            <Link href='/courses' className='text-white text-lg' onClick={() => setMenuOpen(false)}>Cursos</Link>
                        </li>
                        <li className='mb-3'>
                            <Link href='/blog' className='text-white text-lg' onClick={() => setMenuOpen(false)}>Blog</Link>
                        </li>
                        <li>
                            <Link
                                href='/contact'
                                className='text-white px-5 py-2 border rounded-xl border-[#37baba] animated-shadow transition-transform duration-300'
                                onClick={() => setMenuOpen(false)}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}
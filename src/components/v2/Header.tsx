import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md flex justify-between items-center py-5 md:py-0 ">
            <div className='px-5 md:px-10'>
                <Link href="/#home" className="text-slate-100 hover:text-yellow-600 transition-colors">
                    <h1
                        className="uppercase text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#f6f4e5] to-[#dbf7a6d2] bg-clip-text text-transparent">JG</h1>
                </Link>
            </div>
            <nav className="hidden md:block mx-auto px-6 py-4">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <Link href="/#home" className="text-slate-100 hover:text-yellow-600 transition-colors">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="/#experience" className="text-slate-100 hover:text-yellow-600 transition-colors">
                            Experiencia
                        </Link>
                    </li>
                    <li>
                        <Link href="/#projects" className="text-slate-100 hover:text-yellow-600 transition-colors">
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-slate-100 hover:text-yellow-600 transition-colors">
                            Blog
                        </Link>
                    </li>

                </ul>
            </nav>

            <div className='mr-5 flex items-center gap-6'>
                <Link href="/blog" className="text-slate-100 hover:text-yellow-600 transition-colors block md:hidden">
                    Blog
                </Link>

                <Link href="/contact" className="bg-yellow-600 text-white hover:bg-yellow-700 rounded-lg px-4 py-2 transition-colors">
                    Contacto
                </Link>
                {/* <Link href="/JoseGaldamez_CV.pdf" target="_blank" rel="noopener noreferrer" className="bg-yellow-600 text-white hover:bg-yellow-700 rounded-lg px-4 py-2 transition-colors">
                    Descargar CV
                </Link> */}
            </div>
        </header>
    )
}

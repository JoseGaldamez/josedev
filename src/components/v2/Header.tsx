import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md flex justify-between items-center py-5 md:py-0 ">
            <div className='px-5 md:px-10'>
                <Link href="/#home" className="text-slate-100 hover:text-yellow-600 transition-colors">
                    <h1
                        className="uppercase text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#14426d] to-[#5a7298] bg-clip-text text-transparent">JG</h1>
                </Link>
            </div>
            <nav className="hidden md:block mx-auto px-6 py-4">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <Link href="/#home" className="text-[#284c84] hover:text-[#14426d] hover:font-bold hover:underline transition-all">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="/#experience" className="text-[#284c84] hover:text-[#14426d] hover:font-bold hover:underline transition-all">
                            Experiencia
                        </Link>
                    </li>
                    <li>
                        <Link href="/#projects" className="text-[#284c84] hover:text-[#14426d] hover:font-bold hover:underline transition-all">
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link href="/courses" className="text-[#284c84] hover:text-[#14426d] hover:font-bold hover:underline transition-all">
                            Cursos
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-[#284c84] hover:text-[#14426d] hover:font-bold hover:underline transition-all">
                            Blog
                        </Link>
                    </li>

                </ul>
            </nav>

            <div className='mr-5 flex items-center gap-6'>
                <Link href="/blog" className="text-[#284c84] hover:text-[#14426d] transition-colors block md:hidden">
                    Blog
                </Link>

                <Link href="/contact" className="bg-[#284c84] text-white hover:bg-[#284c84]rounded-lg px-4 py-2 transition-colors">
                    Contacto
                </Link>
            </div>
        </header>
    )
}

import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
            <nav className="container mx-auto px-6 py-4">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <Link href="/#home" className="text-slate-100 hover:text-yellow-600 transition-colors">
                            Habilidades
                        </Link>
                    </li>
                    <li>
                        <Link href="/#experience" className="text-slate-100 hover:text-yellow-600 transition-colors">
                            Experiencia
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects" className="text-slate-100 hover:text-yellow-600 transition-colors">
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects" className="text-slate-100 hover:text-yellow-600 transition-colors">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

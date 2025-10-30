import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'José Galdámez | Fullstack Developer',
    description: 'Desarrollador de aplicaciones web y móviles',
    openGraph: {
        images: "https://josegaldamez.dev/jose-portada.png"
    }
}

const IndexHome = () => {
    return (
        <main className='min-h-screen bg-[#f2f2f2] text-[#253237] transition-colors duration-500'>
            Hola
        </main>
    )
}

export default IndexHome;

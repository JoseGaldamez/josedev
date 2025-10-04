import React from 'react'
import { Metadata } from 'next';
import { HeaderV4 } from '@/components/v4/Header';
import { HomeHeroV4 } from '@/components/v4/HomeHero';

export const metadata: Metadata = {
    title: 'José Galdámez | Fullstack Developer',
    description: 'Desarrollador de aplicaciones web y móviles',
    openGraph: {
        images: "https://josegaldamez.dev/jose-portada.png"
    }
}

const IndexHome = () => {
    return (
        <main className='min-h-screen bg-[#EBEBEB] text-[#253237] transition-colors duration-500'>
            <HeaderV4 />
            <HomeHeroV4 />
        </main>
    )
}

export default IndexHome;

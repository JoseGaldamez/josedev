import React from 'react'
import { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { Topbar } from '@/components/Topbar';
import { IconsBanner } from '@/components/IconsBanner';

export const metadata: Metadata = {
    title: 'José Galdámez | Fullstack Developer',
    description: 'Desarrollador de aplicaciones web y móviles',
    openGraph: {
        images: "https://josegaldamez.dev/jose-portada.png"
    }
}

const IndexHome = () => {
    return (
        <main className='min-h-screen bg-black text-[#f2f2f2] transition-colors duration-500'>
            <Topbar />
            <HeroSection />
            <IconsBanner />
        </main>
    )
}

export default IndexHome;

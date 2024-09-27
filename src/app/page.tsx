import React from 'react'
import { Metadata } from 'next';
import { AboutMe, AskSection, ProjectSection } from '@/components';
import { TechnologiesCarrucel } from '@/components/TechnologiesCarrucel/TechnologiesCarrucel';

export const metadata: Metadata = {
    title: 'Josá Galdámez | Fullstack Developer',
    description: 'Desarrollador de aplicaciones web y móviles',
    openGraph: {
        images: "https://josegaldamez.dev/jose-portada.jpg"
    }
}


const IndexHome = () => {
    return (
        <main>
            <AskSection />
            <TechnologiesCarrucel />
            <AboutMe />
            <ProjectSection />
        </main>
    )
}


export default IndexHome;

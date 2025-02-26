import React from 'react'
import { Metadata } from 'next';
import { AboutMe, AskSection, ExperienceSection, Footer, ProjectSection, TechnologiesCarrucel } from '@/components';
import { Header } from '@/components/v2/Header';
import { Hero } from '@/components/v2/Hero';
import { SocialLinks } from '@/components/v2/SocialLinks';
import { WorkExperience } from '@/components/v2/WorkExperience';
import { Fab } from '@/components/v2/Fab';

export const metadata: Metadata = {
    title: 'Josá Galdámez | Fullstack Developer',
    description: 'Desarrollador de aplicaciones web y móviles',
    openGraph: {
        images: "https://josegaldamez.dev/jose-portada.jpg"
    }
}


const IndexHome = () => {
    return (
        <main className='min-h-screen hero text-white relative'>
            <Header />
            <Hero />
            <WorkExperience />
            <div className='hidden md:block'>
                <SocialLinks />
            </div>
            <Fab />
        </main>
    )
}


export default IndexHome;

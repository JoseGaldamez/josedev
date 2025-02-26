import React from 'react'
import { Metadata } from 'next';
import { Header } from '@/components/v2/Header';
import { Hero } from '@/components/v2/Hero';
import { SocialLinks } from '@/components/v2/SocialLinks';
import { WorkExperience } from '@/components/v2/WorkExperience';
import { ProjectsSection } from '@/components/v2/Projects';

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
            <ProjectsSection />
            <div className='hidden md:block'>
                <SocialLinks />
            </div>
        </main>
    )
}


export default IndexHome;

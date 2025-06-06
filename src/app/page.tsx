import React from 'react'
import { Metadata } from 'next';
import { Header } from '@/components/v2/Header';
import { Hero } from '@/components/v2/Hero';
import { SocialLinks } from '@/components/v2/SocialLinks';
import { WorkExperience } from '@/components/v2/WorkExperience';
import { ProjectsSection } from '@/components/v2/Projects';
import { TechnologiesCarrucel } from '@/components';
import { Student } from '@/components/v2/Student';
import { Footer } from '@/components/v2/Footer';

export const metadata: Metadata = {
    title: 'Josá Galdámez | Fullstack Developer',
    description: 'Desarrollador de aplicaciones web y móviles',
    openGraph: {
        images: "https://josegaldamez.dev/jose-portada.png"
    }
}


const IndexHome = () => {
    return (
        <main className='min-h-screen hero text-white relative'>
            <Header />
            <Hero />
            <WorkExperience />
            <TechnologiesCarrucel />
            <ProjectsSection />
            <Student />

            <div className='hidden md:block'>
                <SocialLinks />
            </div>

            <Footer />
        </main>
    )
}


export default IndexHome;

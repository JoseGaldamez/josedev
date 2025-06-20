import React from 'react'
import { Metadata } from 'next';
import { Footer, Header, Hero, ProjectsSection, Student, WorkExperience, TechnologiesCarrucel } from '@/components/v3';
import ProjectsSectionModern from '@/components/v3/ProjectsModern';



export const metadata: Metadata = {
    title: 'Josá Galdámez | Fullstack Developer',
    description: 'Desarrollador de aplicaciones web y móviles',
    openGraph: {
        images: "https://josegaldamez.dev/jose-portada.png"
    }
}


const IndexHome = () => {
    return (
        <main className='min-h-screen'>
            <Header />
            <Hero />
            <WorkExperience />
            <TechnologiesCarrucel />
            <ProjectsSectionModern />
            <Student />
            <Footer />
        </main>
    )
}


export default IndexHome;

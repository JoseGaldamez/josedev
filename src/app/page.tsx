import React from 'react'
import { AboutDescription, TopHomeSection, IAQuestions, Experience, Projects } from '../components/sections';
import { Metadata } from 'next';
import { IconsList } from '@/components/common/icon_list/IconsList';

export const metadata: Metadata = {
    title: 'Josá Galdámez | Fullstack Developer',
    description: 'Desarrollador de aplicaciones web y móviles',
    openGraph: {
        images: [
            {
                url: './jose-portada.jpg',
                width: 800,
                height: 600,
                alt: 'Josá Galdámez | Fullstack Developer'
            }
        ]
    }
}


const IndexHome = () => {
    return (
        <main>
            <TopHomeSection />
            <AboutDescription />
            <IconsList />
            <IAQuestions />
            <Experience />
            <Projects />
        </main>
    )
}


export default IndexHome;

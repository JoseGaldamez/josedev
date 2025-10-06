import React from 'react'
import { Metadata } from 'next';
import { HeaderV4 } from '@/components/v4/Header';
import { HomeHeroV4 } from '@/components/v4/HomeHero';
import { BackgroundLetters } from '@/components/v4/BackgroundLetters';
import { AboutMe } from '@/components/v4/AboutMe';
import { FooterV4 } from '@/components/v4/FooterV4';
import { ExperienceSection } from '@/components/v4/ExperienceSection';

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
            <BackgroundLetters />
            <HeaderV4 />
            <HomeHeroV4 />
            <AboutMe />
            <ExperienceSection />
            <FooterV4 />
        </main>
    )
}

export default IndexHome;

import React from 'react'
import { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { Topbar } from '@/components/Topbar';
import { IconsBanner } from '@/components/IconsBanner';
import { SkillsSection } from '@/components/SkillsSection';
import { BlogHomeSection } from '@/components/BlogHomeSection';

export const metadata: Metadata = {
    title: 'José Galdámez | Fullstack Developer',
    description: 'Desarrollador de aplicaciones web y móviles',
    openGraph: {
        images: "https://josegaldamez.dev/jose-portada.png",
        title: 'José Galdámez | Fullstack Developer',
        description: 'Desarrollador de aplicaciones web y móviles',
    },
    alternates: {
        canonical: 'https://josegaldamez.dev',
    }
}

const IndexHome = () => {
    return (
        <>
            <Topbar />
            <main className='min-h-screen bg-black text-[#f2f2f2] transition-colors duration-500'>
                <HeroSection />
                <IconsBanner />
                <SkillsSection />
                <BlogHomeSection />
            </main>
        </>
    )
}

export default IndexHome;

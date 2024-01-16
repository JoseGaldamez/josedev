import Head from 'next/head'

import '../src/app/globals.css';
import { Navbar } from '@/components/common/Navbar/Navbar';
import { PrincipalSectionHome } from '@/components/sections/home/PrincipalSectionHome/PrincipalSectionHome';
import { AboutSectionHome } from '@/components/sections/home/AboutSectionHome/AboutSectionHome';
import { TechnologiesSectionHome } from '@/components/sections/home/TechnologiesSectionHome/TechnologiesSectionHome';
import { ChatMeSectionHome } from '@/components/sections/home/ChatMeSectionHome/ChatMeSectionHome';
import { BlogSectionHome } from '@/components/sections/home/BlogSectionHome/BlogSectionHome';

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Jose Galdamez | Fullstack Developer</title>
            </Head>
            <Navbar />
            <main>
                <PrincipalSectionHome />
                <AboutSectionHome />
                <TechnologiesSectionHome />
                <ChatMeSectionHome />

            </main>
        </>
    )
}

export default HomePage;

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
                <meta name="description"
                    content="Desarrollador de aplicaciones web y móviles"
                    key="desc" />
                <meta
                    property="og:image"
                    content="https://www.josegaldamez.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjose-galdamez.af98a70d.png&w=384&q=75"
                />
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

import React from 'react'

import '../../src/app/globals.css';
import Head from 'next/head';
import { Navbar } from '@/components/common/Navbar/Navbar';
import { AboutTopSection } from '@/components/sections/about/AboutTopSection/AboutTopSection';

export const AboutPage = () => {
    return (
        <>
            <Head>
                <title>Jose Galdamez | Acerca de mi</title>
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
                <AboutTopSection />
                <hr />
            </main>
        </>
    )
}

export default AboutPage;
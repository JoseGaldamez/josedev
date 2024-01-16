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
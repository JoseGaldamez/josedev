import React from 'react'
import Head from 'next/head';
import { Navbar } from '@/components/common/Navbar';

import '../../src/app/globals.css';


const AboutPage = () => {
    return (
        <>
            <Head>
                <title>Jose Galdamez | Sobre mi</title>
            </Head>
            <Navbar />
            <main>
                <h1>About</h1>
            </main>
        </>
    )
}


export default AboutPage;
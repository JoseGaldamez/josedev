import React from 'react'
import Head from 'next/head';
import { Navbar } from '@/components/common/Navbar';
import '../../src/app/globals.css';

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Jose Galdamez | Contacto</title>
            </Head>
            <Navbar />
            <main>
                <h1>Contact</h1>
            </main>
        </>
    )
}

export default ContactPage;
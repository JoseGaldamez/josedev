import React from 'react'
import Head from 'next/head';
import { Navbar } from '@/components/common/Navbar';
import '../../src/app/globals.css';

const ProjectsPage = () => {
    return (
        <>
            <Head>
                <title>Jose Galdamez | Proyectos</title>
            </Head>
            <Navbar />
            <main>
                <h1>Projects</h1>
            </main>
        </>
    )
}

export default ProjectsPage;
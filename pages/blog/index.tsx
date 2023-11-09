import React from 'react'

import '../../src/app/globals.css';
import Head from 'next/head';
import { Navbar } from '@/components/common/Navbar/Navbar';

export const BlogPage = () => {
    return (
        <>
            <Head>
                <title>Jose Galdamez | Blog</title>
            </Head>
            <Navbar />
            <main>

            </main>
        </>
    )
}

export default BlogPage;
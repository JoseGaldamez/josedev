import React from 'react'
import Head from 'next/head';
import { Navbar } from '@/components/common/Navbar';
import '../../src/app/globals.css';

const BlogPage = () => {
    return (
        <>
            <Head>
                <title>Jose Galdamez | Blog</title>
            </Head>
            <Navbar />
            <main>
                <h1>Blog</h1>
            </main>
        </>
    )
}

export default BlogPage;
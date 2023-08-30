import React from 'react'
import Head from 'next/head';
import { Navbar } from '@/components/common/Navbar';
import { BlogHome } from '@/components/sections/BlogHome';

import '../../src/app/globals.css';

const BlogPage = () => {
    return (
        <>
            <Head>
                <title>Jose Galdamez | Blog</title>
            </Head>
            <Navbar />
            <main>
                <BlogHome />
            </main>
        </>
    )
}

export default BlogPage;
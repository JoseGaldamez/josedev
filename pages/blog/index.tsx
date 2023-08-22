import React from 'react'
import Head from 'next/head';
import { Navbar } from '@/components/common/Navbar';
import '../../src/app/globals.css';
import { BlogHome } from '@/components/sections/BlogHome';

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
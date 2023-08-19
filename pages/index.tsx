import Head from 'next/head'
import { Navbar } from '@/components/common/Navbar'
import { BlogHome } from '@/components/sections/BlogHome'
import { TopHome } from '@/components/sections/TopHome'

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Jose Galdamez | Fullstack Developer</title>
            </Head>
            <Navbar />
            <main>
                <TopHome />
                <BlogHome />
            </main>
        </>
    )
}

export default HomePage;

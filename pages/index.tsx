import Head from 'next/head'
import { Navbar } from '@/components/common'
import { TopHome } from '@/components/sections/TopHome/TopHome'

import '../src/app/globals.css';
import { SecondHomeAbout } from '@/components/sections/SecondHome/SecondHome';

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Jose Galdamez | Fullstack Developer</title>
            </Head>
            <Navbar />
            <main>
                <TopHome />
                <SecondHomeAbout />
            </main>
        </>
    )
}

export default HomePage;

import Head from 'next/head'
import { Navbar } from '@/components/common'
import { TopHome } from '@/components/sections/TopHome/TopHome'
import { SecondHomeAbout } from '@/components/sections/SecondHome/SecondHome';
import { ProjectsHome } from '@/components/sections/ProjectsHome/ProjectsHome';

import '../src/app/globals.css';

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
                <ProjectsHome />
            </main>
        </>
    )
}

export default HomePage;

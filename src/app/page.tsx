import React from 'react'
import { AboutDescription, TopHomeSection } from '../components/sections';
import { Metadata } from 'next';
import { IconsList } from '@/components/common/icon_list/IconsList';
import { IAQuestions } from '@/components/sections/question/Questions';
import { Experience } from '@/components/sections/experience/Experience';

export const metadata: Metadata = {
    title: 'Josá Galdámez | Fullstack Developer',
    description: 'Desarrollador de aplicaciones web y móviles',

}


const IndexHome = () => {
    return (
        <main>
            <TopHomeSection />
            <AboutDescription />
            <IconsList />
            <IAQuestions />
            <Experience />
        </main>
    )
}


export default IndexHome;

import React from 'react'
import { AboutDescription, TopHomeSection } from '../components/sections';
import { Metadata } from 'next';
import { IconsList } from '@/components/common/icon_list/IconsList';

export const metadata: Metadata = {
    title: 'Josá Galdámez | Fullstack Developer',
    description: 'Desarrollador de aplicaciones web y móviles',
}


const IndexHome = () => {
    return (
        <div>
            <TopHomeSection />
            <AboutDescription />
            <IconsList />
        </div>
    )
}


export default IndexHome;

import React from 'react'
import { Projects } from './Projects'

export const ProjectSection = () => {
    return (
        <div>
            <div id="projects" className='mb-10 h-5'></div>
            <section className='max-w-6xl mx-auto bg-slate-100 rounded-lg'>
                <Projects />
            </section>
        </div>
    )
}

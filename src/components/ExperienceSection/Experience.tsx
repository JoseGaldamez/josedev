import { BriefcaseIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { ArticleExperience } from './ArticleExperience'
import { experienceInfo } from '@/utils/experienceInfo'


export const Experience = () => {
    return (
        <section className='mt-24 w-full px-2'>
            <h2 className='text-3xl font-bold tracking-wide flex items-center mb-10 text-gray-700'>
                <BriefcaseIcon className='w-8 h-8 mr-3' />
                <span className='pt-1'>Experiencia laboral</span></h2>
            <hr />

            <ul className='mt-10'>
                {
                    experienceInfo.map((work, index) => {
                        return <ArticleExperience key={index} work={work} />
                    })
                }
            </ul>

        </section>
    )
}

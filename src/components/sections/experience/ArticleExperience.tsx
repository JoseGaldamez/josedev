import { LinkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { TitleArticleExperience } from './TitleArticleExperience'
import { BadgeTimeExperience } from './BadgeTimeExperience'

interface IArticleExperience {
    place: string
    actual?: boolean
    position: string
    description: string
    sinceYear?: string
    toYear?: string
    link?: string
    tecnologies?: string[]
    lastItem?: boolean
}

interface IWork {
    work: IArticleExperience
}

export const ArticleExperience = ({ work }: IWork) => {
    return (
        <li>
            <article className={`w-full border-x-blue-500/20 border-l-4 pl-5 ${!work.lastItem ? 'pb-20' : 'pb-5'} relative`}>
                <span className="text-yellow-400 absolute rounded-full -left-4 -top-7 text-7xl">•</span>
                <header className='flex justify-between items-center -top-2 pt-1 relative'>
                    <TitleArticleExperience place={work.place} link={work.link} position={work.position} />
                    <BadgeTimeExperience actual={work.actual} sinceYear={work.sinceYear} toYear={work.toYear} />
                </header>
                <main className='mt-3 text-md text-gray-400 pr-5' dangerouslySetInnerHTML={{ __html: work.description }}>
                </main>
                {
                    work.tecnologies && (
                        <ul className='flex gap-2 mt-5 flex-wrap'>
                            {
                                work.tecnologies.map((tecnology, index) => {
                                    return <li key={index} className="inline-flex items-center rounded-md bg-blue-950/30 px-3 py-0 text-xs font-medium text-gray-200 ring-1 ring-inset ring-gray-500/10">
                                        <span className="text-blue-600 rounded-full text-xl mr-1">
                                            •
                                        </span>
                                        {tecnology}</li>
                                })
                            }
                        </ul>
                    )
                }
            </article>
        </li>
    )
}

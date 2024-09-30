import { LinkIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const TitleArticleExperience = ({ place, link, position }: { place: string, link?: string, position: string }) => {
    return (
        <div>
            <h3 className='text-2xl font-semibold flex flex-1 items-center'>
                {place}
                {
                    link && (
                        <a href={link} target='_blank' title={`Abrir sitio de trabajo: ${place}`}>
                            <LinkIcon className='w-4 h-4 ml-2' />
                        </a>
                    )
                }
            </h3>
            <p className='text-md text-gray-600'>
                {position}
            </p>
        </div>
    )
}

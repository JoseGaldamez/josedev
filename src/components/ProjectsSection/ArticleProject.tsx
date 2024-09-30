import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { ArrowTopRightOnSquareIcon, LinkIcon } from '@heroicons/react/24/outline'

// Icons
import Github from '@/icons/github.png';

interface IprojectProps {
    image: StaticImageData
    name: string,
    description: string
    url: string
    codeLink: string
    tecnologies: string[],
}

interface Iproject {
    project: IprojectProps
}

export const ArticleProject = ({ project }: Iproject) => {
    return (
        <li>

            <article className='flex flex-col sm:flex-row gap-4 items-center justify-between py-14 border-b-4 border-blue-900/20'>
                <figure className='w-full sm:w-2/5 rounded-xl overflow-hidden'>
                    <a href={project.url} target='_blank' title={'Abrir ' + project.name}>
                        <Image className='w-full opacity-90 cursor-pointer hover:opacity-100 hover:scale-110 transition-all' src={project.image} alt={project.name} />
                    </a>
                </figure>
                <div className='w-full sm:w-3/5 rounded-xl md:pl-10'>
                    <a href={project.url} target='_blank' title={'Abrir ' + project.name}>
                        <h3 className='text-2xl font-semibold tracking-wider flex items-center mb-2'>
                            <span className='hover:text-gray-900 text-gray-600 transition-colors border-b-2 border-b-transparent hover:border-blue-950'>
                                {project.name}
                            </span>
                            <LinkIcon className='w-4 h-4 ml-2' />
                        </h3>
                    </a>
                    <ul className='flex flex-wrap my-4 gap-2'>
                        {
                            project.tecnologies.map((tecnology, index) => {
                                return (
                                    <li key={index} className="inline-flex gap-1 items-center rounded-full bg-gray-700 border px-3 py-1 text-xs text-gray-200">
                                        {tecnology}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <p>
                        {
                            project.description
                        }
                    </p>
                    <div className='flex gap-2 flex-wrap mt-4'>
                        <a href={project.codeLink} target='_blank' title='Ver código fuente en Github' className='bg-blue-600 text-white py-2 px-4 mt-2 rounded-2xl opacity-80 hover:opacity-100 items-center flex border border-transparent hover:border-gray-500 transition-all'>
                            <Image src={Github} alt='github' className='w-5 h-5 mr-2' />
                            Ver código
                        </a>
                        <a href={project.url} target='_blank' title={'Abrir ' + project.name} className='bg-blue-600 text-white py-2 px-4 mt-2 rounded-2xl opacity-80 hover:opacity-100 items-center flex border border-transparent hover:border-gray-500 transition-all'>
                            Visitar
                            <ArrowTopRightOnSquareIcon className='w-5 h-5 ml-2' />
                        </a>
                    </div>
                </div>
            </article>
        </li>
    )
}

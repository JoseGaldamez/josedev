import { ArrowRightIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import { ArticleProject } from './ArticleProject'



export const Projects = () => {
    return (
        <section className='mt-36'>
            <h2 className='text-2xl font-bold tracking-wide flex items-center mb-5'>
                <CodeBracketIcon className='w-8 h-8 mr-3' />
                Proyectos
            </h2>

            <p className='text-gray-400'>
                Por motivos de confidencialidad no puedo compartir los proyectos que he desarrollado para clientes coorporativos. Pero aquí dejo algunos que si puedo mostrar.
            </p>

            <ul>
                <ArticleProject />
            </ul>

        </section>
    )
}

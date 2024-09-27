import React from 'react'
import { CodeBracketIcon } from '@heroicons/react/24/outline'
import { ArticleProject } from './ArticleProject'

import { projectsList } from '@/utils/projects'



export const Projects = () => {
    return (
        <div className='p-14'>
            <h2 className='text-2xl text-gray-600 font-bold tracking-wide flex items-center mb-5'>
                <CodeBracketIcon className='w-8 h-8 mr-3' />
                Proyectos
            </h2>
            <hr />

            <p className='text-gray-400 my-5'>
                Por motivos de confidencialidad no puedo compartir los proyectos que he desarrollado para clientes coorporativos como Walmart por ejemplo. Pero aquí dejo algunos que si puedo mostrar.
            </p>

            <ul>
                {
                    projectsList.map((project, index) => {
                        return <ArticleProject project={project} key={project.name} />
                    })
                }
            </ul>
        </div>
    )
}

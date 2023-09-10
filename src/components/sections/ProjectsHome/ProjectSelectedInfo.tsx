import { IProject } from '@/interface/project.interface'
import React from 'react'

import style from './ProjectsHome.module.css';
import Image from 'next/image';

interface PropProjectSelectedInfo {
    project?: IProject
}

export const ProjectSelectedInfo = ({ project }: PropProjectSelectedInfo) => {
    return (
        <div className={style.projectsDescription}>
            <div className={style.projectDescriptionImage}>
                {
                    (project !== undefined) ? <Image src={project?.image || ''} width={70} height={70} alt={project?.title || 'Project name'} /> : 'No image'
                }

            </div>
            <div>
                <h4>
                    {project?.title}
                </h4>
                <p>
                    {project?.description}
                </p>
                <div>
                    <h5 className='font-bold'>Tecnologías</h5>
                    <div className={style.listTecnologies}>
                        {
                            project?.tecnologies.map(tec => (
                                <span key={tec} >{tec}</span>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h5 className='font-bold'>Enlaces</h5>
                    <a href={project?.url} target='_blank'>Visitar sitio</a>
                </div>
            </div>
        </div>
    )
}

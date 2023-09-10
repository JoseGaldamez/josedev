import React from 'react'
import { IProject } from '@/interface/project.interface'

import style from './ProjectsHome.module.css';


interface PropsLeftListProjects {
    listOfProjects: IProject[],
    setselectedProject: (id: number) => void,
    selectedProject: number
}

export const LestListProjects = ({ listOfProjects, setselectedProject, selectedProject, }: PropsLeftListProjects) => {
    return (
        <div>
            <ul>
                {
                    listOfProjects.map(project => (
                        <li onClick={() => {
                            setselectedProject(project.id - 1);
                        }} key={project.id}
                            className={(project.id - 1) === selectedProject ? style.selectedProject : style.unselectedProject}>
                            <span className={style.numberProject}>{project.id}: </span> {project.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

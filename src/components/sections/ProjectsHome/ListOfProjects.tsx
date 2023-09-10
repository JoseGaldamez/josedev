import React, { useEffect, useState } from 'react'
import { IProject } from '@/interface/project.interface';
import { LestListProjects } from './LestListProjects';
import { listProjects } from '@/data/projects.data';

import style from './ProjectsHome.module.css';
import { ProjectSelectedInfo } from './ProjectSelectedInfo';

export const ListOfProjects = () => {

    const [selectedProject, setselectedProject] = useState(0)
    const [project, setProject] = useState<IProject>();

    if (typeof window !== "undefined") {
    }

    useEffect(() => {
        setProject(listProjects[selectedProject]);
    }, [selectedProject])
    return (
        <div>
            <div className={style.listOfProjectContainer}>
                <div className={style.projects}>
                    <LestListProjects
                        listOfProjects={listProjects}
                        setselectedProject={setselectedProject}
                        selectedProject={selectedProject} />
                </div>
                <ProjectSelectedInfo project={project} />
            </div>
            <div className={style.listOfProjectContainerMobile}>
                {
                    listProjects.map(projectcard => {
                        return <ProjectSelectedInfo key={projectcard.id} project={projectcard} />
                    })
                }
            </div>
        </div>
    )
}

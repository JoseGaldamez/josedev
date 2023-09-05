import React from 'react'
import style from './ProjectsHome.module.css';
import { ListOfProjects } from './ListOfProjects';

export const ProjectsHome = () => {
    return (
        <div className={style.projectsHomeSection}>
            <div className={style.container}>
                <h3 className={style.h3}>Algunos <strong>proyectos</strong> en que he colaborado</h3>
                <p>Con varios años trabajando como desarrollador, he hecho y colaborado en varios proyectos. Muchos de los proyectos donde he trabajado son privados y por confidencialidad no puedo compartir información sobre ellos.</p>
                <p>
                    Estos son algunos que si puedo compartir y otros personales:
                </p>
                <ListOfProjects />
            </div>
        </div>
    )
}

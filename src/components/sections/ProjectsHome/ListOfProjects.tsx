import React, { useState } from 'react'
import style from './ProjectsHome.module.css';

const listProjects = [
    {
        id: 1,
        name: "RP web",
        title: "Página web de Radio Progreso",
        description: "La página web de Radio Progreso está a mi cargo, soy quien se encarga de la administración y el mantenimiento del sitio web, así como cualquier cambio que se requiera.",
        url: "https://radioprogresohn.net",
        tecnologies: ['Wordpress', 'ReactJS', 'MySQL'],
        github: "https://github.com/"
    },
    {
        id: 2,
        name: "Radio Progreso Móvil",
        title: "Aplicación móvil de Radio Progreso",
        description: "La página web de Radio Progreso está a mi cargo, soy quien se encarga de la administración y el mantenimiento del sitio web, así como cualquier cambio que se requiera.",
        url: "https://play.google.com/store/apps/details?id=net.radioprogresohn.radioprogresoappoficial&hl=es_HN&gl=US&pli=1",
        tecnologies: ['Flutter', 'Firebase', 'ReactJS'],
        github: "https://github.com/JoseGaldamez/AndroidApp-RadioProgreso"
    },
    {
        id: 3,
        name: "Camila Viera App",
        title: "Camila Viera App",
        description: "La página web de Radio Progreso está a mi cargo, soy quien se encarga de la administración y el mantenimiento del sitio web, así como cualquier cambio que se requiera.",
        url: "https://play.google.com/store/apps/details?id=com.moka.camilleviera.camille_viera&hl=es_HN&gl=US",
        tecnologies: ['Flutter', 'Firebase', 'ReactJS'],
        github: ""
    },
    {
        id: 4,
        name: "CompressImages",
        title: "Aplicación Web para Comprimir Imágenes",
        description: "La página web de Radio Progreso está a mi cargo, soy quien se encarga de la administración y el mantenimiento del sitio web, así como cualquier cambio que se requiera.",
        url: "https://josegaldamez.github.io/compressor/",
        tecnologies: ['Flutter', 'Firebase', 'ReactJS'],
        github: "https://github.com/JoseGaldamez/AndroidApp-RadioProgreso"
    },
]

export const ListOfProjects = () => {

    const [selectedProject, setselectedProject] = useState(1)
    const [project, setProject] = useState({
        id: 1,
        name: "RP web",
        title: "Página web de Radio Progreso",
        description: "La página web de Radio Progreso está a mi cargo, soy quien se encarga de la administración y el mantenimiento del sitio web, así como cualquier cambio que se requiera.",
        url: "https://radioprogresohn.net",
        tecnologies: ['Wordpress', 'ReactJS', 'MySQL'],
        github: "https://github.com/"
    },)

    return (
        <div className={style.listOfProjectContainer}>
            <div className={style.projects}>
                <ul>
                    {
                        listProjects.map(project => (
                            <li onClick={() => {
                                setselectedProject(project.id);
                                setProject(project);
                            }} key={project.id}
                                className={project.id === selectedProject ? style.selectedProject : style.unselectedProject}>
                                <span className={style.numberProject}>{project.id}: </span> {project.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={style.projectsDescription}>
                <h4>
                    {project.title}
                </h4>
                <p>
                    {project.description}
                </p>
                <div>
                    <h5 className='font-bold'>Tecnologías</h5>
                    <div className={style.listTecnologies}>
                        {
                            project.tecnologies.map(tec => (
                                <span key={tec} >{tec}</span>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h5 className='font-bold'>Enlaces</h5>
                    <a href={project.url} target='_blank'>Visitar sitio</a>
                </div>
            </div>
        </div>
    )
}

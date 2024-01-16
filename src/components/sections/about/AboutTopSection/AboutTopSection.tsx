import React from 'react'
import Image from 'next/image';

import JoseGaldamezImage from '@/assets/jose-galdamez.png'
import styles from './AboutTopSection.module.css';
import { IconsList } from '../../home/PrincipalSectionHome/IconsList/IconsList';

export const AboutTopSection = () => {
    return (
        <div className={styles.aboutTopSection}>
            <div className={styles.aboutTopSectionLeftImage}>
                <Image src={JoseGaldamezImage} alt='Jose Galdamez' width={250} height={250} />
                <IconsList />
            </div>
            <div className={styles.aboutTopSectionRigthInfo}>
                <h2 className={styles.aboutTopSectionH2}>
                    José Galdámez
                </h2>
                <h3 className={styles.aboutTopSectionH3}>Desarrollador Fullstack</h3>

                <p>
                    Para resumir, podríamos decir que soy el típico nerd. Desde el momento que use una computadora por primera vez, supe a qué me quería dedicar. Crear aplicaciones es lo que me gusta hacer y no quiero sonar presumido, pero creo que soy bueno haciéndolo.
                </p>
                <p>
                    Actualmente trabajo como Desarrollador de Software Fullstack en <a href="https://stefanini.com/es" target='_blank' >Stefanini Group</a>, todo de forma completamente remota. En mi día a día utilizamos metodologías ágiles, especificamente Scrum. Desarrollamos aplicaciones web utilizando <strong>React JS</strong>, <strong>Node JS</strong>, todo escrito con <strong>TypeScript</strong> y manejando las versiones con <strong>Github</strong>.
                </p>
            </div>
        </div>
    )
}

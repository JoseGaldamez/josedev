import React from 'react'

import styles from './AboutSectionHome.module.css';
import Link from 'next/link';

export const AboutSectionHome = () => {
    return (
        <>
            <section className={styles.aboutSection}>
                <div className={styles.aboutContent}>
                    <div>
                        <h2 className='h2 text-white'>Acerca de</h2>
                        <div className='line line-white'></div>
                        <p>
                            Desarrollador de Software con experiencia en desarrollo de aplicaciones web y móviles usando tecnologías modernas y metodología ágiles. Convertir una idea en una aplicaciones que permite solucionar problemas es mi pasión.
                        </p>
                        <div className={styles.buttonsAbout}>
                            <Link href={'/information'} className={styles.buttonWhite + ' ' + styles.button}>Descargar currículum</Link>
                            <Link href={'/information'} className={styles.buttonYellow + ' ' + styles.button}>Más información</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

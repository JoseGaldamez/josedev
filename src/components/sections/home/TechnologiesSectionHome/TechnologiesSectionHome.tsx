import React from 'react'

import styles from './TechnologiesSectionHome.module.css'
import { IconsTechologiesList } from './IconsTechnologiesList/IconsTechologiesList';
import Link from 'next/link';

export const TechnologiesSectionHome = () => {
    return (
        <section>
            <div className={styles.technologiesSection}>
                <h2 className='h2 text-white'>
                    Tecnologías
                </h2>
                <div className='line line-white'></div>
                <p>
                    Entre las tecnologías y lenguajes que manejo están:
                </p>
                <IconsTechologiesList />
                <div>
                    <Link href={'/'} className={styles.buttonViewMore} >Ver más</Link>
                </div>
            </div>
        </section>
    )
}

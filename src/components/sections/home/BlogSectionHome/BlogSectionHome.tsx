import React from 'react'

import styles from './BlogSectionHome.module.css'
import { BlogList } from './BlogList/BlogList';
import Link from 'next/link';

export const BlogSectionHome = () => {
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
                <BlogList />
                <div>
                    <Link href={'/'} className={styles.buttonViewMore} >Más artículos</Link>
                </div>
            </div>
        </section>
    )
}

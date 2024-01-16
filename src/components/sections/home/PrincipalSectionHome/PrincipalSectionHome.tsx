import React from 'react'
import Image from 'next/image';

import styles from './PrincipalSectionHome.module.css';

import JoseGaldamezImage from '@/assets/jose-galdamez.png'

import { IconsList } from './IconsList/IconsList';

export const PrincipalSectionHome = () => {
    return (
        <section className={styles.principalHomeSection}>
            <div className={styles.leftSectionText}>
                <div className={styles.leftSectionImage}>
                    <div></div>
                    <Image src={JoseGaldamezImage} alt='Jose Galdamez' width={200} height={200} />
                </div>
                <div>
                    <h1 className={styles.titleH1}>José Galdámez</h1>
                    <h2 className={styles.titleH2}>Desarrollador Fullstack</h2>
                </div>
                <IconsList />

            </div>
            <div className={styles.rightSectionImage}>
                <div></div>
                <Image src={JoseGaldamezImage} alt='Jose Galdamez' width={350} height={350} />
            </div>
        </section>
    )
}

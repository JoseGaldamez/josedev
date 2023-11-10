import React from 'react'

import styles from './ChatMeSectionHome.module.css';
import Link from 'next/link';

export const ChatMeSectionHome = () => {
    return (
        <section className={styles.chatMeSection}>
            <div>
                <h2 className='h2'>
                    ¿Quieres charlar conmigo?
                </h2>
                <div>
                    <div className={styles.buttonsList}>
                        <Link href={'/information'} className={styles.buttonDark + ' ' + styles.button}>Enviar mensaje</Link>
                        <Link href={'/information'} className={styles.buttonYellow + ' ' + styles.button}>Correo electrónico</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

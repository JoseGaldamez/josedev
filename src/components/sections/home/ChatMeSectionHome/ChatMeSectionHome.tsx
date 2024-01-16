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
                        <Link href={'https://api.whatsapp.com/send?phone=50431751455&text=Hola%20Jos%C3%A9...%20'} className={styles.buttonDark + ' ' + styles.button} target='_blank'>Enviar mensaje</Link>
                        <Link href={'mailto:josegaldamez1991@gmail.com?subject=Desde%20tu%20web&body=Hola%20Jos%C3%A9...'} className={styles.buttonYellow + ' ' + styles.button}>Correo electrónico</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import { useRouter } from 'next/navigation';

import style from './TopHome.module.css';
import { ButtonPrincipal } from '@/components/common/ButtonPrincipal/ButtonPrincipal';

export const TopHome = () => {

    const router = useRouter();

    const handleClickContact = () => {
        router.push('/contact');
    }

    return (
        <div className={style.topSection}>
            <div className={style.topSectionContainer}>
                <div className={style.topLeftSection}>
                    <h1 className={style.h1}>José Galdámez</h1>
                    <h2 className={style.h2}>Desarrollador Fullstack</h2>
                    <div className={style.line}></div>
                    <p className={style.paragraph}>
                        Con conocimientos avanzados en desarrollo de aplicaciones web y móviles. Especializado en <strong>NodeJS</strong>, <strong>ReactJS</strong> y <strong>Flutter</strong>.
                    </p>
                    <div className={style.buttons}>
                        <ButtonPrincipal handleClick={handleClickContact} text='Contactar' />
                        <a className='px-4' href='/files/JoseGaldamez_CV.pdf' download="JoseGaldamez_CV" target='_blank' rel='noopener noreferrer'>
                            <button className={style.buttonSecondary}>Descargar CV</button>
                        </a>
                    </div>
                </div>
                <div className={style.topRightSection}>
                    <img className={style.imageTopSection} src="https://img.freepik.com/vector-premium/codificador-programador-concentrado-proyecto-trabajo-desarrollo-tecnologias-programacion-codificacion_569013-338.jpg?w=2000" alt="Programador test" />
                </div>
            </div>

        </div>
    )
}

import React from 'react';

import style from './SecondHome.module.css';
import { ListIcons } from './ListIcons';
import { ButtonPrincipal } from '@/components/common/ButtonPrincipal/ButtonPrincipal';
import { useRouter } from 'next/router';

export const SecondHomeAbout = () => {

    const router = useRouter();

    const handleClickAbout = () => {
        router.push('/about');
    }

    return (
        <div className={style.secondHome}>
            <div className={style.secondSectionContainer}>
                <h3 className={style.h3}>
                    Un poco sobre mi...
                </h3>
                <p>
                    Programador hondureño, estudiante eterno de desarrollo de software.

                    Como desarrollador de software, ver como una idea toma forma y se mejora poco a poco, es lo que me gusta hacer. Las siguientes son algunas de las herramientas que sé utilizar:
                </p>

                <ListIcons />

                <div className={style.moreAboutMe}>
                    <ButtonPrincipal handleClick={handleClickAbout} text='Más acerca de mi' />
                </div>
            </div>
        </div>
    )
}

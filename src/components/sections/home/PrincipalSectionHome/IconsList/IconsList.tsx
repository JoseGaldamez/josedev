import React from 'react'
import Link from 'next/link';

import Image from 'next/image';

import Github from '@/icons/github.png';
import Facebook from '@/icons/facebook.png';
import Youtube from '@/icons/youtube.png';
import Linkedin from '@/icons/linkedin.png';

import styles from '../PrincipalSectionHome.module.css';

const listIcons = [
    {
        url: "https://github.com/JoseGaldamez",
        alt: "Github",
        image: Github
    },
    {
        url: "https://www.facebook.com/josegaldamezdev/",
        alt: "Facebook",
        image: Facebook
    },
    {
        url: "https://www.youtube.com/codigocorrecto",
        alt: "Youtube",
        image: Youtube
    },
    {
        url: "https://www.linkedin.com/in/josegaldamezdev/",
        alt: "LinkedIn",
        image: Linkedin
    },
]

export const IconsList = () => {
    return (
        <div className={styles.iconsNetwork}>

            {listIcons.map((icon, index) => {
                return <Link key={index} href={icon.url} target='_blank' >
                    <Image src={icon.image} width={30} height={30} alt={icon.alt} />
                </Link>
            })}

        </div>
    )
}

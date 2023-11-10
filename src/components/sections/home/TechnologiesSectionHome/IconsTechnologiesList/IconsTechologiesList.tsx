import React from 'react'
import Image from 'next/image'

import styles from '../TechnologiesSectionHome.module.css'

import ReactJSIcon from '@/icons/React-icon.png'
import NodeJSIcon from '@/icons/node-js-icon.png'
import FlutterIcon from '@/icons/flutter_icon.png'
import NextJSIcon from '@/icons/next-js-icon.png'
import GoIcon from '@/icons/go-icon.png'
import DockerIcon from '@/icons/docker-icon.png'
import FirebaseIcon from '@/icons/firebase-icon.png'
import NestJSIcon from '@/icons/nestjs-icon.png'

const iconsTechnologies = [
    {
        alt: "React JS",
        image: ReactJSIcon
    },
    {
        alt: "Node JS",
        image: NodeJSIcon
    },
    {
        alt: "Flutter",
        image: FlutterIcon
    },
    {
        alt: "Next JS",
        image: NextJSIcon
    },
    {
        alt: "Golang",
        image: GoIcon
    },
    {
        alt: "Docker",
        image: DockerIcon
    },
    {
        alt: "Firebase",
        image: FirebaseIcon
    },
    {
        alt: "Nest JS",
        image: NestJSIcon
    },
]

export const IconsTechologiesList = () => {
    return (
        <div className={styles.listIconsTechnologies}>
            {
                iconsTechnologies.map((icon, index) => {
                    return <Image src={icon.image} alt={icon.alt} key={index} width={100} height={100} />
                })
            }
        </div>
    )
}

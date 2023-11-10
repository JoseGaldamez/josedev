import React from 'react'
import Image from 'next/image'

import styles from '../BlogSectionHome.module.css'

import ReactJSIcon from '@/icons/React-icon.png'
import NodeJSIcon from '@/icons/node-js-icon.png'
import FlutterIcon from '@/icons/flutter_icon.png'


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
    }
]

export const BlogList = () => {
    return (
        <div className={styles.listIconsTechnologies}>
            {
                iconsTechnologies.map((icon, index) => {
                    return <div className={styles.article}></div>
                })
            }
        </div>
    )
}

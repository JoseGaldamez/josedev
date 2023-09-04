import React from 'react';
import Image from 'next/image';
import AngularIcon from '../../../icons/angular-icon.png';
import ReactIcon from '../../../icons/React-icon.png';
import NodeIcon from '../../../icons/node-js-icon.png';
import Flutter from '../../../icons/flutter_icon.png';
import DockerIcon from '../../../icons/docker-icon.png';
import NextJSIcon from '../../../icons/next-js-icon.png';
import NestIcon from '../../../icons/nestjs-icon.png';
import TypescriptIcon from '../../../icons/typescript_icon.png';
import FirebaseIcon from '../../../icons/firebase-icon.png';
import ReduxIcon from '../../../icons/redux-icon.png';
import GithubIcon from '../../../icons/github-icon.png';
import MongoIcon from '../../../icons/mongo-icon.png';

import style from './SecondHome.module.css'

export const ListIcons = () => {
    return (
        <div className={style.secondImagenIcons}>
            <div className={style.row}>
                <div>
                    <Image src={ReactIcon} alt="React JS" />
                </div>
                <div>
                    <Image src={NodeIcon} alt="Angular" />
                </div>
                <div>
                    <Image src={Flutter} alt="React JS" />
                </div>
                <div>
                    <Image src={NextJSIcon} alt="Angular" />
                </div>
                <div>
                    <Image src={AngularIcon} alt="Angular" />
                </div>
                <div>
                    <Image src={MongoIcon} alt="Angular" />
                </div>
                <div>
                    <Image src={DockerIcon} alt="React JS" />
                </div>
                <div>
                    <Image src={TypescriptIcon} alt="Angular" />
                </div>
                <div>
                    <Image src={NestIcon} alt="React JS" />
                </div>
                <div>
                    <Image src={FirebaseIcon} alt="Angular" />
                </div>
                <div>
                    <Image src={ReduxIcon} alt="Angular" />
                </div>
                <div>
                    <Image src={GithubIcon} alt="React JS" />
                </div>
            </div>
        </div>
    )
}

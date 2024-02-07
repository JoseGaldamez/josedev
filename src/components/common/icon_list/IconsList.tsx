import React from 'react'
import Link from 'next/link';

import Image from 'next/image';

import Github from '@/icons/github.png';
import Facebook from '@/icons/facebook.png';
import Youtube from '@/icons/youtube.png';
import Linkedin from '@/icons/linkedin.png';

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
        <div className='flex gap-5 my-16'>

            {listIcons.map((icon, index) => {
                return <Link key={index} href={icon.url} target='_blank' >
                    <Image className='opacity-40 w-auto h-auto hover:opacity-100 transition-opacity' src={icon.image} width={30} height={30} alt={icon.alt} />
                </Link>
            })}

        </div>
    )
}

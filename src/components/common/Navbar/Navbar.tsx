import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { ItemMenu } from '../ItemMenu/ItemMenu';
import LogoJG from '@/assets/logo-jg.png'

import style from './topnav.module.css';

const navigation = [
    { name: 'Trabajo', href: '/work' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Artículos', href: '/blog' },
    { name: 'Contacto', href: '/contact' }
]


export const Navbar = () => {
    const { pathname } = useRouter()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className={style.topNavPrincipal}>
            <div className={style.topNavPrincipalContainer}>
                <div>
                    <Link href={"/"}>
                        <Image src={LogoJG} width={40} height={40} alt='Logo Jose Galdamez' priority />
                    </Link>

                </div>
                <div className={style.menu}>
                    {
                        navigation.map((item) => {
                            return <ItemMenu
                                key={item.href}
                                name={item.name}
                                href={item.href} isSelected={item.href === pathname} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

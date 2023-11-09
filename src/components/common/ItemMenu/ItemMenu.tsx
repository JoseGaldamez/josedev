
import React from 'react'
import style from './itemMenu.module.css';
import Link from 'next/link';
import { IItemMenu } from './interface';

export const ItemMenu = ({ name, href, isSelected }: IItemMenu) => {

    const getClasses = () => {
        if (isSelected) {
            return style.itemMenu + " " + style.itemMenuSelected;
        }
        return style.itemMenu;
    }

    return (
        <Link href={href} className={getClasses()} >
            {name}
        </Link>
    )
}

import React from 'react'
import style from './ButtonPrincipal.module.css';

interface propsButtonPrincipal {
    text: string;
    handleClick: () => void
}

export const ButtonPrincipal = ({ text, handleClick }: propsButtonPrincipal) => {
    return (
        <button onClick={handleClick} className={style.buttonPrincipal}>{text}</button>
    )
}

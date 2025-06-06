'use client';
import { CopyIcon } from 'lucide-react';
import React, { useState } from 'react'

export const CopyCoursesCupon = () => {

    const [copied, setcopied] = useState(false)

    const copyToClipboard = () => {
        const couponCode = "JUNIO2025";
        navigator.clipboard.writeText(couponCode)
            .then(() => {
                setcopied(true);
            })
            .catch(err => {
                console.error("Error al copiar el cupón: ", err);
            });
    }

    return (
        <span onClick={copyToClipboard} className="cursor-pointer text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-2">
            <CopyIcon className="h-5 w-5" />
            {copied ? "Copiado!" : "Copiar"}
        </span>
    )
}

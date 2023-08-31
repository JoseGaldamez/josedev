import React from 'react'
import '../../app/css/sections.css';
import { SVGBackPhoto } from '../common/SVGBackPhoto';

export const TopHome = () => {
    return (
        <div className="top-section">

            <div className='flex'>

                <div className='w-1/2 left-section-top'>
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                        Desarrollador Fullstack
                    </h1>
                    <p>
                        
                    </p>
                </div>
                <div className='w-1/2 right-section-top'>
                    <SVGBackPhoto />
                </div>

            </div>

        </div>
    )
}

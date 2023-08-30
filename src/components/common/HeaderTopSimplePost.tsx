import React from 'react'

interface PropsHeaderSimplePost {
    title: string
}

export const HeaderTopSimplePost = ({ title }: PropsHeaderSimplePost) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

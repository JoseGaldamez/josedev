import React from 'react'

interface MetaDataSimplePostProps {
    date: string,
    category: string,
    author: string
}

export const MetaDataSimplePost = ({ date, category, author }: MetaDataSimplePostProps) => {
    return (
        <div className='meta-simple-post'> {date} | {category} | {author} </div>
    )
}

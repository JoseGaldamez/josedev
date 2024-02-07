import React from 'react'

export const BadgeTimeExperience = ({ actual, sinceYear, toYear }: { actual?: boolean, sinceYear?: string, toYear?: string }) => {
    return (
        <div>
            {
                actual && (
                    <span className="inline-flex items-center rounded-full border-x-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200 ring-1 ring-inset ring-blue-600/20">Actual</span>
                )
            }
            {
                (sinceYear || toYear) && (
                    <span className="inline-flex min-w-max items-center rounded-full border-x-gray-500/20 px-4 py-2 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-600/20">{sinceYear} - {toYear} </span>
                )
            }
        </div>
    )
}

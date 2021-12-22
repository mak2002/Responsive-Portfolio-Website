import React from 'react'

export default function About({ description }) {
    return (
        <div className="dark:text-white dark:bg-dark1 h-screen whitespace-normal mt-10 w-full md:mx-auto w-3/6">
            <p className="text-2xl">{description}</p>
        </div>
    )
}

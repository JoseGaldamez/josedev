import React from 'react'

export const TopHome = () => {
    return (
        <div className="relative isolate px-6 lg:px-8">

            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(10%-1rem)] aspect-[1155/1078] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f769a4] to-[#4cedf0] opacity-30 sm:left-[calc(50%-1rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-32">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        ¿Quieres conversar sobre tu proyecto? <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Contáctame <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-14">
                        Jose Galdamez
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Desarrollador fullstack, especializado en <strong>ReactJS, NextJS y Angular</strong> para el frontend, <strong>NodeJS y Golang</strong> en el backend y <strong>Flutter</strong> para creación de aplicaciones móviles.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sobre mi
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Contactar <span aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div>

            <div className='animate-bounce rounded-full border pt-3 text-center mx-auto w-12 h-12'>

                <svg className="w-6 h-6 text-violet-500 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>

        </div>
    )
}

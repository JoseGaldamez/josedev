import React from 'react';

const listOfTechnologies = [
    {
        name: "Flutter",
        image: "/flutter.png"
    },
    {
        name: "ReactJS",
        image: "/react.png"
    },
    {
        name: "Angular",
        image: "/angular.png"
    },
    {
        name: "docker",
        image: "/docker.png"
    },
    {
        name: "Github",
        image: "/github.png"
    },
    {
        name: "Golang",
        image: "/golang.png"
    },
    {
        name: "Kotlin",
        image: "/kotlin.png"
    },
    {
        name: "NestJS",
        image: "/nestjs.png"
    },
    {
        name: "NextJS",
        image: "/nextjs.png"
    },
    {
        name: "NodeJS",
        image: "/nodejs.png"
    },
    {
        name: "Typescript",
        image: "/typescript.png"
    },
    {
        name: "Javascript",
        image: "/javacript.png"
    },
    {
        name: "Flutter",
        image: "/flutter.png"
    },
    {
        name: "ReactJS",
        image: "/react.png"
    },
    {
        name: "Angular",
        image: "/angular.png"
    },
    {
        name: "docker",
        image: "/docker.png"
    },
    {
        name: "Github",
        image: "/github.png"
    },
    {
        name: "Golang",
        image: "/golang.png"
    },
    {
        name: "Kotlin",
        image: "/kotlin.png"
    },
    {
        name: "NestJS",
        image: "/nestjs.png"
    },
    {
        name: "NextJS",
        image: "/nextjs.png"
    },
    {
        name: "NodeJS",
        image: "/nodejs.png"
    },
    {
        name: "Typescript",
        image: "/typescript.png"
    },
    {
        name: "Javascript",
        image: "/javacript.png"
    },
    {
        name: "Flutter",
        image: "/flutter.png"
    },
    {
        name: "ReactJS",
        image: "/react.png"
    },
    {
        name: "Angular",
        image: "/angular.png"
    },
    {
        name: "docker",
        image: "/docker.png"
    },
    {
        name: "Github",
        image: "/github.png"
    },
    {
        name: "Golang",
        image: "/golang.png"
    },
    {
        name: "Kotlin",
        image: "/kotlin.png"
    },
    {
        name: "NestJS",
        image: "/nestjs.png"
    },
    {
        name: "NextJS",
        image: "/nextjs.png"
    },
    {
        name: "NodeJS",
        image: "/nodejs.png"
    },
    {
        name: "Typescript",
        image: "/typescript.png"
    },
    {
        name: "Javascript",
        image: "/javacript.png"
    },
    {
        name: "Flutter",
        image: "/flutter.png"
    },
    {
        name: "ReactJS",
        image: "/react.png"
    },
    {
        name: "Angular",
        image: "/angular.png"
    },
    {
        name: "docker",
        image: "/docker.png"
    },
    {
        name: "Github",
        image: "/github.png"
    },
    {
        name: "Golang",
        image: "/golang.png"
    },
    {
        name: "Kotlin",
        image: "/kotlin.png"
    },
    {
        name: "NestJS",
        image: "/nestjs.png"
    },
    {
        name: "NextJS",
        image: "/nextjs.png"
    },
    {
        name: "NodeJS",
        image: "/nodejs.png"
    },
    {
        name: "Typescript",
        image: "/typescript.png"
    },
    {
        name: "Javascript",
        image: "/javacript.png"
    },
    {
        name: "Flutter",
        image: "/flutter.png"
    },
    {
        name: "ReactJS",
        image: "/react.png"
    },
    {
        name: "Angular",
        image: "/angular.png"
    },
    {
        name: "docker",
        image: "/docker.png"
    },
    {
        name: "Github",
        image: "/github.png"
    },
    {
        name: "Golang",
        image: "/golang.png"
    },
    {
        name: "Kotlin",
        image: "/kotlin.png"
    },
    {
        name: "NestJS",
        image: "/nestjs.png"
    },
    {
        name: "NextJS",
        image: "/nextjs.png"
    },
    {
        name: "NodeJS",
        image: "/nodejs.png"
    },
    {
        name: "Typescript",
        image: "/typescript.png"
    },
    {
        name: "Javascript",
        image: "/javacript.png"
    },
    {
        name: "Flutter",
        image: "/flutter.png"
    },
    {
        name: "ReactJS",
        image: "/react.png"
    },
    {
        name: "Angular",
        image: "/angular.png"
    },
    {
        name: "docker",
        image: "/docker.png"
    },
    {
        name: "Github",
        image: "/github.png"
    },
    {
        name: "Golang",
        image: "/golang.png"
    },
    {
        name: "Kotlin",
        image: "/kotlin.png"
    },
    {
        name: "NestJS",
        image: "/nestjs.png"
    },
    {
        name: "NextJS",
        image: "/nextjs.png"
    },
    {
        name: "NodeJS",
        image: "/nodejs.png"
    },
    {
        name: "Typescript",
        image: "/typescript.png"
    },
    {
        name: "Javascript",
        image: "/javacript.png"
    },
]

export const TechnologiesCarrucel = () => {
    return (
        <div className='w-full m-auto mt-10 2xl:mt-20 flex overflow-x-hidden bg-[#14426d] bg-opacity-10 py-10'>
            <div className='flex tecnologies-carrucel'>
                {
                    listOfTechnologies.map((technology, index) => {
                        return (
                            <article key={technology.name + index} className='w-20 lg:w-32 2xl:w-36 mx-14'>
                                <img className='w-full opacity-60 transition-all hover:opacity-100 hover:scale-125' src={technology.image} alt={technology.name} />
                            </article>
                        );
                    })
                }
            </div>
        </div>
    )
}

import { coursesData } from '@/data/courses.data';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import React from 'react';

const CoursesPage = () => {
    return (
        <>
            <main className="max-w-5xl m-auto p-5">
                <h1 className="mt-10 md:mt-15 text-3xl py-5 font-bold">Mis cursos</h1>
                <p className="text-xl font-light">Artículos sobre tecnología y programación que te ayudarán a aprender algo nuevo o simplemente para informarte de la actualidad en el munto de la web.</p>
                <hr className="my-5" />
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {coursesData.map((course, index) => (
                        <article key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                            <div className="p-5">
                                <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
                                <p className="text-gray-400 text-md">{course.description}</p>
                                <a href={course.url} target="_blank" className="flex flex-col justify-center bg-purple-800 hover:bg-purple-900 text-white px-2 py-2 rounded-lg mt-3 text-center">
                                    <span className='flex items-center justify-center text-lg font-bold'>
                                        Ver en Udemy <ArrowTopRightOnSquareIcon className='h-5 w-5 text-gray-100 ml-2 font-black' />
                                    </span>
                                    <span className='font-thin'>
                                        (con cupón de descuento)
                                    </span>
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </>
    );
}

export default CoursesPage;

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface ListCoursesProps {
    courses: CourseModel[]
}


export const ListOfCourses = ({ courses }: ListCoursesProps) => {

    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {
                courses.length === 0 && (
                    <div>
                        No hay cursos actualmente
                    </div>
                )
            }

            {courses.map((course, index) => (
                <article key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <Image width={500} height={500} src={course.image} alt={course.title} className="w-full" />
                    <div className="p-5">
                        <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
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
    )
}

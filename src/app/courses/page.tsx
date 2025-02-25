import React from 'react';
import { ListOfCourses } from '@/components/ListOfCourses/ListOfCourses';
import { getAllCourses } from '@/server/courses.actions';

const CoursesPage = async () => {

    const resultJson = await getAllCourses();

    const listOfElements = Object.keys(resultJson);
    const coursesData: CourseModel[] = [];

    listOfElements.forEach((course: any) => {
        const currentCourse = resultJson[course];

        coursesData.push({
            title: currentCourse.title,
            description: currentCourse.description,
            image: currentCourse.image,
            url: currentCourse.url
        })
    })

    return (
        <>
            <main className="max-w-5xl m-auto p-5">
                <h1 className="mt-10 md:mt-15 text-3xl py-5 font-bold">Mis cursos</h1>
                <p className="text-xl font-light">Si quieres aprender a programar puedes hacerlo con los cursos que he creado para ti. Están pensados para que sean fáciles de seguir y que sea fácil de comprender los conceptos.</p>
                <hr className="my-5" />
                <ListOfCourses courses={coursesData} />
            </main>
        </>
    );
}

export default CoursesPage;

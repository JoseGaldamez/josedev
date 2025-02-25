"use server";

export const getAllCourses = async () => {
    const courses = await fetch(
        "https://josedev-website-default-rtdb.firebaseio.com/courses.json"
    );
    const coursesJson = await courses.json();

    return coursesJson;
};

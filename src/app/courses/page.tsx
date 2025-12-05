import { Topbar } from "@/components/Topbar";
import { CourseCard } from "@/components/courses/CourseCard";
import { udemyCourses, youtubeCourses } from "@/data/courses";

export default function CoursesPage() {
    return (
        <>
            <Topbar />
            <main className='min-h-screen bg-black text-[#f2f2f2] transition-colors duration-500'>
                <div className="max-w-6xl mx-auto px-4 py-24">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Cursos de Desarrollo Web
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                            Aprende las tecnologías más demandadas con cursos prácticos y actualizados
                        </p>
                        <hr className="border-zinc-700 my-8" />
                    </div>

                    {/* Udemy Courses Section */}
                    <section className="mb-20">
                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3">
                                Cursos Premium en Udemy
                            </h2>
                            <p className="text-zinc-400 text-lg">
                                Cursos completos con certificado y cupones de descuento especiales
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {udemyCourses.map((course) => (
                                <CourseCard
                                    key={course.id}
                                    title={course.title}
                                    description={course.description}
                                    image={course.image}
                                    link={course.udemyLink}
                                    isExternal={true}
                                    price={course.price}
                                    discount={course.discount}
                                    level={course.level}
                                    duration={course.duration}
                                />
                            ))}
                        </div>
                    </section>

                    {/* YouTube Courses Section */}
                    {/* <section>
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
                                <span className="text-red-500">🎥</span>
                                Cursos Gratuitos en YouTube
                            </h2>
                            <p className="text-zinc-400 text-lg">
                                Aprende gratis con tutoriales completos en video
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {youtubeCourses.map((course) => (
                                <CourseCard
                                    key={course.id}
                                    title={course.title}
                                    description={course.description}
                                    image={course.image}
                                    link={`/courses/${course.slug}`}
                                    isExternal={false}
                                    level={course.level}
                                    duration={course.duration}
                                />
                            ))}
                        </div>
                    </section> */}
                </div>
            </main>
        </>
    );
}
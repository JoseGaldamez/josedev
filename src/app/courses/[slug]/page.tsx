import { Topbar } from "@/components/Topbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { youtubeCourses } from "@/data/courses";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CourseDetailPageProps {
  params: {
    slug: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = youtubeCourses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  // Aquí puedes agregar más detalles del curso, videos, etc.
  const courseModules = [
    {
      title: "Módulo 1: Introducción",
      duration: "1 hora",
      lessons: 5,
    },
    {
      title: "Módulo 2: Conceptos Fundamentales",
      duration: "2 horas",
      lessons: 8,
    },
    {
      title: "Módulo 3: Práctica y Proyectos",
      duration: "3 horas",
      lessons: 12,
    },
  ];

  return (
    <>
      <Topbar />
      <main className="min-h-screen bg-black text-[#f2f2f2]">
        <div className="container mx-auto px-4 py-24">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/courses" className="text-zinc-400 hover:text-white transition-colors">
              ← Volver a cursos
            </Link>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <Badge className="mb-4 bg-red-600 hover:bg-red-700">
                Curso Gratuito
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {course.title}
              </h1>
              <p className="text-xl text-zinc-400 mb-6">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-sm py-2 px-4">
                  📚 {course.level}
                </Badge>
                <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-sm py-2 px-4">
                  ⏱️ {course.duration}
                </Badge>
                <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-sm py-2 px-4">
                  🎥 YouTube
                </Badge>
              </div>

              <div className="flex gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                  Comenzar curso
                </Button>
                <Button variant="outline" className="border-zinc-700 text-zinc-400 hover:bg-zinc-900 px-8 py-6 text-lg">
                  Ver demo
                </Button>
              </div>
            </div>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Course Content */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Contenido del Curso</h2>
            <div className="space-y-4">
              {courseModules.map((module, index) => (
                <Card
                  key={index}
                  className="bg-zinc-900 border-zinc-800 p-6 hover:border-zinc-700 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {module.title}
                      </h3>
                      <p className="text-zinc-400">
                        {module.lessons} lecciones
                      </p>
                    </div>
                    <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                      {module.duration}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* What you'll learn */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Lo que aprenderás</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Fundamentos sólidos de la tecnología",
                "Mejores prácticas de desarrollo",
                "Proyectos prácticos del mundo real",
                "Técnicas avanzadas y optimización",
                "Debugging y resolución de problemas",
                "Despliegue y producción",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Requirements */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Requisitos</h2>
            <Card className="bg-zinc-900 border-zinc-800 p-6">
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-zinc-500">•</span>
                  Conocimientos básicos de programación
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-500">•</span>
                  Computadora con conexión a internet
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-500">•</span>
                  Ganas de aprender y practicar
                </li>
              </ul>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return youtubeCourses.map((course) => ({
    slug: course.slug,
  }));
}

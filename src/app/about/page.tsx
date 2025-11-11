import { HeaderSkill } from "@/components/skills/HeaderSkill";
import { Topbar } from "@/components/Topbar";
import { ArrowDownCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
                <Topbar />
                    <main className='min-h-screen bg-black text-[#f2f2f2] transition-colors duration-500 mb-24 px-5'>
                        <HeaderSkill title="Acerca de mi" icon={<img src="/jose.jpeg" alt="José Galdámez" className="w-48" />} />
                        <div className="max-w-3xl mx-auto">
                            <p className="mt-4 text-lg leading-7 text-white/70">
                                ¡Hola! Soy José Galdámez, un desarrollador Fullstack especializado en crear soluciones web y móviles innovadoras. Con experiencia en tecnologías como React, Node.js, Angular, NextJS, Flutter, React Native y Spring Boot y bases de datos SQL y NoSQL. Me apasiona construir aplicaciones escalables y eficientes.
                            </p>
                            <p className="mt-4 text-lg leading-7 text-white/70">
                                Me encanta enfrentar desafíos técnicos y aprender nuevas herramientas para mejorar mis habilidades. Siempre estoy buscando oportunidades para colaborar en proyectos emocionantes y contribuir al crecimiento de la comunidad tecnológica.
                            </p>
                            <p className="mt-4 text-lg leading-7 text-white/70">
                                Cuando no estoy codificando, disfruto explorando nuevas tecnologías, leyendo sobre tendencias en desarrollo de software y compartiendo conocimientos con otros desarrolladores.
                            </p>
                            <p className="mt-4 text-lg leading-7 text-white/70">He trabajado con diversas empresas, ayudándoles a transformar sus ideas en productos digitales exitosos. Si tienes un proyecto en mente o simplemente quieres charlar sobre tecnología, ¡no dudes en contactarme!
                            </p>
                            <Link href="/contact" className="mt-6 flex items-center text-white/70 hover:text-white font-medium border p-3 bg-transparent hover:bg-white/5 w-fit transition-colors duration-300">
                                Contáctame <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                            <hr className="border-gray-600 border-t my-10" />
                            <h2 className="mt-10 text-2xl">Experiencia Laboral</h2>
                            <p className="mt-4 text-lg leading-7 text-white/70">A lo largo de mi carrera, he tenido la oportunidad de trabajar en varios proyectos interesantes que me han permitido desarrollar mis habilidades y crecer profesionalmente. Aquí hay un resumen de mi experiencia laboral:</p>
                            <ul className="mt-4 px-10 text-white/70 list-disc list-inside space-y-2">
                                <li className="list-disc">Desarrollador Fullstack en Stefanini Group (2022 - Presente)</li>
                                <li className="list-disc">Desarrollador Fullstack en Radio Progreso (2018 - 2022)</li>
                                <li className="list-disc">Instructor en Gildan (2014 - 2018)</li>
                            </ul>
                            <p className="mt-4 text-lg leading-7 text-white/70">Si deseas conocer más sobre mi experiencia laboral o ver ejemplos de proyectos en los que he trabajado, no dudes en contactarme.</p>

                            <Link href="/JoseGaldamezCV.pdf" download={true} target="_blank" className="mt-6 flex items-center text-white/70 hover:text-white font-medium border p-3 bg-transparent hover:bg-white/5 w-fit transition-colors duration-300">
                                Descarga mi CV <ArrowDownCircle className="ml-2 h-4 w-4" />
                            </Link>

                            <p className="mt-4 text-lg leading-7 text-white/70">¡Gracias por visitar mi página "Acerca de mí"! Estoy emocionado de conectarme con otros profesionales y explorar nuevas oportunidades en el mundo del desarrollo web y móvil.</p>

                        </div>
                    </main>
                </>
    );
}
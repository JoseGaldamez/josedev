import { ExperienceSkill } from "@/components/skills/ExperienceSkill";
import { HeaderSkill } from "@/components/skills/HeaderSkill";
import { TechnologiesSkill } from "@/components/skills/TechnologiesSkill";
import { Topbar } from "@/components/Topbar";
import { SettingsIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'José Galdámez | Backend Developer',
    description: 'Desarrollador backend con experiencia en diversas tecnologías y empresas.',
    openGraph: {
        images: "https://josegaldamez.dev/jose-portada.png",
        title: 'José Galdámez | Backend Developer',
        description: 'Desarrollador backend con experiencia en diversas tecnologías y empresas.',
    },
    alternates: {
        canonical: 'https://josegaldamez.dev/skills/backend',
    }
};

const listTechnologies = [
    "Node.js",
    "Express.js",
    "TypeScript",
    "NestJS",
    "Java",
    "Spring Boot",
    "Golang",
    "SQL Server",
    "MongoDB",
    "PostgreSQL",
    "Azure",
    "Kafka",
    "Docker",
    "Git"
];

export default function BackendPage() {
    return (
        <>
        <Topbar />
        <main className='min-h-screen bg-black text-[#f2f2f2] transition-colors duration-500'>
            <HeaderSkill title="Backend" icon={<SettingsIcon className='mb-4 text-white/70 font-extralight' size={48} />} />


            <ExperienceSkill>
                            <p>
He trabajado en el ámbito del desarrollo backend durante más de 5 años, en diversas empresas y clientes del nivel de Walmart, Difusora Hondureña, Banco Agrícola, etc. Creando soluciones robustas y escalables para satisfacer las necesidades del negocio. APIs RESTful, microservicios y gestión de bases de datos son algunas de mis especialidades.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 my-14 items-center">
                                <img src="https://cdn.remitly.com/images/v1/img/banco_agricola_mon_nov_07_2016.5nKarhbeCxojsZIQ8LmcxM.png" alt="Banco Agrícola logo" className="w-2/3 md:w-full mx-auto px-5 saturate-0 hover:saturate-100 transition-all duration-500" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Walmart_logo_%282008%29.svg" alt="Walmart logo" className="w-2/3 md:w-full mx-auto px-5 saturate-0 hover:saturate-100 transition-all duration-500" />
                                <img src="https://www.radioprogresohn.net/wp-content/uploads/2023/04/logo-rp-footer.png" alt="Difusora Hondureña logo" className="w-2/3 md:w-full mx-auto px-5 saturate-0 hover:saturate-100 transition-all duration-500" />
                            </div>
                        </ExperienceSkill>
                      
                        <TechnologiesSkill technologies={listTechnologies} />




        </main>
        </>
    );
}

import { ExperienceSkill } from "@/components/skills/ExperienceSkill";
import { HeaderSkill } from "@/components/skills/HeaderSkill";
import { TechnologiesSkill } from "@/components/skills/TechnologiesSkill";
import { Topbar } from "@/components/Topbar";
import { Smartphone, TabletSmartphoneIcon } from "lucide-react";

const listTechnologies = [
    "React Native",
    "Flutter",
    "Dart",
    "Swift",
    "Kotlin",
    "Ionic",
    "Firebase",
    "SQLite",
    "Git",
    "Azure"
];

export default function MobilePage() {
    return (
        <>
        <Topbar />
        <main className='min-h-screen bg-black text-[#f2f2f2] transition-colors duration-500'>
            <HeaderSkill title="Aplicaciones Móviles" icon={<TabletSmartphoneIcon className='mb-4 text-white/70 font-extralight' size={48} />} />


            <ExperienceSkill>
            <p>He trabajado en el ámbito del desarrollo de aplicaciones móviles durante más de 5 años, en diversas empresas y clientes del nivel de Difusora Hondureña, Turivisa, etc. He creado aplicaciones móviles nativas y multiplataforma, enfocándome en la experiencia del usuario y el rendimiento óptimo en dispositivos iOS y Android.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 my-14 items-center">
                                            <span className="text-white text-5xl text-center">Turivisa</span>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Walmart_logo_%282008%29.svg" alt="Walmart logo" className="w-2/3 md:w-full mx-auto px-5 saturate-0 hover:saturate-100 transition-all duration-500" />
                                            <img src="https://www.radioprogresohn.net/wp-content/uploads/2023/04/logo-rp-footer.png" alt="Difusora Hondureña logo" className="w-2/3 md:w-full mx-auto px-5 saturate-0 hover:saturate-100 transition-all duration-500" />
                                        </div>
                                    </ExperienceSkill>
                                  
                                    <TechnologiesSkill technologies={listTechnologies} />
            
        </main>
        </>
    );
}
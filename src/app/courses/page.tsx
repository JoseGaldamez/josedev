
import { CopyCoursesCupon } from "@/components/CoursesCode/CopyCoursesCupon";
import { Header, Footer } from "@/components/v3";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {

    return (
        <div className="text-white pt-5">

            <Header />
            <div className="container max-w-4xl mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold">Cursos en <span className="text-violet-600">Udemy</span></h1>
                <p className="my-5 text-lg">
                    Les comparto algunos de los cursos que he creado y publicado en Udemy. Si quieres aprender sobre desarrollo web, programación y más, no dudes en inscribirte.
                </p>
                <hr className="my-8 border-slate-700" />
                <div className="border border-slate-500 border-dashed rounded-lg p-5 flex justify-between items-center">
                    <span>
                        Cupón de descuento para mis cursos: <span className="text-violet-600 font-bold">JUNIO2025</span>
                    </span>
                    <CopyCoursesCupon />
                </div>

                <Link target="_blank" href="https://www.udemy.com/user/jose-galdamez-5/" className="bg-violet-600 hover:bg-[#14426d] hover:font-bold hover:underline transition-all text-white rounded-xl px-4 py-2 mt-10 flex items-center justify-center gap-2">
                    Ver todos los cursos <ArrowUpRight className="h-5 w-5" />
                </Link>
            </div>

            <Footer />
        </div>
    );
}
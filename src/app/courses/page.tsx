
import { CopyCoursesCupon } from "@/components/CoursesCode/CopyCoursesCupon";
import { Footer } from "@/components/v2/Footer";
import { Header } from "@/components/v2/Header";
import { ArrowUpRight, ArrowUpRightSquare, CopyIcon } from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {


    const copyToClipboard = () => {
        const couponCode = "JUNIO2025";
        navigator.clipboard.writeText(couponCode)
            .then(() => {
                alert("Cupón copiado al portapapeles: " + couponCode);
            })
            .catch(err => {
                console.error("Error al copiar el cupón: ", err);
            });
    }

    return (
        <div>

            <Header />
            <div className="container max-w-4xl mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold">Cursos en <span className="text-violet-800">Udemy</span></h1>
                <p className="my-5 text-lg">
                    Les comparto algunos de los cursos que he creado y publicado en Udemy. Si quieres aprender sobre desarrollo web, programación y más, no dudes en inscribirte.
                </p>
                <hr className="my-8 border-slate-700" />
                <div className="border border-slate-500 border-dashed rounded-lg p-5 flex justify-between items-center">
                    <span>
                        Cupón de descuento para mis cursos: <span className="text-violet-800 font-bold">JUNIO2025</span>
                    </span>
                    <CopyCoursesCupon />
                </div>

                <Link target="_blank" href="https://www.udemy.com/user/jose-galdamez-5/" className="bg-[#284c84] hover:bg-[#14426d] hover:font-bold hover:underline transition-all text-white rounded-xl px-4 py-2 mt-10 flex items-center justify-center gap-2">
                    Ver todos los cursos <ArrowUpRight className="h-5 w-5" />
                </Link>
            </div>

            <Footer />

        </div>
    );
}
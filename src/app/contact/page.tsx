import { ButtonChat } from "@/components/v2/ButtonChat";
import { Fab } from "@/components/v2/Fab";
import { Header, Footer } from "@/components/v3";
import { ArrowDownCircleIcon, MailIcon, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="text-white py-5">
            <Header />
            <div className="container max-w-4xl mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold">Contacto</h1>
                <p className="my-5 text-lg">
                    Muchas gracias por visitar mi sitio web, es un gusto saludarte. 👋
                </p>

                <hr className="my-16 border-slate-700" />
                <div className="border border-slate-700 p-8 rounded-xl text-center">
                    <h2 className="text-2xl font-bold">¿Quieres saber más sobre mi?</h2>
                    <p className="my-5 text-lg">
                        Si quieres saber más sobre mí, puedes descargar mi CV o conversar con mi IA.
                    </p>
                    <div className="flex justify-center items-center gap-4 flex-col md:flex-row py-10">
                        <Link href="/JoseGaldamez_CV.pdf" download target="_blank" rel="noopener noreferrer" className="bg-yellow-600 text-white hover:bg-yellow-700 rounded-full px-5 py-3 transition-colors font-light flex items-center justify-center w-full md:w-auto ">
                            Descargar CV
                            <ArrowDownCircleIcon className="h-8 w-8 text-gray-100 ml-3" />
                        </Link>
                        <ButtonChat />
                    </div>
                </div>

                <div className="border border-slate-700 p-8 rounded-xl text-center mt-16">
                    <h2 className="text-2xl font-bold">¿Quieres hablar conmigo?</h2>
                    <p className="my-5 text-lg">
                        Las formas más rápidas de contactarme son mediante mi correo electrónico o mi whatsapp.
                    </p>
                    <div className="flex justify-center items-center gap-4 flex-col md:flex-row py-10">
                        <Link href="mailto:josegaldamez1991@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white hover:bg-sky-600 rounded-full px-5 py-3 transition-colors text-lg font-light flex items-center justify-center w-full md:w-auto">
                            Correo electrónico <MailIcon className="h-6 w-6 text-gray-100 ml-3" />
                        </Link>
                        <Link href="https://wa.me/50431751455?text=Hola,%20José!%20Vengo%20de%20tu%20página%20web%20y%20quiero%20hablar%20contigo." target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white hover:bg-green-700 rounded-full px-5 py-3 transition-colors text-lg font-light flex items-center justify-center w-full md:w-auto">
                            Whatsapp <MessageSquare className="h-6 w-6 text-gray-100 ml-3" />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
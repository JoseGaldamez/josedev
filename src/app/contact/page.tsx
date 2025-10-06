import { Button } from "@/components/ui/button";
import { ButtonChat } from "@/components/v2/ButtonChat";
import { Fab } from "@/components/v2/Fab";
import { SocialLinks } from "@/components/v2/SocialLinks";
import { ContactForm } from "@/components/v4/ContactForm";
import { FooterV4 } from "@/components/v4/FooterV4";
import { HeaderV4 } from "@/components/v4/Header";
import { SocialNetwork } from "@/components/v4/SocialNetwork";
import { ArrowDownCircleIcon } from "lucide-react";
import Link from "next/link";
export default function Page() {
    return (
        <main className='min-h-screen bg-[#f2f2f2] text-[#253237] transition-colors duration-500'>
            <HeaderV4 />

            <div className="max-w-7xl mx-auto px-4 py-24">
                <h2 className='text-5xl font-bold mb-6 my-10'>Contáctame</h2> 
                <hr className='border-gray-300' />
                <div>
                    <p className="mt-6 text-lg text-gray-700">
                        ¿Tienes alguna pregunta, proyecto o simplemente quieres saludar? ¡No dudes en enviarme un mensaje! Estoy aquí para ayudarte y colaborar en lo que necesites. Puedes llenar el formulario a continuación o enviarme un correo directamente a <a href="mailto:josegaldamez1991@gmail.com" className="text-blue-500 hover:underline">josegaldamez1991@gmail.com</a>.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-start mt-10 md:space-x-20">
                    <div className="w-full md:w-1/2 pt-10">
                        <h3 className="text-2xl font-bold mb-4">Formas de contacto</h3>
                        <p className="text-gray-700">
                            Estoy aquí para ayudarte. Si tienes alguna duda o inquietud, no dudes en preguntar.
                        </p>
                        <SocialNetwork />

                        <h4 className="text-lg font-semibold mt-10">Descarga mi CV</h4>
                        <Link href="/JoseGaldamez_CV.pdf" target="_blank" download className="inline-flex items-center mt-2">
                        <Button className="flex items-center">
                                <ArrowDownCircleIcon className="w-5 h-5 mr-2" />
                                Descargar CV
                            </Button>
                        </Link>

                    </div>
                    <div className="w-full md:w-1/2">
                        <ContactForm />
                    </div>
                </div>
                <hr className="border-gray-300 my-8" />
            </div>
        <FooterV4 />
        </main>
    );
}
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialNetworks } from "@/components/contact/SocialNetworks";
import { Topbar } from "@/components/Topbar";


export default function Page() {
    return (
        <>
        <Topbar />
            <main className='min-h-screen bg-black text-[#f2f2f2] transition-colors duration-500'>
                <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center container mx-auto py-24">
                    <h1 className="text-5xl md:text-6xl font-thin mb-6 text-white/70">Contáctame</h1>
                    <p className="md:text-xl text-white/20 mb-8 max-w-2xl">
                        Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar sobre tecnología. No dudes en enviarme un mensaje.
                    </p>
                    <SocialNetworks />
                    <ContactForm />
                </div>
            </main>
        </>
    );
}
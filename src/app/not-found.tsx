import { Topbar } from "@/components/Topbar";
import Link from "next/link";

export default function Page404() {
    return (
        <>
                <Topbar />
                <main className='min-h-screen bg-black text-[#f2f2f2] transition-colors duration-500'>
                    <div className="flex flex-col items-center justify-center min-h-screen">
                        <h1 className="text-9xl font-bold">404</h1>
                        <p className="mt-4 text-lg">Página no encontrada</p>
                        <Link href="/" className="mt-6 flex items-center text-white/70 hover:text-white font-medium border p-3 bg-transparent hover:bg-white/5 w-fit transition-colors duration-300">
                            Regresar a la página de inicio
                        </Link>
                    </div>
                </main>
                </>
    );
}
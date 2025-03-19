import { Header } from "@/components/v2/Header";
import Link from "next/link";

export default function NotFoundSinglePost() {
    return (
        <div>
            <Header />
            <div className="container max-w-4xl mx-auto px-4 py-48 text-center">
                <h2 className="text-9xl font-bold">404</h2>
                <h1 className="text-2xl font-bold mb-16">Artículo no encontrado</h1>

                <Link href="/blog" className="bg-transparent hover:bg-white/5 rounded-full border border-white px-4 py-2">
                    Volver al Blog
                </Link>
            </div>
        </div>
    );
}

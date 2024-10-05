import { CardArticle, Footer } from "@/components"
import { articlesList } from "@/data/testArticlds.data"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Josá Galdámez | Blog',
    description: 'Artículos sobre desarrollo web y móvil, tecnología y programación.s',
}

const BlogPage = () => {
    return (
        <>
            <main className="max-w-5xl m-auto p-5">
                <h1 className="mt-10 md:mt-5 text-2xl py-5 font-bold">Artículos recientes</h1>
                <p className="text-lg">Artículos sobre tecnología y programación que te ayudarán a aprender algo nuevo o simplemente para informarte de la actualidad en el munto de la web.</p>
                <hr className="mb-10" />
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {
                        articlesList.map((article, index) => (
                            <CardArticle key={index} {...article} />
                        ))
                    }
                </section>
            </main>
        </>
    )
}

export default BlogPage
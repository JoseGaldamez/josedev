import { CardArticle } from "@/components/blog/CardArticle"
import { articlesList } from "@/data/testArticlds.data"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Josá Galdámez | Blog',
    description: 'Artículos sobre desarrollo web y móvil, tecnología y programación.s',
}

const BlogPage = () => {
    return (
        <>
            <h1 className="text-2xl py-5">Artículos recientes</h1>
            <div className="border-t border-white py-5"></div>
            <section className="grid grid-cols-2 gap-4">
                {
                    articlesList.map((article, index) => (
                        <CardArticle key={index} {...article} />
                    ))
                }
            </section>
        </>
    )
}

export default BlogPage
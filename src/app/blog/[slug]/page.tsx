import { articlesList } from "@/data/testArticlds.data";
import './simple-post.css';
import Head from 'next/head'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '',
}


const SinglePost = ({ params }: { params: { slug: string } }) => {
    const articleSelected = articlesList.find(article => article.link === `/blog/${params.slug}/`);
    metadata.title = articleSelected?.title || "Artículo no encontrado";
    metadata.openGraph = {
        images: articleSelected?.image ? [{ url: articleSelected?.image }] : [],
    }

    return (
        <>
            <Head>
                <title>Ejemplo de texto</title>
            </Head>
            <h1 className="text-3xl font-bold tracking-wide mb-3">{articleSelected?.title}</h1>
            <div className="mb-5 text-gray-400">
                <span>
                    {articleSelected?.date}
                </span>
            </div>
            <img className="w-full rounded-lg" src={articleSelected?.image} alt={articleSelected?.title} />
            <div className="mt-5 text-gray-300 text-lg" dangerouslySetInnerHTML={{ __html: articleSelected?.content || "" }}>
            </div>
        </>
    )
}

export default SinglePost;
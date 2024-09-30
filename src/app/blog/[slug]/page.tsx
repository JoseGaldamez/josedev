import { Metadata } from "next";
import { articlesList } from "@/data/testArticlds.data";

import './simple-post.css';

export const metadata: Metadata = {
    title: '',
    description: '',
    openGraph: {
        images: ''
    }
}

const SinglePost = ({ params }: { params: { slug: string } }) => {
    const articleSelected = articlesList.find(article => article.link === `/blog/${params.slug}/`);
    metadata.title = articleSelected?.title || "Artículo no encontrado";
    metadata.description = articleSelected?.description || "";
    metadata.openGraph = {
        images: articleSelected?.image ? articleSelected?.image : [],
    }

    return (
        <>
            <main className="max-w-4xl m-auto p-5 sm:p-10">
                <h1 className="mt-16 md:mt-5 text-4xl font-bold tracking-wide mb-3">{articleSelected?.title}</h1>
                <div className="mb-5 text-gray-400">
                    <span>
                        {articleSelected?.date}
                    </span>
                </div>
                <img className="w-full rounded-lg" src={articleSelected?.image} alt={articleSelected?.title} />
                <div className="mt-5 text-gray-700 text-lg" dangerouslySetInnerHTML={{ __html: articleSelected?.content || "" }}>
                </div>
            </main>
        </>
    )
}

export default SinglePost;
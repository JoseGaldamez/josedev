import { CardArticleProps } from "@/interface/cartArticle.interface";

export const CardArticle = ({ title, image, link, description, date, category }: CardArticleProps) => {
    return (
        <article className="bg-slate-900 rounded-lg overflow-hidden">
            <a href={link}>
                <div className="w-full h-48 overflow-hidden">
                    <img src={image} alt={title} className="w-full h-48 object-cover hover:scale-105 opacity-100 hover:opacity-80 transition duration-300 ease-in-out" />
                </div>
                <div className="px-3 py-5">
                    <div className="pb-4 flex justify-between">
                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{date}</span>
                        <span className="underline text-xs">{category}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-4 hover:text-yellow-500">
                        {title}
                    </h2>
                    <p className="text-sm text-gray-400">
                        {description}
                    </p>
                </div>
            </a>
        </article>
    )
}

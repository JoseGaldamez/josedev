import { CardArticleProps } from "@/interface/cartArticle.interface";
import Link from "next/link";

export const CardArticle = ({ title, image, link, description, date, category }: CardArticleProps) => {
    return (
        <article className="bg-slate-50 hover:bg-slate-100 rounded-lg overflow-hidden">
            <Link href={link}>
                <div className="w-full aspect-video overflow-hidden">
                    <img src={image} alt={title} className="w-full object-cover hover:scale-105 opacity-100 hover:opacity-80 transition duration-300 ease-in-out" />
                </div>
                <div className="px-3 py-5">
                    <div className="flex justify-between">
                        <span className="inline-flex items-center rounded-md py-1 text-xs font-medium text-gray-400">{date}</span>
                    </div>
                    <h2 className="mt-5 text-xl font-bold mb-4 text-slate-500 hover:text-slate-900">
                        {title}
                    </h2>
                    <p className="text-sm text-gray-400">
                        {description}
                    </p>
                </div>
            </Link>
        </article>
    )
}

import React from 'react'

const posts = [
    {
        id: 1,
        title: '4 cosas que debes saber sobre el futuro de Flutter',
        href: "https://medium.com/@josegaldamez1991/4-cosas-que-debes-saber-sobre-el-futuro-de-flutter-6ceb2755fe5c",
        image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5poSJRIu4hykCaV3_qdbAQ.png",
        description:
            'Flutter es es un tecnología que crece a pasos agigantados desde su lanzamiento en el 2017. El equipo de Google ha mejorado tanto el SDK que hoy en día es uno de los favoritos entre los desarrolladores y las empresas.',
        date: 'Febrero 17, 2023',
        datetime: '2020-03-16',
        category: { title: 'Flutter', href: '#' },
        author: {
            name: 'José Galdámez',
            role: 'Fullstack Developer',
            href: '#',
            imageUrl:
                'https://miro.medium.com/v2/resize:fill:88:88/1*ezkGwpsKuTikgqeQXAWZVg@2x.jpeg',
        },
    },
    {
        id: 2,
        title: 'Principales novedades en Flutter 2.10',
        href: "https://medium.com/@josegaldamez1991/principales-novedades-en-flutter-2-10-1ad240af0eed",
        image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*qqEa2vfEA_rnHzuhRZu7Hw.png",
        description:
            'Flutter se está convirtiendo en un Framework muy importante, para los programadores independientes y también para las empresas que lo adoptan que cada vez son más.',
        date: 'Febrero 14, 2020',
        datetime: '2020-03-16',
        category: { title: 'Flutter', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

export const BlogHome = () => {
    return (
        <div className="bg-white py-24 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Artículos de mi Blog</h2>
                    <p className="mt-8 text-lg text-gray-600">
                        Algunos noticias y contenido escrito por mi para compartir experiencias con la comunidad.
                    </p>
                </div>
                <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className='block'>
                                <a href={post.href} target='_blank' >
                                    <img className="rounded-xl mb-4" src={post.image} alt={post.title} />
                                </a>
                            </div>
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href} target='_blank' >
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

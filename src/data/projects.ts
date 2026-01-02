import { Project } from '@/types/project';

export const projects: Project[] = [

    {
        id: '2',
        title: 'Radio Progreso Web',
        description: 'Sitio web para estación de radio con streaming en vivo, programación y podcasts bajo demanda y noticias.',
        category: 'webapp',
        image: './projects/radioprogreso.png',
        link: 'https://radioprogresohn.net',
        technologies: ['Wordpress', 'Javascript', 'MySQL', 'ReactJS']
    },
    {
        id: '3',
        title: 'iOS Radio Progreso App',
        description: 'Aplicación móvil para iOS que permite a los usuarios escuchar Radio Progreso en vivo, acceder a podcasts y noticias.',
        category: 'mobile',
        image: './projects/ios-radioprogreso.png',
        appLink: 'https://apps.apple.com/hn/app/radio-progreso-hn/id1556463013',
        technologies: ['Flutter', 'Firebase', 'Firestore']
    },
    {
        id: '4',
        title: 'Seybo App',
        description: 'Aplicación móvil para noticias y contenido multimedia con integración de redes sociales y notificaciones push.',
        category: 'mobile',
        image: './projects/seybo.png',
        appLink: 'https://play.google.com/store/apps/details?id=org.radioseibo.radioseiboapp&hl=es_HN',
        technologies: ['Flutter', 'Firebase', 'Express', 'Firestore']
    },
    {
        id: '5',
        title: 'Expedientes Cofamipro',
        description: 'Sistema web para la gestión de expedientes de personas desaparecidas, incluye búsqueda avanzada y busqueda con AI y reportes.',
        category: 'webapp',
        image: './projects/expedientes.png',
        link: 'https://expedientes.cofamiprohonduras.org',
        technologies: ['Next.js', 'Firestore', 'AI', 'Gemini AI']
    },
    {
        id: '6',
        title: 'NPME VSCode Extension',
        description: 'Extensión de Visual Studio Code para gestionar paquetes NPM, incluyendo instalación, actualización y eliminación de paquetes desde el editor.',
        category: 'other',
        image: './projects/npme-extension.png',
        link: 'https://marketplace.visualstudio.com/items?itemName=josegaldamezdev.NPME',
        technologies: ['Next.js', 'Prisma', 'TailwindCSS', 'Vercel']
    },
        {
        id: '1',
        title: 'E-commerce Octopus',
        description: 'Aplicación de comercio electrónico completa con carrito de compras, pagos integrados y gestión de inventario.',
        category: 'webapp',
        image: './projects/octopus.png',
        link: 'https://www.octopushn.com',
        technologies: ['React Native', 'Node.js', 'Supabase']
    },
];

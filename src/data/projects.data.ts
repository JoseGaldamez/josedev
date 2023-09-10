import { IProject } from "@/interface/project.interface";

export const listProjects: IProject[] = [
    {
        id: 1,
        name: "Radio Progreso Móvil",
        image: "https://www.radioprogresohn.net/wp-content/uploads/2023/04/logo-radio-progreso.png",
        title: "Aplicación móvil de Radio Progreso",
        description:
            "Esta aplicación permite a los usuarios escuchar la radio en línea y leer notas que se escriban en la página web. Este proyecto estuvo 100% en mis manos, desde diseño UX hasta software y base de datos.",
        url: "https://play.google.com/store/apps/details?id=net.radioprogresohn.radioprogresoappoficial&hl=es_HN&gl=US&pli=1",
        tecnologies: ["Flutter", "Firebase", "ReactJS"],
        github: "https://github.com/JoseGaldamez/AndroidApp-RadioProgreso",
    },
    {
        id: 2,
        name: "RP web",
        image: "https://www.radioprogresohn.net/wp-content/uploads/2023/04/logo-radio-progreso.png",
        title: "Página web de Radio Progreso",
        description:
            "La página web de Radio Progreso está a mi cargo, soy quien se encarga de la administración y el mantenimiento del sitio web, así como cualquier cambio que se requiera.",
        url: "https://radioprogresohn.net",
        tecnologies: ["Wordpress", "ReactJS", "MySQL"],
        github: "https://github.com/",
    },
    {
        id: 3,
        name: "Camila Viera App",
        image: "https://play-lh.googleusercontent.com/zb98UZVfBakz9ygz6iuth3ZeTP36BHf2cq2ieIvvF3BQtP1tFDEWdfCOEWKeOA8CY7Y=w480-h960-rw",
        title: "Camila Viera App",
        description:
            "Subcontraro por parte de MockaCreativa, colaboré crando la aplicación móvil para este despacho de abogados. La aplicación permite a los usuarios el envío de documentos, creación de citas, etc...",
        url: "https://play.google.com/store/apps/details?id=com.moka.camilleviera.camille_viera&hl=es_HN&gl=US",
        tecnologies: ["Flutter", "Firebase", "Node JS"],
        github: "",
    },
    {
        id: 4,
        name: "CompressImages",
        image: "https://www.shareicon.net/data/2015/05/06/34356_video_400x400.png",
        title: "Aplicación Web para Comprimir Imágenes",
        description:
            "Este ha sido un proyecto personal que realicé hace un tiempo mientras aprendía ReactJS. Es una aplicación excusivamente de frontend, la compresión se realiza de la forma más agresiva posible. ",
        url: "https://josegaldamez.github.io/compressor/",
        tecnologies: ["ReactJS", "Librerías Javascript"],
        github: "https://github.com/JoseGaldamez/AndroidApp-RadioProgreso",
    },
];

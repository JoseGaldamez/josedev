import ITinyLinkImage from "@/assets/itiny-link.jpg";
import RadioProgresoLinkImage from "@/assets/radio-pogreso.jpg";

export const projectsList = [
    {
        image: RadioProgresoLinkImage,
        name: "Radio Progreso",
        description:
            "Aplicación para leer noticias y escuchar la radio en vivo. Disponible para Android y iPhone",
        url: "https://apps.apple.com/hn/app/radio-progreso-hn/id1556463013",
        codeLink: "https://github.com/JoseGaldamez/radioprogresoapp",
        tecnologies: ["Flutter", "Firebase", "React JS"],
    },
    {
        image: ITinyLinkImage,
        name: "iTiny Link",
        description:
            "Acortador de URL gratuito que te permite ingresar un link largo y comprimirlo al máximo.",
        url: "https://itiny.link/",
        codeLink: "https://github.com/JoseGaldamez/itiny",
        tecnologies: ["Next JS", "PostgreSQL", "Tailwind CSS"],
    },
];

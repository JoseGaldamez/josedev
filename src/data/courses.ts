export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
}

export interface UdemyCourse extends Course {
  price: string;
  discount: string;
  udemyLink: string;
}

export interface YouTubeCourse extends Course {
  slug: string;
}

export const udemyCourses: UdemyCourse[] = [
  {
    id: "1",
    title: "NEXT JS 15+ Framework de Producción para ReactJS [2025]",
    description: "Aprende Next.js 15+ desde cero y lleva tus aplicaciones React al siguiente nivel con las últimas características del framework.",
    image: "https://img-c.udemycdn.com/course/750x422/6239633_20d6.jpg",
    level: "Desde Cero",
    duration: "20 horas",
    price: "$12.99",
    discount: "85% OFF",
    udemyLink: "https://www.udemy.com/course/next-js-framework-de-produccion-para-reactjs/?couponCode=ENERO2026",
  },
  {
    id: "2",
    title: "ANDROID - Jetpack Compose y Kotlin [2025] - Apps Desde Cero",
    description: "Curso completo de desarrollo de aplicaciones Android con Jetpack Compose y Kotlin. Crea apps modernas y funcionales desde cero.",
    image: "https://img-c.udemycdn.com/course/750x422/6005872_fe11.jpg",
    level: "Desde Cero",
    duration: "19 horas",
    price: "$12.99",
    discount: "80% OFF",
    udemyLink: "https://www.udemy.com/course/android-con-jetpack-compose-movil-apps-nativas-y-modernas/?couponCode=ENERO2026",
  },
  {
    id: "3",
    title: "Flutter 2024 GRATIS - Tu primera APP móvil desde cero",
    description: "Aprende Flutter y Dart desde cero creando tu primera aplicación móvil. Curso gratuito con todo lo necesario para empezar en el desarrollo móvil.",
    image: "https://img-c.udemycdn.com/course/750x422/5548580_c95a_2.jpg",
    level: "Desde Cero",
    duration: "2 horas",
    price: "Gratis",
    discount: "Gratis",
    udemyLink: "https://www.udemy.com/course/flutter-2024-gratis-tu-primera-app-movil-desde-cero/?referralCode=007999DEB0FE9CCFABEA",
  },
];

export const youtubeCourses: YouTubeCourse[] = [
  {
    id: "yt1",
    title: "Introducción a React: Fundamentos Esenciales",
    description: "Curso completo y gratuito de React para principiantes. Aprende los conceptos fundamentales de React.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
    level: "Principiante",
    duration: "8 horas",
    slug: "introduccion-react-fundamentos",
  },
  {
    id: "yt2",
    title: "Firebase para Aplicaciones Web",
    description: "Aprende a integrar Firebase en tus aplicaciones web. Autenticación, Firestore, Storage y más.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    level: "Intermedio",
    duration: "6 horas",
    slug: "firebase-aplicaciones-web",
  },
  {
    id: "yt3",
    title: "Tailwind CSS: Diseño Moderno y Responsivo",
    description: "Domina Tailwind CSS y crea interfaces modernas y responsivas de manera rápida y eficiente.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    level: "Principiante",
    duration: "5 horas",
    slug: "tailwind-css-diseno-moderno",
  },
  {
    id: "yt4",
    title: "Git y GitHub desde Cero",
    description: "Aprende control de versiones con Git y colaboración con GitHub de forma práctica.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80",
    level: "Principiante",
    duration: "4 horas",
    slug: "git-github-desde-cero",
  },
];

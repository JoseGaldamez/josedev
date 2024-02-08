import { Navbar } from '@/components/common/nav_bar/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google'

const inter = Poppins({ weight: ['100', '400', '300', "500", "700", "900"], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta property="og:title" content="Josá Galdámez | Fullstack Developer" />
        <meta property="og:description" content="Desarrollador de aplicaciones web y móviles" />
        <meta property="og:image" content="./jose-portada.jpg" />

        <link rel="preload" as="image" href="./jose-portada.jpg"></link>

        <meta property="image" content="./jose-portada.jpg" />

        <meta name="twitter:title" content="Josá Galdámez | Fullstack Developer" />
        <meta name="twitter:description" content="Desarrollador de aplicaciones web y móviles" />
        <meta name="twitter:image" content="./jose-portada.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className + " relative text-white"}>
        <div className='min-h-screen w-full bg-gray-950 bg-[radial-gradient(ellipse_90%_100%_at_-40%_50%,rgba(5,120,150,0.2),rgba(255,255,255,0.0))] '>
          <div className='fixed w-1 h-full top-96 right-0 bg-yellow-500'></div>
          <div className='fixed w-1 h-full top-0 left-0 bg-yellow-500'></div>

          <div id="particle-container"></div>

          <header>
            <Navbar />
          </header>
          <div className='section py-24 mx-5 md:py-36 md:mx-auto max-w-3xl'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

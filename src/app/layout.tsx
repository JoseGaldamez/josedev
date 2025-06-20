import { GoogleAnalytics } from '@next/third-parties/google'
import { Poppins } from 'next/font/google'

import './globals.css';
import './v3.css';

const inter = Poppins({ weight: ['100', '400', '300', "500", "700", "900"], subsets: ['latin'] })

export const metadata = {
  title: 'Josá Galdámez | Fullstack Developer',
  description: 'Desarrollador de aplicaciones web y móviles',
  openGraph: {
    images: "https://josegaldamez.dev/jose-portada.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2477956073542454" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2477956073542454"
          crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
      <GoogleAnalytics gaId='G-XPEDCTE08B' />
    </html>
  )
}

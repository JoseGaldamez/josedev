import { GoogleAnalytics } from '@next/third-parties/google'

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
      <body className={inter.className + " relative text-white"}>
        <div className='h-auto min-h-screen w-full bg-gray-950 bg-[radial-gradient(ellipse_90%_100%_at_-40%_50%,rgba(5,120,150,0.2),rgba(255,255,255,0.0))] '>
          <div className='fixed w-1 h-full top-96 right-0 bg-yellow-500'></div>
          <div className='fixed w-1 h-full top-0 left-0 bg-yellow-500'></div>
          <div id="particle-container"></div>
          <header>
            <Navbar />
          </header>
          <div className='section py-10 md:py-24 mx-auto max-w-4xl px-5 sm:px-14'>
            {children}
          </div>
        </div>
      </body>
      <GoogleAnalytics gaId='G-XPEDCTE08B' />
    </html>
  )
}

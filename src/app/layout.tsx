import { GoogleAnalytics } from '@next/third-parties/google'
import { Poppins } from 'next/font/google'

import { Navbar } from '@/components/Navbar/Navbar';
import './globals.css';

const inter = Poppins({ weight: ['100', '400', '300', "500", "700", "900"], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
      <GoogleAnalytics gaId='G-XPEDCTE08B' />
    </html>
  )
}

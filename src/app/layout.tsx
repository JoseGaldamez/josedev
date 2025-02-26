import { GoogleAnalytics } from '@next/third-parties/google'
import { Poppins } from 'next/font/google'

import './globals.css';
import './v2.css';

const inter = Poppins({ weight: ['100', '400', '300', "500", "700", "900"], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2477956073542454" />
      </head>
      <body className={inter.className}>

        {children}

      </body>
      <GoogleAnalytics gaId='G-XPEDCTE08B' />
    </html>
  )
}

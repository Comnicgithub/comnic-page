import { Navbar } from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway} from 'next/font/google'
import { Header } from '@/components/Header'

const raleway = Raleway({ subsets: ['cyrillic'], weight: "400" })

export const metadata: Metadata = {
  title: 'Comnic - Growth marketing',
  description: 'Somos una agencia enfocada en el desarrollo empresarial.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
        dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NGVTPGV')`}}
        />
      </head>
      <body className={raleway.className}>
        <iframe 
        src="https://www.googletagmanager.com/ns.html?id=GTM-NGVTPGV" 
        height="0" 
        width="0" 
        ></iframe>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  )
}

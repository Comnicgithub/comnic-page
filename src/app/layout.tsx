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
      <body className={raleway.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  )
}

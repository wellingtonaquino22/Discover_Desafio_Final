import './globals.css'
import { Montserrat } from 'next/font/google'

const monteserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Discover',
  description: 'Desafio Final Discover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={monteserrat.className}>{children}</body>
    </html>
  )
}

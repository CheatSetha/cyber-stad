import { Darker_Grotesque, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import NavbarTop from '@/components/NavbarTop'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

const darker_groteque = Darker_Grotesque({
  subsets: ['latin'],
 })

export const metadata = {
  title: 'Cyber-STAD',
  description: 'Cyber-STAD final project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={darker_groteque.className}>
        <NavbarTop />
        <Navbar />
        {children}
        
        </body>
    </html>
  )
}

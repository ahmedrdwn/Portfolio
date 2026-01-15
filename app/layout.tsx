import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { FloatingWhatsApp } from '@/components/ui/floating-whatsapp'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather'
})

export const metadata: Metadata = {
  title: 'Ahmed Radwan - PhD Researcher in Data Science',
  description: 'Portfolio of Ahmed Radwan, specializing in Operations Research, GTFS Analytics, and Intelligent Transit.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, merriweather.variable, "bg-slate-950 font-serif antialiased")}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}

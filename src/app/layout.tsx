import type { Metadata } from 'next'
import { Roboto, Bebas_Neue, Playfair } from 'next/font/google'
import './globals.css'
import {cn} from "@/utils/helper";
import {Navigation} from "@/components/Navigation";

const roboto = Roboto({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-roboto' })
const bebas = Bebas_Neue({ weight: ['400'], subsets: ['latin'], variable: '--font-bebas' })
const playfair = Playfair({ weight: ['400', '600'], subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'ClickWise Solutions',
  description: 'Shaping the digital landscape with innovative trends',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(roboto.className, bebas.variable, 'bg-zinc-900 text-zinc-50')}>
      <Navigation/>
      <main className='max-w-7xl mx-auto px-4 md:px-8 md:items-center'>
        {children}
      </main>
      </body>
    </html>
  )
}

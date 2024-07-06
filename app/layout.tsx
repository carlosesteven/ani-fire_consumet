import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { QueryProvider } from '@/lib/query-provider'
import { cn } from '@/lib/utils'
import Provider from '@/providers/provider'
import { Toaster } from '@/components/ui/toaster'
import localFont from "next/font/local"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const logoFont = localFont({
  src: '../public/fonts/logo-font.ttf',
  variable: '--font-logo',
  weight: '600'
})

export const metadata: Metadata = {
  title: 'AnimeCast - Web Version',
  description: 'Anime Cast allow you to enjoy of your favorite animes from the comfort of your mobile, allowing you to be up to date with all the latest releases',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.className, logoFont.variable, "dark:bg-black antialiased")}>
        <QueryProvider>
          <Provider>
            {children}
            <Toaster />
          </Provider>
        </QueryProvider>
      </body>
    </html>
  )
}

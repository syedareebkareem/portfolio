import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://yourname.dev'),
  title: 'Your Name - Web Developer',
  description: 'Custom web solutions for clients. Portfolio and freelance services.',
  keywords: 'web developer, freelancer, custom development, next.js',
  openGraph: {
    title: 'Your Name - Web Developer',
    description: 'Custom web solutions for clients.',
    url: 'https://yourname.dev',
    siteName: 'Your Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Your Name Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Web Developer',
    description: 'Custom web solutions for clients.',
    images: ['/og-image.png'],
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f9f9f9] dark:bg-[#0f0f0f] text-black dark:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
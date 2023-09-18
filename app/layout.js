import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Query Form',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <AuthProvider>
        <body className={inter.className}>
          {children}
        </body>
        </AuthProvider>
    </html>
  )
}

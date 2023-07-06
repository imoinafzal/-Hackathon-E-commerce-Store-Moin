import Navbar from '@/components/view/Navbar'
import './globals.css'
import {Maven_Pro} from 'next/font/google'
import Wrapper from '@/components/shared/wrapper'

const inter = Maven_Pro({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"]
 })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
        <Navbar />
        {children}
        </Wrapper>
        </body>
    </html>
  )
}

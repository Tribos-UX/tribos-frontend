import { Montserrat } from '@next/font/google'
import React, { ReactElement } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

type LayoutProps = {
  children: React.ReactNode
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className={montserrat.className}>{children}</main>
      <Footer />
    </>
  )
}

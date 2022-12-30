import { Montserrat } from '@next/font/google'
import React, { ReactElement } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ResponsiveAppBar from '../Navbar/ResponsiveAppBar'

type LayoutProps = {
  children: React.ReactNode
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ResponsiveAppBar />
      <main className={montserrat.className}>{children}</main>
      <Footer />
    </>
  )
}

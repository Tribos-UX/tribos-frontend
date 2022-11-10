import React, { ReactElement } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps ) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

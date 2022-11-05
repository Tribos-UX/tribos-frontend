import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

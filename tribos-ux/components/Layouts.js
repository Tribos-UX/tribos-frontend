import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: "1440px", width: "100%", margin: "0 auto" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

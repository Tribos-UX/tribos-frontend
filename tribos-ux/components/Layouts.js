import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </main>
  );
}

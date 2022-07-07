import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      <section>{children}</section>
    </main>
  );
}

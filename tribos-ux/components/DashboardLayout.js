import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  );
}

// Components
import Sidebar from "./Sidebar";

// Styles
import styles from "../components/DashboardLayout.module.scss";

export default function DashboardLayout({ children }) {
  return (
    <main>
      <div className={styles.container}>
        <Sidebar />
        {children}
      </div>
    </main>
  );
}

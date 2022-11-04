// Components
import Sidebar from "../../Sidebar/Sidebar";

// Styles
import styles from "../DashboardLayout/DashboardLayout.module.scss";

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

// Components
import Sidebar from '../Sidebar/Sidebar'

// Styles
import styles from '../DashboardLayout/DashboardLayout.module.scss'

import ButtonAppBar from '../AppBar/ButtonAppBar'

export default function DashboardLayout({ children }) {
  return (
    <main className={styles.container}>
      <Sidebar />
      <ButtonAppBar />
      {children}
    </main>
  )
}

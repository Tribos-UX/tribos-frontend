// Components
import Sidebar from '../Sidebar/Sidebar'

// Styles
import styles from '../DashboardLayout/DashboardLayout.module.scss'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export default function DashboardLayout({ children }) {
  return (
    <main className={styles.container}>
      <Sidebar />
      {children}
    </main>
  )
}
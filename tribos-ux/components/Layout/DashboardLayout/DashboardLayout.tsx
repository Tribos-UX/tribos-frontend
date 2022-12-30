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
export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx)
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }

    const { data: user, error, status } = await supabase
    .from('profiles')
    .select(`username, cidade, uf, description, linkedin, funcao`)
    .eq('id', session.user.id)

  if (error && status !== 406) {
    throw error
  }

  return {
    props: {
      initialSession: session,
      user: user,
    },
  }
}

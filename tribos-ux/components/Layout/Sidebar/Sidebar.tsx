// Nextjs
import Image from 'next/image'
import Link from 'next/link'

// Styles
import styles from './Sidebar.module.scss'

// Icons
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import {
  dashboardIcon,
  onePersonIcon,
  questionMarkIcon,
  twoPersonIcon,
} from '../../common/Icons'

export default function Sidebar() {
  const supabase = useSupabaseClient()
  const user = useUser()
  const session = useSession()
  const [data, setData] = useState(null)

  useEffect(() => {
    async function loadData() {
      const { data: avatar } = await supabase.storage
        .from('avatars')
        .createSignedUrl(`${session.user.id}.jpg`, 60)
      setData(avatar.signedUrl)
    }
    // Only run query once user is logged in.
    if (user) loadData()
    console.log(data)
  }, [user])

  return (
    <aside className={styles.sidebar_main} role="navigation">
      <picture className={styles.sidebar_avatar}>
        {data ? (
          <Image src={data} alt={'Avatar do usuário'} width={54} height={54} />
        ) : (
          'not image'
        )}
      </picture>
      <nav>
        <ul className={styles.sidebar_nav}>
          <li>
            <Link href={'/dashboard/home'} className={styles.sidebar_icons}>
              {dashboardIcon}
            </Link>
          </li>
          <li>
            <Link href={'/dashboard/groups'} className={styles.sidebar_icons}>
              {twoPersonIcon}
            </Link>
          </li>
          <li>
            <Link href={'/dashboard/profile'} className={styles.sidebar_icons}>
              {onePersonIcon}
            </Link>
          </li>
          <li>
            <Link href={'/dashboard/faq'} className={styles.sidebar_icons}>
              {questionMarkIcon}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

// Nextjs
import Image from 'next/image'
import Link from 'next/link'

// Styles
import styles from './Sidebar.module.scss'

// Icons
import {
  dashboardIcon,
  onePersonIcon,
  questionMarkIcon,
  twoPersonIcon,
} from '../../common/Icons'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

export default function Sidebar() {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const [data, setData] = useState(null)

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient
        .from('profiles')
        .select('avatar_url')
      setData(data)
    }
    // Only run query once user is logged in.
    if (user) loadData()
  }, [user])

  return (
    <aside className={styles.sidebar_main} role="navigation">
      <picture className={styles.sidebar_avatar}>

        {data ?  <Image
          src={
            data
          }
          alt={'Avatar do usuário'}
          width={54}
          height={54}
        /> :  <Image
        src={
          'https://res.cloudinary.com/deaejawfj/image/upload/v1672162214/figma-dynamic-color_o4ccal.png'
        }
        alt={'Avatar do usuário'}
        width={54}
        height={54}
      /> }
       
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

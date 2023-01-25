// Nextjs Tools
import Image from 'next//image'
import Link from 'next/link'

// Components
import Agenda from '../../components/Agenda/Agenda'

// Dashboard Layout
import DashboardLayout from '../../components/Layout/DashboardLayout/DashboardLayout'

// Images
import groupsImageRectangle from '../../public/groupsImageRectangle.png'

// Styles
import { shareIcon, sinalMais } from '../../components/common/Icons'

// Supabase
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

// React
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  useState,
} from 'react'

// Styles
import GroupCards from '@/components/Cards/GroupCards/GroupCards'

import ModalEditInfo from '@/components/Modals/Info/EditInfo/ModalEditInfo'
import ModalEditProfilePhoto from '@/components/Modals/Profile/ModalEditProfilePhoto'
import TabProfile from '@/components/Tabs/Profile/TabProfile'
import styles from '../../styles/DashboardHome.module.scss'

export default function Profile({ user, avatar, email, id }) {
  const [changeTab, setChangeTab] = useState(1)

  return (
    <>
      <div className={styles.groups}>
        <section className={styles.groups_usuario}>
          <div className={styles.container}>
            <div className={styles.groups_usuario_imagem_principal}>
              <Image
                className={styles.groups_usuario_imagem_rectangle}
                src={groupsImageRectangle}
                alt="Imagem tema do usuario"
                width={781}
                height={255}
              />
              <div className={styles.avatar}>
                {avatar ? (
                  <Image
                    className={styles.groups_usuario_imagem_perfil}
                    alt="Remy Sharp"
                    width={188}
                    height={188}
                    src={avatar.signedUrl}
                  />
                ) : (
                  'Avatar não selecionado!'
                )}
                <div className={styles.profile_photo_info}>
                  <ModalEditProfilePhoto />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groups_usuario_infos}>
            <div className={styles.groups_usuario_infos_descricao}>
              <strong>{user[0].username}</strong>
              <p>{user[0].funcao}</p>
            </div>
            <div className={styles.groups_usuario_infos_buttons}>
              {user[0].areasUx &&
                user[0].areasUx.map(
                  (
                    areas:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                  ) => <button>{areas}</button>
                )}
            </div>
            <div>
              <ModalEditInfo />
            </div>
          </div>
        </section>
        <section>
          <button className={styles.agenda_button}>Agenda</button>
        </section>
        <TabProfile
          description={user[0].description}
          cidade={user[0].cidade}
          uf={user[0].uf}
          linkedin={user[0].linkedin}
          email={email}
        />
      </div>
      <aside className={styles.agenda}>
        <Agenda id={id} />
      </aside>
    </>
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

  const {
    data: user,
    error,
    status,
  } = await supabase
    .from('profiles')
    .select(`username, cidade, uf, description, linkedin, funcao`)
    .eq('id', session.user.id)

  const { data: avatar } = await supabase.storage
    .from('avatars')
    .createSignedUrl(`${session.user.id}.jpg`, 60)

  if (error && status !== 406) {
    throw error
  }

  return {
    props: {
      initialSession: session,
      user: user,
      avatar: avatar.signedUrl,
      email: session.user.email,
      id: session.user.id,
    },
  }
}

Profile.getLayout = function getLayout(page: any) {
  return <DashboardLayout>{page}</DashboardLayout>
}

// Nextjs Tools
import Image from 'next//image'
import Link from 'next/link'

// Dashboard Layout
import Agenda from '../../components/Agenda/Agenda'
import DashboardLayout from '../../components/Layout/DashboardLayout/DashboardLayout'

// Images
import groupsImageRectangle from '../../public/groupsImageRectangle.png'
import imagemPerfilGroups from '../../public/imagemPerfilGroups.png'

// Styles
import { shareIcon, sinalMais } from '../../components/common/Icons'

// Supabase
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

// React
import { useState } from 'react'

// Styles
import styles from '../../styles/DashboardHome.module.scss'
import Avatar from '@mui/material/Avatar'

export default function Groups({ username, funcao, avatar_url }) {
  const [days, setDays] = useState('')

  return (
    <>
      <div>
        <section className={styles.groups_usuario}>
          <div className={styles.container}>
            <div className={styles.groups_usuario_imagem_principal}>
              <Image
                className={styles.groups_usuario_imagem_rectangle}
                src={groupsImageRectangle}
                alt="Imagem tema do usuario"
              />

              <Avatar
                className={styles.groups_usuario_imagem_perfil}
                alt="Remy Sharp"
                src={avatar_url}
                sx={{ width: 188, height: 188 }}
              />
            </div>
            <div className={styles.groups_usuario_infos}>
              <div className={styles.groups_usuario_infos_descricao}>
                <strong>{username}</strong>
                <p>{funcao}</p>
              </div>
              <div className={styles.groups_usuario_infos_buttons}>
                <button> Research</button>
                <button>Wireframe</button>
                <button>Agile </button>
                <span> {shareIcon} </span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={`${styles.container}`}>
            <div className={styles.grupos_usario}>
              <ul>
                <li>Meus grupos</li>
                <li>Grupos que administro</li>
              </ul>
            </div>
            <div className={styles.grupos_container}>
              <Link
                href={'/dashboard/group/newgroup'}
                className={styles.grupos_usario_button}
              >
                <span className={styles.grupos_usuario_signal}>
                  {sinalMais}
                </span>
                Criar Grupo
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Agenda dayOfweek={days} />
      </div>
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

  let { data, error, status } = await supabase
    .from('profiles')
    .select('username,funcao,avatar_url')
    .eq('id', session.user.id)

  const { data: avatar } = await supabase.storage
    .from('avatars')
    .createSignedUrl(`${session.user.id}.jpg`, 60)

  if (error) {
    throw error
  }

  if (!session)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }

  return {
    props: {
      initialSession: session,
      id: session.user.id,
      username: data[0].username,
      funcao: data[0].funcao,
      avatar_url: avatar,
    },
  }
}

Groups.getLayout = function getLayout(page: any) {
  return <DashboardLayout>{page}</DashboardLayout>
}

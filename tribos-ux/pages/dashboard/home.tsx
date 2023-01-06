// Nextjs Tools
import Image from 'next//image'
import Link from 'next/link'

// Dashboard Layout
import Agenda from '../../components/Agenda/Agenda'
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
import styles from '../../styles/DashboardHome.module.scss'

export default function Groups({
  username,
  funcao,
  avatar_url,
  areasUx,
  grupos,
  imageGroup,
}) {
  const [days, setDays] = useState('')

  console.log(`season ${imageGroup}`)

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
              {avatar_url ? (
                <Image
                  className={styles.groups_usuario_imagem_perfil}
                  alt="Remy Sharp"
                  width={188}
                  height={188}
                  src={avatar_url.signedUrl}
                />
              ) : (
                'Avatar não selecionado!'
              )}
            </div>
            <div className={styles.groups_usuario_infos}>
              <div className={styles.groups_usuario_infos_descricao}>
                <strong>{username}</strong>
                <p>{funcao}</p>
              </div>
              <div className={styles.groups_usuario_infos_buttons}>
                {areasUx &&
                  areasUx.map(
                    (
                      areas:
                        | string
                        | number
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | ReactFragment
                    ) => <button>{areas}</button>
                  )}
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
    .select('username,funcao,avatar_url,areasux')
    .eq('id', session.user.id)

  let { data: grupos } = await supabase
    .from('groups')
    .select('groupname, privacidade')
    .eq('criador', session.user.id)

  console.log(`session home : ${data[0].username}`)
  console.log(`session : ${grupos[0]}`)

  const { data: avatar } = await supabase.storage
    .from('avatars')
    .createSignedUrl(`${session.user.id}.jpg`, 60)

  const { data: imageGroup } = await supabase.storage
    .from('groups')
    .createSignedUrl(`${grupos}.jpg`, 60)

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
      areasUx: data[0].areasux,
      grupos: grupos,
      imageGroup: imageGroup,
    },
  }
}

Groups.getLayout = function getLayout(page: any) {
  return <DashboardLayout>{page}</DashboardLayout>
}

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

import styles from '../../styles/DashboardHome.module.scss'

export default function Groups({
  id,
  username,
  funcao,
  avatar_url,
  areasUx,
  grupos,
  imageGroup,
}) {
  const [changeTab, setChangeTab] = useState(1)

  console.log(imageGroup)

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
            </div>
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
        </section>
        <section>
          <button className={styles.agenda_button}>Agenda</button>
          <div className={`${styles.container}`}>
            <div className={styles.grupos_usario}>
              <ul>
                <li>
                  <button
                    className={
                      changeTab === 1
                        ? `${styles.button_active}`
                        : `${styles.button}`
                    }
                    onClick={() => setChangeTab(1)}
                    type="button"
                  >
                    Meus grupos
                  </button>
                </li>
                <li>
                  <button
                    className={
                      changeTab === 2
                        ? `${styles.button_active}`
                        : `${styles.button}`
                    }
                    onClick={() => setChangeTab(2)}
                  >
                    Grupos que administro
                  </button>
                </li>
              </ul>
            </div>
            {changeTab === 1 ? (
              <div className={styles.grupos_container}>
                <Link
                  href={'/dashboard/group/newgroup'}
                  className={styles.grupos_usario_button}
                >
                  <span className={styles.grupos_usuario_signal}>
                    {
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.48711 8.94845C0.906359 8.94845 0.435565 9.41925 0.435565 10C0.435565 10.5808 0.906359 11.0515 1.48711 11.0515L8.84795 11.0515L8.84795 18.4124C8.84795 18.9931 9.31874 19.4639 9.89949 19.4639C10.4802 19.4639 10.951 18.9931 10.951 18.4124L10.951 11.0515H18.3119C18.8926 11.0515 19.3634 10.5808 19.3634 10C19.3634 9.41925 18.8926 8.94845 18.3119 8.94845H10.951L10.951 1.58762C10.951 1.00687 10.4802 0.536072 9.89949 0.536072C9.31874 0.536071 8.84795 1.00687 8.84795 1.58762L8.84795 8.94845L1.48711 8.94845Z"
                          fill="#556176"
                        />
                      </svg>
                    }
                  </span>
                  Criar Grupo
                </Link>

                {grupos &&
                  grupos.map(
                    (grupos: {
                      description: string
                      groupname: string
                      id: number
                    }) => (
                      <GroupCards
                        description={grupos.description}
                        groupName={grupos.groupname}
                        buttons={[]}
                        daysWeek={''}
                        moderated={false}
                        activemembers={0}
                        allmembers={0}
                        moderador={true}
                        id={grupos.id}
                      />
                    )
                  )}
              </div>
            ) : (
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
            )}
          </div>
        </section>
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

  let { data, error, status } = await supabase
    .from('profiles')
    .select('username,funcao,avatar_url,areasux')
    .eq('id', session.user.id)

  let { data: grupos } = await supabase
    .from('groups')
    .select('id, groupname, privacidade, description')
    .eq('criador', session.user.id)

  const { data: avatar } = await supabase.storage
    .from('avatars')
    .createSignedUrl(`${session.user.id}.jpg`, 60)

  const { data: imageGroup } = await supabase.storage
    .from('imagegroups')
    .createSignedUrl(
      `_${grupos[0].groupname.toLowerCase().replace(/ /g, '_')}.jpg`,
      60
    )

  console.log(imageGroup)

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

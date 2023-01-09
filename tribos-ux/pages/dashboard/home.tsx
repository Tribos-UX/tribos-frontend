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
  avatar,
  areasUx,
  grupos,
  imageGroup,
}) {
  const [changeTab, setChangeTab] = useState(1)
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
                    {sinalMais}
                  </span>
                  Criar Grupo
                </Link>

                {grupos &&
                  grupos.map((grupos) => (
                    <GroupCards
                      imageSrc={imageGroup.signedUrl}
                      description={grupos.description}
                      groupName={grupos.groupname}
                      buttons={[]}
                      daysWeek={''}
                      moderated={false}
                      activemembers={0}
                      allmembers={0}
                    />
                  ))}
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
      <div className={styles.agenda}>
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
    .select('groupname, privacidade, description')
    .eq('criador', session.user.id)

  const { data: avatar } = await supabase.storage
    .from('avatars')
    .createSignedUrl(`${session.user.id}.jpg`, 60)

  const { data: imageGroup } = await supabase.storage
    .from('imagegroups')
    .createSignedUrl(`${grupos[0]?.groupname}.jpg`, 60)

  console.log(session)

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

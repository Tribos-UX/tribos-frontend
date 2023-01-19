// Nextjs Image
import Image from 'next//image'

// Dashboard Layout
import DashboardLayout from '../../components/Layout/DashboardLayout/DashboardLayout'

// Components
import TabProfile from '@/components/Tabs/Profile/TabProfile'
import Calendar from '../../components/Calendar/Calendar'
import ModalEditInfo from '../../components/Modals/Info/EditInfo/ModalEditInfo'
import ModalEditProfilePhoto from '../../components/Modals/Profile/ModalEditProfilePhoto'

// Images
import groupsImageRectangle from '../../public/groupsImageRectangle.png'

// Styles
import styles from '../../styles/Profile.module.scss'

// Supabase
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export default function Groups({ user, avatar, email }) {
  return (
    <>
      <div className={styles.container_profile}>
        <div className={styles.profile_info}>
          <div className={styles.profile_img}>
            <Image
              className={styles.profile_img_rectangle}
              src={groupsImageRectangle}
              alt="Imagem tema do usuario"
              width={200}
              height={200}
            />
            <Image
              className={styles.profile_img_perfil}
              src={avatar}
              alt="Imagem de Perfil"
              width={200}
              height={200}
            />
            <div className={styles.profile_user_info}>
              <div className={styles.profile_user_description}>
                <h1>{user[0].username}</h1>
                <p>{user[0].funcao}</p>
              </div>
              <div className={styles.profile_tags_info}>
                <div className={styles.profile_tags}>
                  <button>Research</button>
                  <button>Wireframe</button>
                  <button>Agile </button>
                </div>
                <ModalEditInfo />
              </div>
            </div>
            <div className={styles.profile_photo_info}>
              <ModalEditProfilePhoto />
            </div>
          </div>
        </div>
        <TabProfile
          description={user[0].description}
          cidade={user[0].cidade}
          uf={user[0].uf}
          linkedin={user[0].linkedin}
          email={email}
        />
      </div>
      <aside></aside>
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

  console.log(session)
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
    },
  }
}

Groups.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}

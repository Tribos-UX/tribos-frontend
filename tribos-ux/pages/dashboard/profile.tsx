// Nextjs Image
import Image from 'next//image'

// Dashboard Layout
import DashboardLayout from '../../components/Layout/DashboardLayout/DashboardLayout'

// Components
import Agenda from '../../components/Agenda/Agenda'
import { shareIcon, sinalMais } from '../../components/common/Icons'
import ModalEditInfo from '../../components/Modals/Info/EditInfo/ModalEditInfo'
import ModalEditProfilePhoto from '../../components/Modals/Profile/ModalEditProfilePhoto'
import Calendar from '../../components/Calendar/Calendar'

// Images
import groupsImageRectangle from '../../public/groupsImageRectangle.png'
import imagemPerfilGroups from '../../public/imagemPerfilGroups.png'

// Styles
import TabProfile from '@/components/Tabs/Profile/TabProfile'
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import styles from '../../styles/Profile.module.scss'

export default function Groups() {
  const supabase = useSupabaseClient()
  const session = useSession()
  const user = useUser()

  const [username, setUsername] = useState('')
  const [funcao, setFuncao] = useState('')

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, funcao`)
        .eq('id', user.id)

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data[0].username)
        setFuncao(data[0].funcao)
      }
    } catch (error) {
      console.log(error)
    }
    console.log(session, user)
  }

  useEffect(() => {
    getProfile()
  }, [session])

  return (
    <>
      <div className={styles.container_profile}>
        <div className={styles.profile_info}>
          <div className={styles.profile_img}>
            <Image
              className={styles.profile_img_rectangle}
              src={groupsImageRectangle}
              alt="Imagem tema do usuario"
            />
            <Image
              className={styles.profile_img_perfil}
              src={imagemPerfilGroups}
              alt="Imagem de Perfil"
            />
            <div className={styles.profile_user_info}>
              <div className={styles.profile_user_description}>
                <h1>{username}</h1>
                <p>{funcao}</p>
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
        <TabProfile />
      </div>
      <aside>
        <Calendar />
      </aside>
    </>
  )
}

Groups.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}

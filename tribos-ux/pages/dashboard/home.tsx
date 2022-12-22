// Nextjs Image
import Image from 'next//image'

// Dashboard Layout
import Agenda from '../../components/Agenda/Agenda'
import DashboardLayout from '../../components/Layout/DashboardLayout/DashboardLayout'

// Images
import groupsImageRectangle from '../../public/groupsImageRectangle.png'
import imagemPerfilGroups from '../../public/imagemPerfilGroups.png'

// Styles
import { shareIcon, sinalMais } from '../../components/common/Icons'

import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../../styles/DashboardHome.module.scss'

export default function Groups() {
  const [days, setDays] = useState('')
  const [username, setUsername] = useState('')
  const supabase = useSupabaseClient()
  const session = useSession()
  const user = useUser()

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
      }
    } catch (error) {
      console.log(error)
    }
    console.log(user)
  }

  return (
    <>
      <section>
        <section className={styles.groups_usuario}>
          <div className={styles.container}>
            <div className={styles.groups_usuario_imagem_principal}>
              <Image
                className={styles.groups_usuario_imagem_rectangle}
                src={groupsImageRectangle}
                alt="Imagem tema do usuario"
              />
              <Image
                src={imagemPerfilGroups}
                alt="Imagem de Perfil"
                className={styles.groups_usuario_imagem_perfil}
              />
            </div>
            <div className={styles.groups_usuario_infos}>
              <div className={styles.groups_usuario_infos_descricao}>
                <h1>{username}</h1>
                <p>UX Designer</p>
              </div>
              <div className={styles.groups_usuario_infos_buttons}>
                <button> Research</button>
                <button>Wireframe</button>
                <button>Agile </button>
                {shareIcon}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={`${styles.container}`}>
            <nav className={styles.grupos_usario}>
              <ul>
                <li>Meus grupos</li>
                <li>Grupos que administro</li>
              </ul>
            </nav>
            <div className={styles.grupos_container}>
              <Link
                href={'/dashboard/group/newgroup'}
                className={styles.grupos_usario_button}
              >
                <div className={styles.grupos_usuario_signal}>{sinalMais}</div>
                <div className={styles.grupos_usuario_text}>Criar Grupo</div>
              </Link>
            </div>
          </div>
        </section>
      </section>
      <aside>
        <Agenda dayOfweek={days} />
      </aside>
    </>
  )
}

Groups.getLayout = function getLayout(page: any) {
  return <DashboardLayout>{page}</DashboardLayout>
}

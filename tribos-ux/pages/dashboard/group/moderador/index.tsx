// Nextjs Image
import Image from 'next//image'

// Components

// Styles
import TabCreatedGroup from '@/components/Tabs/Group/Created/TabCreatedGroup'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { useEffect, useState } from 'react'
import DashboardLayout from '../../../../components/Layout/DashboardLayout/DashboardLayout'
import styles from '../../../../styles/Moderador.module.scss'

export default function Grupos() {
  const supabase = useSupabaseClient()
  const user = useUser()
  const router = useRouter()
  const { id } = router.query

  const [grupos, setGrupos] = useState<any>({})
  const [image, setImage] = useState<any>({})

  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabase
        .from('groups')
        .select('*')
        .filter('id', 'eq', id)
        .single()

      if (error) {
        console.log(error)
      }

      const { data: imageGroup } = await supabase.storage
        .from('imagegroups')
        .createSignedUrl(`_${data.groupname}.jpg`, 60)

      if (error) {
        console.log(error)
      } else {
        setGrupos(data)
        setImage(imageGroup.signedUrl)
      }
    }
    // Only run query once user is logged in.
    if (typeof id !== 'undefined') {
      loadData()
    }
  }, [id])

  return (
    <>
      <section>
        <section className={styles.groups_usuario}>
          <div className={styles.container}>
            <div className={styles.groups_usuario_imagem_principal}>
              <Image
                className={styles.groups_usuario_imagem_rectangle}
                src={image}
                alt="Imagem tema do usuario"
                width={761}
                height={250}
              />
              <div className={styles.groups_usuario_infos}>
                <div className={styles.groups_usuario_infos_descricao}>
                  <h1>{grupos.groupname}</h1>
                  <p>Grupo sobre estudo de caso</p>
                </div>
                <div className={styles.new_group_tags_info}>
                  <div className={styles.groups_usuario_infos_buttons}>
                    <button>Case</button>
                    <button>Design</button>
                    <button>Pesquisa</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={`${styles.container}`}>
            <TabCreatedGroup
              description={grupos.description}
              cidade={grupos.cidade}
              discord={grupos.discord}
              membros={grupos.membros}
              privacidade={grupos.privacidade}
            />
          </div>
        </section>
      </section>
    </>
  )
}

Grupos.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}

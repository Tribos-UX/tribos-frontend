import { useState, useEffect } from 'react'

import styles from '../../styles/Groups.module.scss'

import { supabase } from 'pages/api/supabase'

import DashboardLayout from '../../components/Layout/DashboardLayout/DashboardLayout'
import GroupCards from '@/components/Cards/GroupCards/GroupCards'
import GroupCard from '@/components/GroupsList/GroupCard'

export default function Groups() {
  const slide = [
    <GroupCards
      imageSrc={
        'https://res.cloudinary.com/deaejawfj/image/upload/v1668524222/tribos-ux/Image_block_gx9jbc.png'
      }
      description={'Grupo sobre Estudo de Caso'}
      groupName={'Grupo UX on Focus'}
      buttons={['Case', 'Design', 'Pesquisa']}
      daysWeek={'Quintas'}
      moderated={true}
      activemembers={4}
      allmembers={8}
    />,
  ]

  // Groups
  const [fetchError, setFetchError] = useState(null)
  const [groups, setGroups] = useState(null)

  // Groups UseEffect

  useEffect(() => {
    const fetchGroups = async () => {
      const { data, error } = await supabase.from('groups').select()

      if (error) {
        setFetchError('Could not fetch the groups')
        setGroups(null)
        console.log(error)
      }

      if (data) {
        setGroups(data)
        setFetchError(null)
      }
    }

    fetchGroups()
  }, [])

  return (
    <div className={styles.container_groups}>
      <div className={styles.groups_intro}>
        <h1>Que tal pesquisar um novo grupo?</h1>

        <div className={styles.groups_input_area}>
          <input
            className={styles.input_name_group}
            placeholder="Digite aqui o nome do grupo"
            type="text"
          />

          <div className={styles.match_group_select}>
            <select>
              <option>Estado</option>
            </select>

            <select>
              <option>Assunto</option>
            </select>

            <select>
              <option>Objetivo</option>
            </select>

            <select>
              <option>Agenda</option>
            </select>
          </div>

          <div className={styles.match_groups_button}>
            <button>Pesquisar</button>
          </div>
        </div>
      </div>

      <div className={styles.match_groups}>
        <h1>Grupos que dão match com você</h1>
        <div className={styles.card_groups}>
          {fetchError && <p>{fetchError}</p>}
          {groups && (
            <div>
              {groups.map((group: any) => (
                <GroupCard key={group.id} group={group} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Groups.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}

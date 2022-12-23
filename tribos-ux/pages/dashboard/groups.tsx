import styles from '../../styles/Groups.module.scss'

import DashboardLayout from '../../components/Layout/DashboardLayout/DashboardLayout'
import GroupCards from '@/components/Cards/GroupCards/GroupCards'

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
          <div>{slide}</div>
          <div>{slide}</div>
          <div>{slide}</div>
        </div>
      </div>
    </div>
  )
}

Groups.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}

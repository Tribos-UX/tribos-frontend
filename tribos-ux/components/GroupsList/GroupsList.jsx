// Nextjs tools
import Image from 'next//image'

// Image
import groupCardImg from '../../public/ImagemDoCard.png'

// Context
import { useGroupsContext } from '../providers/GroupsProvider'

// Styles
import styles from '../../components/GroupsList/GroupsList.module.scss'

// Components
import ModalAddGroupDetails from '../Modals/AddGroupDetails/ModalAddGroupDetails'

const GroupsList = () => {
  const { groupsList } = useGroupsContext()
  return (
    <div className={styles.groups_area}>
      {groupsList.map((item, index) => (
        <div className={styles.groups_card}>
          <>
            <Image src={groupCardImg} width={330} height={340} />
          </>
          <span>Grupo sobre Estudo de Caso</span>
          <ul>
            <li key={index}>{item}</li>
          </ul>
          <div className={styles.groups_tags}>
            <p>Case</p>
            <p>Design</p>
            <p>Pesquisa</p>
          </div>
          <div className={styles.group_details}>
            <ModalAddGroupDetails />
          </div>
        </div>
      ))}
    </div>
  )
}

export default GroupsList

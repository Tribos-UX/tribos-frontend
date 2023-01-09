// Nextjs tools
import Image from 'next//image'

// Image
import groupCardImg from '../../public/ImagemDoCard.png'

// Styles
import styles from '../../components/GroupsList/GroupsList.module.scss'

// Components
import ModalAddGroupDetails from '../Modals/AddGroupDetails/ModalAddGroupDetails'

const GroupCard = ({ group }) => {
  return (
    <div className={styles.groups_card}>
      <>
        <Image src={groupCardImg} width={330} height={340} />
      </>
      <span>Grupo sobre Estudo de Caso</span>
      <ul>
        <li>{group.groupname}</li>
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
  )
}

export default GroupCard

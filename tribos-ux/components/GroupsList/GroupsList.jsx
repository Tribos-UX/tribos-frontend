// Nextjs tools
import Image from 'next//image'

import { useGroupsContext } from '../providers/GroupsProvider'
import styles from '../../components/GroupsList/GroupsList.module.scss'
import ModalAddGroupDetails from '../Modals/AddGroupDetails/ModalAddGroupDetails'
import groupCardImg from '../../public/ImagemDoCard.png'

const GroupsList = () => {
  const { groupsList } = useGroupsContext()
  return (
    <div className={styles.groups_area}>
      {groupsList.map((item, index) => (
        <div className={styles.groups_card}>
          <>
            <Image src={groupCardImg} width={330} height={340} />
          </>
          <ul>
            <li key={index}>{item}</li>
          </ul>
          <ModalAddGroupDetails />
        </div>
      ))}
    </div>
  )
}

export default GroupsList

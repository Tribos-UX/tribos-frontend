import { useGroupsContext } from '../providers/GroupsProvider'
import styles from '../../components/GroupsList/GroupsList.module.scss'
import ModalAddGroupDetails from '../Modals/AddGroupDetails/ModalAddGroupDetails'

const GroupsList = () => {
  const { groupsList } = useGroupsContext()
  return (
    <div className={styles.groups}>
      {groupsList.map((item, index) => (
        <ul>
          <li className={styles.groups_card} key={index}>
            {item}
          </li>
          <ModalAddGroupDetails />
        </ul>
      ))}
    </div>
  )
}

export default GroupsList

import React from 'react'
import GroupsList from '../components/GroupsList/GroupsList'
import ModalAddGroup from '../components/Modals/AddGroup/ModalAddGroup'
import { useGroupsContext } from '../components/providers/GroupsProvider'
import styles from '../components/GroupsList/GroupsForm.module.scss'

function Groups() {
  const { getNumberOfListItems } = useGroupsContext()
  return (
    <div className={styles.nog_list}>
      <h3>Number of groups:{getNumberOfListItems()} </h3>
      <GroupsList />
      <div>
        <ModalAddGroup />
      </div>
    </div>
  )
}

export default Groups

import { useState } from 'react'
import { useGroupsContext } from '../providers/GroupsProvider'
import styles from '../GroupsList/GroupsForm.module.scss'

const GroupsForm = () => {
  const { addItem } = useGroupsContext()
  const [groupItem, setGroupItem] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()

    addItem(groupItem)

    setGroupItem('')
  }

  return (
    <form className={styles.groups_form} onSubmit={handleOnSubmit}>
      <input
        className={styles.groups_form_input}
        type="text"
        placeholder="Digite o nome do seu grupo"
        value={groupItem}
        onChange={(e) => setGroupItem(e.target.value)}
      />
      <button type="submit">Criar Grupo</button>
    </form>
  )
}

export default GroupsForm

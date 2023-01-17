// React Hooks
import { useState } from 'react'

// Styles
import styles from '../Calendar/Calendar.module.scss'

// Components
import { AddArea } from '../AddArea'
import { AgendaIcon } from '../common/Icons'
import { ListItem } from '../ListItem'

// Types
import { Item } from '../types/Item'

export default function Calendar() {
  const [list, setList] = useState<Item[]>([])

  {
    const handleAddTask = (taskName: string) => {
      let newList = [...list]
      newList.push({
        id: list.length + 1,
        name: taskName,
      })
      setList(newList)
    }

    return (
      <div className={styles.calendar}>
        <div className={styles.agenda}>
          <AgendaIcon />
          <h1>Sua agenda</h1>
          <AddArea onEnter={handleAddTask} />
        </div>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    )
  }
}

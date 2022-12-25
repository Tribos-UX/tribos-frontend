import { useState } from 'react'

import styles from '../Calendar/Calendar.module.scss'
import ModalCreateTask from '../Modals/Task/ModalCreateTask'

import { Item } from '../types/Item'
import { ListItem } from '../ListItem'
import { AddArea } from '../AddArea'
import { AgendaIcon } from '../common/Icons'

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

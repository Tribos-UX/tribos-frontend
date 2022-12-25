import React, { useState, KeyboardEvent } from 'react'
import styles from '../AddArea/AddArea.module.scss'

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
  const [task, setTask] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && task !== '') {
      onEnter(task)
      setTask('')
    }
  }

  return (
    <div>
      <>
        <input
          className={styles.add_area_input}
          type="text"
          placeholder="Digite um titulo..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={handleKeyUp}
        />
      </>
    </div>
  )
}

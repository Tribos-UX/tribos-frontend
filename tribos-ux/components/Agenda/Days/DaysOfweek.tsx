import React from 'react'
import styles from '../Days/DaysOfweek.module.scss'

export default function DaysOfweek({
  day,
  number,
}: {
  day: string
  number: number
}) {
  return (
    <div className={styles.container}>
      <p className={styles.day}>{day.slice(0, 3)}</p>
      <p className={styles.number}>{number}</p>
    </div>
  )
}

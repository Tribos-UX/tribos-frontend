// Styles
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
      <div className={styles.day}>{day}</div>
      <p className={styles.number}>{number}</p>
    </div>
  )
}

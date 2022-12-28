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
      <button className={styles.day}>{day}</button>
      <p className={styles.number}>{number}</p>
    </div>
  )
}

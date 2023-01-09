// Styles
import { Box, Button, Grid } from '@mui/material'
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
    <Button>
      {day}
      {number}
    </Button>
  )
}

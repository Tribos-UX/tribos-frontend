import React from 'react'
import { ChevronRightOutlined, PinIcon } from '../common/Icons'
import styles from '../ListItem/ListItem.module.scss'
import { Item } from '../types/Item'

type Props = {
  item: Item
}

export const ListItem = ({ item }: Props) => {
  return (
    <div className={styles.card_task}>
      <PinIcon />
      <h1>{item.name}</h1>
      <ChevronRightOutlined />
    </div>
  )
}

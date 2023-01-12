// React
import React, { useEffect, useState } from 'react'

// Icons
import { default as IconButton } from '@mui/material/IconButton'
import {
  AgendaIcon,
  ChevronRightOutlined,
  PinIcon,
  sinalMais,
} from '../common/Icons'
// Icons
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'

// Carousel With Arrows
import CarouselWithArrows from '../Carousel/CarouselWithArrows'

// Material Design
import { Avatar, ListItemText } from '@mui/material'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Typography from '@mui/material/Typography'

// Styles
import styles from './Agenda.module.scss'

// Components
import dynamic from 'next/dynamic'
import Example from '../Carousel/CarouselMUI/Example'
import CarouselWithArrow from '../Carousel/CarouselWithArrows'
import ModalCreateTask from '../Modals/Task/ModalCreateTask'
import DaysOfweek from './Days/DaysOfweek'

const DynamicCarouselWithNoSSR = dynamic(
  () => import('../Carousel/CarouselWithArrows'),
  {
    ssr: false,
  }
)

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  )
}

export default function Agenda() {
  const [dense, setDense] = React.useState(false)
  const [openModal, setOpenModal] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  const supabase = useSupabaseClient()
  const user = useUser()
  const session = useSession()
  const [data, setData] = useState(null)

  useEffect(() => {
    async function loadData() {
      const { data: tarefas, error } = await supabase
        .from('profiles')
        .select('tarefas')
        .eq('id', user.id)
      tarefas === undefined || tarefas.length === 0
        ? setData('Não possui tarefas')
        : error || tarefas.length === 0
      setData('Não possui tarefas')
    }
    // Only run query once user is logged in.
    if (user) loadData()
  }, [])

  const slide = [<DaysOfweek day={'seg'} number={1} />]

  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        <span className={styles.agenda_icon}>{<AgendaIcon />}</span>
        Sua agenda
        <IconButton
          onClick={() => setOpenModal(!openModal)}
          aria-label="adicionar"
        >
          {sinalMais}
        </IconButton>
      </div>
      <DynamicCarouselWithNoSSR slides={slide} />

      <Grid item xs={12} md={6}>
        <List
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
          }}
          dense={dense}
        >
          {data === Array ? (
            <>
              <div>
                {data.map(({ tarefas }, index) => (
                  <ListItemText key={index} primary={`${tarefas.data}`} />
                ))}
              </div>
              <ListItem
                sx={{
                  background: '#FBFBFC',
                  boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1)',
                  borderRadius: '0.5rem',
                  width: '388px',
                }}
                secondaryAction={
                  <IconButton edge="end" aria-label="mostrar dia da semana">
                    <ChevronRightOutlined />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      background: '#f2f2f2',
                      borderRadius: 1,
                    }}
                  >
                    <PinIcon />
                  </Avatar>
                </ListItemAvatar>
                {data.map(({ tarefas }, index) => (
                  <ListItemText key={index} primary={`${tarefas.tarefa}`} />
                ))}
              </ListItem>
            </>
          ) : (
            'Não possui tarefas'
          )}
        </List>
      </Grid>
      {
        <ModalCreateTask
          open={openModal}
          handleOpen={() => handleOpen}
          handleClose={() => handleClose()}
        />
      }
    </div>
  )
}

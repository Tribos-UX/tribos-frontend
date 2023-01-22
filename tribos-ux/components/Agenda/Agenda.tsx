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
import { useSupabaseClient } from '@supabase/auth-helpers-react'

// Material Design
import { Avatar, ListItemText } from '@mui/material'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'

// Styles
import styles from './Agenda.module.scss'

// Components
import dynamic from 'next/dynamic'
import CarouselWithArrow from '../Carousel/CarouselWithArrows'
import ModalCreateTask from '../Modals/Task/ModalCreateTask'
import DaysOfweek from './Days/DaysOfweek'

const DynamicCarouselWithNoSSR = dynamic(
  () => import('../Carousel/CarouselWithArrows'),
  {
    ssr: false,
  }
)

export default function Agenda({ id }) {
  const [dense, setDense] = React.useState(false)
  const [openModal, setOpenModal] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  const supabase = useSupabaseClient()

  const [data, setData] = useState(null)
  const [daysWeek, setDaysWeek] = useState(null)

  useEffect(() => {
    const getTarefas = () => {
      supabase
        .from('todos')
        .select('task,description,color,end_at,start_at')
        .eq('user_id', id)
        .then((result) => setData(result.data))
    }

    getTarefas()

    // Only run query once user is logged in.
  }, [data])

  console.log(data)

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  } as const

  const slide = [<DaysOfweek day={`seg`} number={2} />]

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

      <Grid sx={{ marginTop: '1.875rem' }} item xs={12} md={6}>
        {data
          ? data.map(
              (
                tarefa: {
                  start_at: string | Date
                  task: string
                  color: string
                },
                index: React.Key
              ) => {
                const inicio = new Date(tarefa.start_at).toLocaleDateString(
                  'pt-BR',
                  options
                )

                const days = new Date(tarefa.start_at).toLocaleDateString(
                  'pt-BR',
                  { weekday: 'long', day: 'numeric' }
                )

                return (
                  <List
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',

                      gap: 1.5,
                    }}
                    dense={dense}
                    key={index}
                  >
                    <ListItemText
                      sx={{ marginX: '1.75rem' }}
                      key={index}
                      primary={`${inicio[0].toUpperCase() + inicio.slice(1)}`}
                    />
                    <ListItem
                      sx={{
                        background: '#FBFBFC',
                        boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1)',
                        borderRadius: '0.5rem',
                        width: '388px',
                        margin: '0 auto',
                      }}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="mostrar dia da semana"
                        >
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
                          <PinIcon fill={tarefa.color} />
                        </Avatar>
                      </ListItemAvatar>

                      <ListItemText key={index} primary={`${tarefa.task}`} />
                    </ListItem>
                  </List>
                )
              }
            )
          : 'Não possui tarefas'}
      </Grid>
      {
        <ModalCreateTask
          tasks={data}
          open={openModal}
          handleOpen={() => handleOpen}
          handleClose={() => handleClose()}
        />
      }
    </div>
  )
}

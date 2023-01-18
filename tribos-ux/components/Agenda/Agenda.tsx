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
  const user = useUser()
  const session = useSession()

  const [data, setData] = useState(null)

  useEffect(() => {
    async function loadData() {
      let { data: tarefas, error } = await supabase
        .from('todos')
        .select('task,description,color,end_at,start_at')
        .eq('user_id', id)

      if (error) {
        console.error(error)
      }

      tarefas === undefined || tarefas.length === 0
        ? setData(['Não possui tarefas'])
        : setData(tarefas)
    }

    // Only run query once user is logged in.
    if (user) loadData()
  }, [])

  console.log(data)

  const slide = [<DaysOfweek day={'seg'} number={1} />]

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  } as const

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
          {data && data.length !== 1 ? (
            <>
              <div>
                {data.map(
                  (tarefa: { start_at: string | Date }, index: React.Key) => {
                    const inicio = new Date(tarefa.start_at).toLocaleDateString(
                      'pt-BR',
                      options
                    )

                    return (
                      <ListItemText
                        sx={{ marginX: '1.75rem' }}
                        key={index}
                        primary={`${inicio[0].toUpperCase() + inicio.slice(1)}`}
                      />
                    )
                  }
                )}
              </div>
              <ListItem
                sx={{
                  background: '#FBFBFC',
                  boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1)',
                  borderRadius: '0.5rem',
                  width: '388px',
                  margin: '0 auto',
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
                {data.map((tarefa, index) => (
                  <ListItemText key={index} primary={`${tarefa.title}`} />
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
          tasks={data}
          open={openModal}
          handleOpen={() => handleOpen}
          handleClose={() => handleClose()}
        />
      }
    </div>
  )
}

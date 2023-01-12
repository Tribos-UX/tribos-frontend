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
import Example from '../Carousel/CarouselMUI/Example'
import CarouselWithArrow from '../Carousel/CarouselWithArrows'
import ModalCreateTask from '../Modals/Task/ModalCreateTask'
import DaysOfweek from './Days/DaysOfweek'

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  )
}

const slide = [
  <DaysOfweek day="seg" number={1} />,
  <DaysOfweek day="ter" number={2} />,
  <DaysOfweek day="qua" number={3} />,
  <DaysOfweek day="qui" number={4} />,
  <DaysOfweek day="sex" number={5} />,
  <DaysOfweek day="sab" number={6} />,
  <DaysOfweek day="dom" number={7} />,
  <DaysOfweek day="seg" number={1} />,
  <DaysOfweek day="seg" number={1} />,
  <DaysOfweek day="seg" number={1} />,
  <DaysOfweek day="seg" number={1} />,
]

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

  console.log(session)

  useEffect(() => {
    async function loadData() {
      const { data: tarefas, error } = await supabase
        .from('profiles')
        .select('tarefas')
        .eq('id', user.id)
      if (error || tarefas.length === 0) {
        setData('Não possui tarefas')
      }
      setData(tarefas)
      console.log(user.id)
      console.log(data)
    }

    // Only run query once user is logged in.
    if (user || session) loadData()
  }, [session])
  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        <span className={styles.agenda_icon}>{<AgendaIcon />}</span>
        Sua agenda
        <IconButton onClick={handleOpen} aria-label="adicionar">
          {sinalMais}
        </IconButton>
      </div>
      <CarouselWithArrow slides={slide} />

      <Grid item xs={12} md={6}>
        <List
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
          }}
          dense={dense}
        >
          {data && (
            <ListItem
              sx={{
                background: '#FBFBFC',
                boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1)',
                borderRadius: '0.5rem',
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
                <>
                  <div key={index}>{tarefas.data}</div>
                  <ListItemText primary={`${tarefas.tarefa}`} />
                </>
              ))}
            </ListItem>
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

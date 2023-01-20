import ModalEditGroupInfo from '@/components/Modals/Group/ModalEditGroupInfo'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Grupos from 'pages/dashboard/group/moderador'
import * as React from 'react'
import styles from './CreatedGroup.module.scss'

const style = {
  width: '105px',
  backgroundColor: '#d87036',
  borderRadius: '16px',
  marginTop: '0',

  '&:hover': {
    color: '#d87036',
    backgroundColor: '#fbfbfc',
  },
}

export default function CardProfile({
  description,
  cidade,
  discord,
  membros,
  privacidade,
}) {
  const [openModal, setOpenModal] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  return (
    <>
      <Card sx={{ width: 786, height: 406 }}>
        <div className={styles.card_new_group_content}>
          <div className={styles.card_new_group_description}>
            <h1>Descrição</h1>
            <p>{description}</p>
          </div>
          <div className={styles.card_new_group_location}>
            <h1>Membros</h1>
            <p>{membros}</p>
          </div>
          <div className={styles.card_new_group_location}>
            <h1>Cidade/Estado</h1>
            <span>{cidade}</span>
          </div>
          <div className={styles.card_new_group_social}>
            <h1>Canal de comunicação</h1>
            <span>linkedin.com/felipesoares123</span>
            <span>behance.com/felipesoares123</span>
          </div>
          <div className={styles.card_new_group_tag}>
            <h1>Privacidade</h1>
            <span>{privacidade}</span>
          </div>
          <Button
            variant="contained"
            sx={style}
            onClick={() => setOpenModal(!openModal)}
          >
            Editar
          </Button>
        </div>
      </Card>
      {
        <ModalEditGroupInfo
          open={openModal}
          handleOpen={() => handleOpen}
          handleClose={() => handleClose()}
        />
      }
    </>
  )
}
